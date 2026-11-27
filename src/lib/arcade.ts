/**
 * Publikační brána KRAAU Arcade.
 *
 * Herní obsah čeká na odborné schválení, proto je herna ve výchozím stavu
 * mimo produkční build (stránka komponentu vůbec neimportuje do výstupu).
 * Zapnutá je:
 *   - při lokálním vývoji (`npm run dev`),
 *   - ve vývojovém náhledu: `PUBLIC_KRAAU_ARCADE_PREVIEW=true npm run build`.
 * Po schválení autorským týmem stačí tuto proměnnou nastavit v deploy workflow
 * (nebo zde vrátit `true`) a změnit reviewStatus v knowledge.js.
 */
export const arcadePreviewEnabled =
  import.meta.env.DEV || import.meta.env.PUBLIC_KRAAU_ARCADE_PREVIEW === 'true';
