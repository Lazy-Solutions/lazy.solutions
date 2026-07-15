import { i as head, u as html } from "../../../chunks/server.js";
//#region src/routes/Support.svelte
function Support($$renderer) {
	$$renderer.push(`<main class="support-page"><article id="support" class="support-card"><div class="support-content"><h1>Need Help?</h1> <h2>Chat with us on Discord</h2> <a href="https://discord.gg/8X5Gtgd">https://discord.gg/8X5Gtgd</a></div></article></main>`);
}
//#endregion
//#region src/routes/support/+page.svelte
function _page($$renderer) {
	const schema = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		"url": "https://lazy.solutions/support",
		"name": "Support | Lazy Solutions Indie Game Studio",
		"description": "Support and help for Lazy Solutions Indie Game Studio assets and tools.",
		"publisher": {
			"@type": "Organization",
			"name": "Lazy Solutions",
			"url": "https://lazy.solutions"
		},
		"breadcrumb": {
			"@type": "BreadcrumbList",
			"itemListElement": [{
				"@type": "ListItem",
				"position": 1,
				"name": "Home",
				"item": "https://lazy.solutions"
			}, {
				"@type": "ListItem",
				"position": 2,
				"name": "Support",
				"item": "https://lazy.solutions/support"
			}]
		}
	};
	head("1j5tn20", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Support | Lazy Solutions Indie Game Studio</title>`);
		});
		$$renderer.push(`<meta name="description" content="Support and help for Lazy Solutions Indie Game Studio assets and tools."/> <meta name="keywords" content="Lazy Solutions support, Unity asset support, Advanced Scene Manager support"/> <meta name="author" content="Patric Keisala"/> <link rel="canonical" href="https://lazy.solutions/support"/> <meta property="og:title" content="Support | Lazy Solutions Indie Game Studio"/> <meta property="og:description" content="Support and help for Lazy Solutions Indie Game Studio assets and tools."/> <meta property="og:image" content="https://lazy.solutions/media/images/asm_feature.webp"/> <meta property="og:url" content="https://lazy.solutions/support"/> <meta property="og:type" content="website"/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title" content="Support | Lazy Solutions Indie Game Studio"/> <meta name="twitter:description" content="Support and help for Lazy Solutions Indie Game Studio assets and tools."/> ${html(`<script type="application/ld+json">${JSON.stringify(schema)}<\/script>`)}`);
	});
	Support($$renderer, {});
}
//#endregion
export { _page as default };
