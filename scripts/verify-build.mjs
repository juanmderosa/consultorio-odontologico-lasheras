import { readFile, access } from "node:fs/promises";
import assert from "node:assert/strict";
import sharp from "sharp";
const html = await readFile("dist/index.html", "utf8");
assert.equal((html.match(/<h1\b/g) || []).length, 1);
assert.equal((html.match(/<title>/g) || []).length, 1);
assert.equal((html.match(/name="description"/g) || []).length, 1);
assert.ok(html.includes('lang="es-AR"'));
assert.ok(html.includes("541123785988"));
assert.ok(
  !/Miraglia|Almonaci|__WA__|__ROOM__|__LOGO__|data-lucide|Tweak/.test(html),
);
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
assert.equal(ids.length, new Set(ids).size);
for (const match of html.matchAll(/href="#([^"]+)"/g))
  assert.ok(ids.includes(match[1]), `Ancla ${match[1]}`);
for (const match of html.matchAll(/<img[^>]+src="([^"]+)"[^>]*>/g)) {
  assert.ok(/\balt(?:=|\s|>)/.test(match[0]));
  assert.ok(/\bwidth=/.test(match[0]));
  assert.ok(/\bheight=/.test(match[0]));
  if (match[1].startsWith("/")) await access("dist" + match[1]);
}
for (const match of html.matchAll(/<a\b[^>]+target="_blank"[^>]*>/g))
  assert.ok(match[0].includes("noopener noreferrer"));
const json = html.match(
  /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
);
assert.equal(JSON.parse(json[1])["@type"], "Dentist");
const image = await sharp("dist/social.png").metadata();
assert.equal(image.width, 1200);
assert.equal(image.height, 630);
const robots = await readFile("dist/robots.txt", "utf8");
if (!html.includes('rel="canonical"')) {
  assert.ok(html.includes("noindex, nofollow"));
  assert.ok(robots.includes("Disallow: /"));
} else {
  assert.ok(html.includes("index, follow"));
  assert.ok(robots.includes("Sitemap: https://"));
  assert.ok(html.includes('property="og:image"'));
  await access("dist/sitemap-index.xml");
}
console.log(
  "HTML, metadatos, imágenes, enlaces y estado de indexación: correctos.",
);
