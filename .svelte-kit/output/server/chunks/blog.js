import { n as unity_scene_management_best_practices_default, t as welcome_to_lazy_solutions_blog_default } from "./welcome-to-lazy-solutions-blog.js";
import matter from "gray-matter";
//#region src/lib/blog.js
var posts = /* #__PURE__ */ Object.assign({
	"/src/blog/unity-scene-management-best-practices.md": unity_scene_management_best_practices_default,
	"/src/blog/welcome-to-lazy-solutions-blog.md": welcome_to_lazy_solutions_blog_default
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
			formattedDate: new Date(data.date).toLocaleDateString("en-UK", {
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
