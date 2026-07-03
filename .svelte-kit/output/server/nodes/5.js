

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/support/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.DkMmg9sF.js","_app/immutable/chunks/yO4y2dBs.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/BynSQlVi.js"];
export const stylesheets = [];
export const fonts = [];
