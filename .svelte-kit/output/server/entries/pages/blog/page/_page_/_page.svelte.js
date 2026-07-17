import { O as attr, a as derived, g as html, k as escape_html, s as head } from "../../../../../chunks/server.js";
import { t as BlogList } from "../../../../../chunks/BlogList.js";
//#region src/routes/blog/page/[page]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const schema = derived(() => ({
			"@context": "https://schema.org",
			"@type": "Blog",
			"url": `https://lazy.solutions/blog/page/${data.page}`,
			"name": `Lazy Solutions Blog - Page ${data.page}`,
			"description": "Latest updates, tutorials, and insights about Unity assets and game development.",
			"publisher": {
				"@type": "Organization",
				"name": "Lazy Solutions",
				"url": "https://lazy.solutions"
			}
		}));
		head("1k8ychv", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Blog - Page ${escape_html(data.page)} | Lazy Solutions</title>`);
			});
			$$renderer.push(`<meta name="description" content="Latest updates, tutorials, and insights about Unity assets, workflow automation, and game development."/> <meta name="keywords" content="Unity blog, Unity tutorials, game development updates, Lazy Solutions blog"/> <meta name="author" content="Patric Keisala"/> <link rel="canonical"${attr("href", `https://lazy.solutions/blog/page/${data.page}`)}/> <meta property="og:title"${attr("content", `Blog - Page ${data.page} | Lazy Solutions`)}/> <meta property="og:description" content="Latest updates, tutorials, and insights about Unity assets, workflow automation, and game development."/> <meta property="og:image" content="https://lazy.solutions/media/images/asm_feature.webp"/> <meta property="og:url"${attr("content", `https://lazy.solutions/blog/page/${data.page}`)}/> <meta property="og:type" content="website"/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title"${attr("content", `Blog - Page ${data.page} | Lazy Solutions`)}/> <meta name="twitter:description" content="Latest updates, tutorials, and insights about Unity assets, workflow automation, and game development."/> ${html(`<script type="application/ld+json">${JSON.stringify(schema())}<\/script>`)}`);
		});
		BlogList($$renderer, { data });
	});
}
//#endregion
export { _page as default };
