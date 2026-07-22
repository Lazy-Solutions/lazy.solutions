import { n as how_to_access_internal_classes_and_methods_in_unity_default, t as why_we_use_partial_classes_when_building_unity_tools_default } from "./why-we-use-partial-classes-when-building-unity-tools.js";
import matter from "gray-matter";
//#region src/lib/blog.js
var posts = /* #__PURE__ */ Object.assign({
	"/src/blog/how-to-access-internal-classes-and-methods-in-unity.md": how_to_access_internal_classes_and_methods_in_unity_default,
	"/src/blog/why-we-use-partial-classes-when-building-unity-tools.md": why_we_use_partial_classes_when_building_unity_tools_default
});
function getPosts() {
	return Object.entries(posts).map(([path, content]) => {
		const slug = path.split("/").pop().replace(".md", "");
		const { data } = matter(content);
		if (!data.published) return null;
		return {
			slug,
			title: data.title ?? slug,
			date: data.date,
			lastmod: data.lastmod ?? data.date,
			formattedDate: new Date(data.date).toLocaleDateString("en-GB", {
				year: "numeric",
				month: "long",
				day: "numeric"
			}),
			description: data.description ?? "",
			image: `/media/blog/${data.image}`
		};
	}).filter(Boolean).sort((a, b) => new Date(b.date) - new Date(a.date));
}
//#endregion
export { getPosts as t };
