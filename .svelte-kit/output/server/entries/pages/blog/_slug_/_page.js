import { n as unity_scene_management_best_practices_default, t as welcome_to_lazy_solutions_blog_default } from "../../../../chunks/welcome-to-lazy-solutions-blog.js";
import { error } from "@sveltejs/kit";
//#region src/lib/markdown.js
function parseMarkdown(raw) {
	const parts = raw.split("---");
	let metadata = {};
	let content = raw;
	if (parts.length >= 3) {
		const frontmatter = parts[1].trim();
		content = parts.slice(2).join("---").trim();
		frontmatter.split("\n").forEach((line) => {
			const separator = line.indexOf(":");
			if (separator === -1) return;
			const key = line.slice(0, separator).trim();
			metadata[key] = line.slice(separator + 1).trim();
		});
	}
	return {
		metadata,
		content
	};
}
//#endregion
//#region src/routes/blog/[slug]/+page.js
var posts = /* #__PURE__ */ Object.assign({
	"/src/blog/unity-scene-management-best-practices.md": unity_scene_management_best_practices_default,
	"/src/blog/welcome-to-lazy-solutions-blog.md": welcome_to_lazy_solutions_blog_default
});
function load({ params }) {
	const entry = Object.entries(posts).find(([path]) => path.endsWith(`/${params.slug}.md`));
	if (!entry) throw error(404, "Post not found");
	return {
		slug: params.slug,
		...parseMarkdown(entry[1])
	};
}
//#endregion
export { load };
