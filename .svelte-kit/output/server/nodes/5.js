

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/support/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.C579Gi34.js","_app/immutable/chunks/hqYuSIdw.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/CrJQMqbp.js"];
export const stylesheets = [];
export const fonts = [];
