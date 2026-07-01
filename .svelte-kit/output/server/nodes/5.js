

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/support/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.CKb5aWWG.js","_app/immutable/chunks/us47Awe6.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/BFinb7D-.js"];
export const stylesheets = [];
export const fonts = [];
