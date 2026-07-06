import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DytrOwUV.js","_app/immutable/chunks/yO4y2dBs.js","_app/immutable/chunks/CE-yfyJV.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/BynSQlVi.js"];
export const stylesheets = ["_app/immutable/assets/0.B_Kll-Hy.css"];
export const fonts = [];
