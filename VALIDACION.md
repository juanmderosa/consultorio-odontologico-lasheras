# Verificación — 23 de octubre de 2026

## Automatizada

- Node activo 24.22.1; pnpm 10.18.3.
- Dependencias contrastadas con npm: Astro 7.4.2, Tailwind 4.3.3, Vite 8.3.5, TypeScript 6.0.3 admitido por @astrojs/check 0.9.12, Vitest 5.0.5. Sin overrides ni peers forzados.
- Instalación con pnpm install --frozen-lockfile correcta y árbol de dependencias revisado.
- pnpm check: 0 errores, 0 advertencias, 0 hints.
- pnpm test: 10 pruebas aprobadas (codificación de WhatsApp, teléfono y dominio).
- pnpm build: salida estática e imágenes AVIF/WebP/JPEG con respaldo; logo WebP/PNG.
- pnpm verify:build: un h1, título y descripción únicos, anclas válidas, imágenes con dimensiones y alternativas, recursos existentes, enlaces externos seguros, schema Dentist e imagen social 1200 × 630.
- axe-core 4.14.0 en navegador local con etiquetas WCAG A/AA, incluidas 2.1 y 2.2: sin infracciones detectadas a 320, 390 y 1280 px. En móvil devuelve revisiones incompletas de contraste y coincidencia de etiquetas; a 1280 px no hubo revisiones incompletas. No equivale a certificación.
- Sin desbordes horizontales en el documento a 320, 390 y 1280 px. El servidor de QA con iframes es externo al sitio y no se incluye en dist.

## Manual

- Inspección visual de portada en móvil y escritorio, fotografía de recepción y navegación por anclas.
- Menú móvil: apertura, Tab hacia Especialidades, Escape, cierre y devolución del foco al botón comprobados.
- WhatsApp: destino y texto revisados en HTML y pruebas, sin enviar mensajes ni confirmar turnos.
- Contrastes de pares principales medidos: blanco/azul 14,14:1; azul/menta 12,36:1; turquesa/menta 5,93:1. Texto secundario con color oscuro, sin texto sobre fotos.
- El umbral móvil se amplió a 720 px para evitar columnas estrechas en paneles de vista previa.

## Pendiente y límites

- No se realizó sesión con lector de pantalla ni prueba completa de zoom del navegador o dispositivos físicos.
- Dominio sin confirmar: salida final noindex/nofollow, robots bloqueado y sin canonical ni sitemap. La habilitación mediante dominio está cubierta por pruebas de normalización; no se hizo publicación ni validación de redes sociales públicas.
- Redacción breve de presentación adaptada al material aportado y pendiente de revisión comercial. Sin dirección exacta, horarios, matrículas, reseñas o precios inventados.
