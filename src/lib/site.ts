export function normalizeSite(value?: string): string | undefined {
  if (!value?.trim()) return undefined;
  const url = new URL(value.trim());
  if (
    url.protocol !== "https:" ||
    url.username ||
    url.password ||
    url.port ||
    url.pathname !== "/" ||
    url.search ||
    url.hash ||
    url.hostname === "localhost" ||
    /^127\./.test(url.hostname)
  ) {
    throw new Error(
      "PUBLIC_SITE_URL debe ser el origen HTTPS definitivo, sin rutas ni credenciales.",
    );
  }
  return url.origin;
}
