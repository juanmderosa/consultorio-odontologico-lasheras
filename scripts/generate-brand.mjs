import sharp from "sharp";
import { mkdir } from "node:fs/promises";
await mkdir("public", { recursive: true });
await sharp("src/assets/logo.png")
  .resize(96, 96)
  .png()
  .toFile("public/icon.png");
await sharp("src/assets/logo.png")
  .resize(180, 180)
  .png()
  .toFile("public/apple-touch-icon.png");
const text = Buffer.from(
  `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="630" fill="#e3f3f2"/><g fill="#162956" font-family="Arial,sans-serif"><text x="70" y="330" font-size="54">Odontología Integral Las Heras</text><text x="70" y="400" font-size="30">Od. Natalia Borlando · Od. José Manuel Ispizua</text><text x="70" y="465" font-size="28">Con la cercanía de siempre.</text><text x="70" y="535" font-size="24">Gral. Las Heras / Marcos Paz</text></g></svg>`,
);
const logo = await sharp("src/assets/logo.png")
  .resize(160, 160)
  .png()
  .toBuffer();
await sharp(text)
  .composite([{ input: logo, left: 70, top: 65 }])
  .png()
  .toFile("public/social.png");
