import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.yT59FI-H.js","_app/immutable/chunks/Cl2OrdxH.js","_app/immutable/chunks/DlVEfdwO.js","_app/immutable/chunks/CymRgjIC.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/DJtZkepv.js"];
export const stylesheets = ["_app/immutable/assets/0.B1B2NFhE.css"];
export const fonts = [];
