import * as server from '../entries/pages/blog/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/+page.server.js";
export const imports = ["_app/immutable/nodes/4.uhlOLo0O.js","_app/immutable/chunks/Cl2OrdxH.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/DA1Kgy3G.js"];
export const stylesheets = [];
export const fonts = [];
