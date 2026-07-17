import { O as attr, a as derived, k as escape_html, n as attr_style, o as ensure_array_like } from "./server.js";
//#region src/components/blog/BlogPagination.svelte
function BlogPagination($$renderer, $$props) {
	let { page, totalPages } = $$props;
	$$renderer.push(`<nav class="blog-pagination">`);
	if (page > 1) {
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<a${attr("href", page === 2 ? "/blog" : `/blog/page/${page - 1}`)}>Previous</a>`);
	} else {
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<button disabled="">Previous</button>`);
	}
	$$renderer.push(`<!--]--> `);
	if (page < totalPages) {
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<a${attr("href", `/blog/page/${page + 1}`)}>Next</a>`);
	} else {
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<button disabled="">Next</button>`);
	}
	$$renderer.push(`<!--]--></nav>`);
}
//#endregion
//#region src/components/blog/BlogList.svelte
function BlogList($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		let highlightedPost = derived(() => data.posts.length > 0 ? data.posts[0] : null);
		let regularPosts = derived(() => data.posts.length > 0 ? data.posts.slice(1) : []);
		function seoColor(text, min, max) {
			const length = text.length;
			if (length < min) return "red";
			if (length > max) return "orange";
			return null;
		}
		$$renderer.push(`<section class="blog-section"><div class="blog-container"><h1>Featured</h1> `);
		if (highlightedPost()) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<article class="blog-highlight"><a${attr("href", `/blog/${highlightedPost().slug}`)} class="blog-highlight-link"><div class="blog-highlight-image"><img${attr("src", highlightedPost().image)}${attr("alt", highlightedPost().title)}/></div> <div class="blog-highlight-content"><time${attr("datetime", highlightedPost().formattedDate)}>${escape_html(highlightedPost().formattedDate)}</time> <h2${attr_style("", { color: seoColor(highlightedPost().title, 30, 60) ?? void 0 })}>${escape_html(highlightedPost().title)}</h2> <p${attr_style("", { color: seoColor(highlightedPost().description, 120, 160) ?? void 0 })}>${escape_html(highlightedPost().description)}</p></div></a></article>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <div class="blog-list-classic">`);
		if (regularPosts().length > 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<h3>Read More</h3>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <!--[-->`);
		const each_array = ensure_array_like(regularPosts());
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let post = each_array[$$index];
			$$renderer.push(`<article class="blog-post-classic"><a${attr("href", `/blog/${post.slug}`)} class="blog-post-link-classic"><time${attr("datetime", post.formattedDate)}>${escape_html(post.formattedDate)}</time> <h3${attr_style("", { color: seoColor(post.title, 30, 60) ?? void 0 })}>${escape_html(post.title)}</h3> <p${attr_style("", { color: seoColor(post.description, 120, 160) ?? void 0 })}>${escape_html(post.description)}</p></a></article>`);
		}
		$$renderer.push(`<!--]--></div> `);
		BlogPagination($$renderer, {
			page: data.page,
			totalPages: data.totalPages
		});
		$$renderer.push(`<!----></div></section>`);
	});
}
//#endregion
export { BlogList as t };
