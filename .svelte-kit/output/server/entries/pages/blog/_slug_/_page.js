import { n as how_to_access_internal_classes_and_methods_in_unity_default, t as why_we_use_partial_classes_when_building_unity_tools_default } from "../../../../chunks/why-we-use-partial-classes-when-building-unity-tools.js";
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
	"/src/blog/how-to-access-internal-classes-and-methods-in-unity.md": how_to_access_internal_classes_and_methods_in_unity_default,
	"/src/blog/why-we-use-partial-classes-when-building-unity-tools.md": why_we_use_partial_classes_when_building_unity_tools_default
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
