import * as universal from '../entries/pages/blog/page/_page_/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/page/_page_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/page/[page]/+page.js";
export const imports = ["_app/immutable/nodes/5.Dk6nkGil.js","_app/immutable/chunks/Cl2OrdxH.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/DA1Kgy3G.js","_app/immutable/chunks/BModQ9UP.js"];
export const stylesheets = [];
export const fonts = [];
