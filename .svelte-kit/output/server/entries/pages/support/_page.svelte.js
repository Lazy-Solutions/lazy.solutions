import { a as head } from "../../../chunks/server.js";
//#region src/routes/Support.svelte
function Support($$renderer) {
	$$renderer.push(`<main><article id="support"><div><h1>Need Help?</h1> <h2>Chat with us on discord</h2> <a href="https://discord.gg/8X5Gtgd">https://discord.gg/8X5Gtgd</a></div></article></main>`);
}
//#endregion
//#region src/routes/support/+page.svelte
function _page($$renderer) {
	head("1j5tn20", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Support | Lazy Solutions Indie Game Studio</title>`);
		});
		$$renderer.push(`<meta name="description" content="Support and help for Lazy Solutions Indie Game Studio assets and tools."/> <meta name="keywords" content="Lazy Solutions support, Unity asset support, Advanced Scene Manager support"/> <meta name="author" content="Patric Keisala"/> <link rel="canonical" href="https://lazy.solutions/support/"/>`);
	});
	Support($$renderer, {});
}
//#endregion
export { _page as default };
