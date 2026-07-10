import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.7E3bTuEE.js","_app/immutable/chunks/CPOeMR4X.js","_app/immutable/chunks/pOVaQT3G.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/CVZlzthI.js"];
export const stylesheets = ["_app/immutable/assets/0.DCF-7cP_.css"];
export const fonts = [];
