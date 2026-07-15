import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DEKd_ww3.js","_app/immutable/chunks/CPOeMR4X.js","_app/immutable/chunks/ChP37wQh.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/CVZlzthI.js"];
export const stylesheets = ["_app/immutable/assets/0.B-eglu1T.css"];
export const fonts = [];
