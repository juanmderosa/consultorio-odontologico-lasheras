import { getViteConfig } from "astro/config";
import type { ViteUserConfig } from "vitest/config";
export default getViteConfig({
  test: { include: ["tests/**/*.test.ts"] },
} satisfies ViteUserConfig);
