import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.nCwLqOFK.js","_app/immutable/chunks/us47Awe6.js","_app/immutable/chunks/DmJziPkk.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/BFinb7D-.js"];
export const stylesheets = ["_app/immutable/assets/0.B_Kll-Hy.css"];
export const fonts = [];
