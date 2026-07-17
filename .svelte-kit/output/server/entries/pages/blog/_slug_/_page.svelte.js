import { O as attr, a as derived, g as html, k as escape_html, s as head } from "../../../../chunks/server.js";
import { marked } from "marked";
//#region src/routes/blog/[slug]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const html$1 = derived(() => marked(data.content));
		const schema = derived(() => ({
			"@context": "https://schema.org",
			"@type": "BlogPosting",
			headline: data.metadata.title,
			description: data.metadata.description,
			image: data.metadata.image ? `https://lazy.solutions${data.metadata.image}` : "https://lazy.solutions/media/images/asm_feature.webp",
			datePublished: data.metadata.date,
			author: {
				"@type": "Person",
				name: "Patric Keisala"
			},
			publisher: {
				"@type": "Organization",
				name: "Lazy Solutions",
				logo: {
					"@type": "ImageObject",
					url: "https://lazy.solutions/media/images/asm_feature.webp"
				}
			},
			mainEntityOfPage: {
				"@type": "WebPage",
				"@id": `https://lazy.solutions/blog/${data.slug}`
			}
		}));
		head("1teoznn", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>${escape_html(data.metadata.title)} | Lazy Solutions</title>`);
			});
			$$renderer.push(`<meta name="description"${attr("content", data.metadata.description)}/> <meta name="author" content="Patric Keisala"/> <link rel="canonical"${attr("href", `https://lazy.solutions/blog/${data.slug}`)}/> <meta property="og:title"${attr("content", `${data.metadata.title} | Lazy Solutions`)}/> <meta property="og:description"${attr("content", data.metadata.description)}/> <meta property="og:image"${attr("content", data.metadata.image ? `https://lazy.solutions${data.metadata.image}` : "https://lazy.solutions/media/images/asm_feature.webp")}/> <meta property="og:url"${attr("content", `https://lazy.solutions/blog/${data.slug}`)}/> <meta property="og:type" content="article"/> <meta property="article:published_time"${attr("content", data.metadata.date)}/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title"${attr("content", `${data.metadata.title} | Lazy Solutions`)}/> <meta name="twitter:description"${attr("content", data.metadata.description)}/> <meta name="twitter:image"${attr("content", data.metadata.image ? `https://lazy.solutions${data.metadata.image}` : "https://lazy.solutions/media/images/asm_feature.webp")}/> ${html(`<script type="application/ld+json">${JSON.stringify(schema())}<\/script>`)}`);
		});
		$$renderer.push(`<article class="blog-article"><header class="article-header"><time${attr("datetime", data.metadata.date)}>${escape_html(data.metadata.date)}</time> <h1>${escape_html(data.metadata.title)}</h1></header> <div class="article-content">${html(html$1())}</div></article>`);
	});
}
//#endregion
export { _page as default };
