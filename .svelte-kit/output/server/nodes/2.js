

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DOMrpZT-.js","_app/immutable/chunks/DOxSoypL.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/r0YdtMvv.js"];
export const stylesheets = [];
export const fonts = [];
