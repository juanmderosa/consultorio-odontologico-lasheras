import { describe, it, expect } from "vitest";
import { whatsappLink } from "../src/lib/whatsapp";
import { normalizeSite } from "../src/lib/site";
describe("Contacto y dominio", () => {
  it("conserva tildes, saltos y caracteres especiales", () => {
    const text = "Hola José\nConsulta: ortodoncia & más";
    const url = new URL(whatsappLink("541123785988", text));
    expect(url.hostname).toBe("wa.me");
    expect(url.pathname).toBe("/541123785988");
    expect(url.searchParams.get("text")).toBe(text);
  });
  it("rechaza un teléfono que no está normalizado", () =>
    expect(() => whatsappLink("+54 11", "Hola")).toThrow());
  it("omite identidad pública sin dominio", () =>
    expect(normalizeSite("  ")).toBeUndefined());
  it("normaliza el origen HTTPS", () =>
    expect(normalizeSite(" https://consultorio.test/ ")).toBe(
      "https://consultorio.test",
    ));
  it.each([
    "http://consultorio.test",
    "https://consultorio.test/ruta",
    "https://consultorio.test/?x=1",
    "https://consultorio.test/#x",
    "https://localhost",
    "https://usuario:clave@consultorio.test",
  ])("rechaza dominio inválido %s", (value) =>
    expect(() => normalizeSite(value)).toThrow(),
  );
});
