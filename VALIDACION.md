# Verificación del rediseño editorial — 23 de octubre de 2026

## Implementación

Diseño basado en code.html, DESIGN.md y screen.png aportados. Se mantienen el logo original, las tres fotos reales, los servicios confirmados, los nombres y el teléfono +54 11 2378-5988. La galería muestra las tres imágenes sin carrusel. La ilustración de higiene se recortó de la publicación original aportada.

Newsreader y Outfit locales mediante Fontsource 5.3.0, font-display: swap; licencias SIL OFL 1.1 en public/licenses. No se usan scripts CDN, icon fonts remotas, retratos generados ni las fotos ficticias de la referencia.

## Comprobaciones automáticas

- Node activo 24.22.1 y pnpm 10.18.3.
- pnpm check: 0 errores, 0 advertencias, 0 hints.
- pnpm test: 10 pruebas aprobadas de WhatsApp y dominio.
- pnpm build y pnpm verify:build correctos; HTML, metadatos, imágenes, tres fotos en galería y enlaces revisados.
- axe-core 4.14.0 en navegador a 320, 390 y 1280 px: sin infracciones detectadas. Revisiones incompletas de contraste en los tres tamaños y de coincidencia de etiquetas en móvil; requieren juicio manual.
- Sin desbordes horizontales en el documento a 320, 390 y 1280 px. Imágenes de carga inmediata completas y fuentes cargadas en los tres tamaños.
- Contrastes medidos de los pares de texto y fondos: #1b2b4a/#fdf9f2: 13.42:1; #44474e/#f7f3ec: 8.41:1; #6d5d23/#fdf9f2: 6.18:1; #ffffff/#1b2b4a: 14.08:1; #1b2b4a/#f7e299: 10.93:1; #687687/#ffffff: 4.64:1.

## Revisión manual

Portada, especialidades y galería revisadas visualmente. Menú móvil probado con apertura, Tab a Especialidades y Escape con devolución del foco. Cabecera fija con fondo opaco; anclas con espacio para no tapar títulos. La galería se apila en móvil.

No se envían mensajes de prueba ni se confirman turnos: WhatsApp prepara un mensaje que el visitante revisa y envía.

## Límites y contenido

No se realizó sesión con lector de pantalla, prueba exhaustiva de zoom ni dispositivos físicos. No se afirma certificación WCAG. La redacción de presentación y descripciones breves se adapta a los datos aportados y queda para revisión comercial. Se omiten horarios, certificaciones, cifras publicitarias y promesas clínicas no confirmadas del diseño de referencia.

El sitio sigue sin dominio confirmado y sin publicar: noindex/nofollow y robots bloqueado. PUBLIC_SITE_URL habilita canonical, metadatos sociales y sitemap al configurar el dominio HTTPS definitivo y recompilar.
