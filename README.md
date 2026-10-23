# Odontología Integral Las Heras

Sitio estático de Natalia Borlando y José Manuel Ispizua. Composición aprobada «Luminosa y contemporánea», implementada con Astro, Tailwind mediante Vite y TypeScript. Proyecto independiente del estudio jurídico; no está publicado.

## Ejecutar

Node 24 LTS y pnpm 10.18.3. Terminal verificada con Node 24.22.1. Si se usa nvm, activar Node 24 antes de instalar.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm check
pnpm test
pnpm build
pnpm verify:build
pnpm preview
```

TypeScript 6.0.3 es la última estable admitida por `@astrojs/check` 0.9.12. TypeScript 7.0.2 todavía no satisface sus peers. Versiones y requisitos contrastados con el registro npm al crear el proyecto; no se fuerzan peers.

## Contenido y contacto

Logo original recortado al símbolo, sin redibujarlo, y fotografías originales en `src/assets/`, optimizados con `Picture`. Fuentes de sistema, sin descargas externas. La redacción adapta el material aportado, con frases breves de presentación para revisión comercial; no hay reseñas, matrículas, dirección exacta ni horarios inventados.

Los botones abren WhatsApp al +54 11 2378-5988 en otra pestaña. Preparan una consulta que el visitante revisa y envía; el turno se coordina por conversación. El teléfono permite llamada directa. No hay backend, almacenamiento de consultas ni reservas automáticas.

## Dominio y SEO

Falta el dominio definitivo. Copiar `.env.example` a `.env` y completar `PUBLIC_SITE_URL` con el origen HTTPS real, sin rutas. Compilar nuevamente. Sin dominio se genera `noindex, nofollow`, robots bloqueado y se omiten canonical, URLs sociales y sitemap. Con dominio se habilitan y se incluye la imagen social PNG 1200 × 630. No configurar dominios ficticios para publicar.

## Organización

`src/pages/index.astro` compone secciones; `src/layouts/SiteLayout.astro` mantiene el documento y `Head` los metadatos. Los componentes mantienen sus estilos y el menú su interacción. `Brand` y `WhatsappLink` son compartidos; `src/data/business.ts` y `src/lib/` reúnen identidad, contacto y normalización del dominio. El CSS global contiene tokens, tipografía y reglas compartidas.

## Verificación

`pnpm check`, pruebas Vitest del enlace de WhatsApp y dominio, build y auditoría del HTML generado. Ver `VALIDACION.md` para resultados y límites de revisión manual. No se afirma certificación WCAG ni prueba con lector de pantalla.
