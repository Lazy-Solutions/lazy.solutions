import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DftjHbXD.js","_app/immutable/chunks/Cl2OrdxH.js","_app/immutable/chunks/GUGG0Bud.js","_app/immutable/chunks/CymRgjIC.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/DJtZkepv.js"];
export const stylesheets = ["_app/immutable/assets/0.2D-ApCto.css"];
export const fonts = [];
