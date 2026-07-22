import * as universal from '../entries/pages/blog/_slug_/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/6.0_AR28NJ.js","_app/immutable/chunks/Cl2OrdxH.js","_app/immutable/chunks/CymRgjIC.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/BmjLfQPq.js"];
export const stylesheets = [];
export const fonts = [];
