import { t as getPosts } from "../../../../../chunks/blog.js";
//#region src/routes/blog/page/[page]/+page.js
var perPage = 10;
function entries() {
	const totalPages = Math.ceil(getPosts().length / perPage);
	return Array.from({ length: totalPages }, (_, index) => ({ page: String(index + 1) }));
}
function load({ params }) {
	const page = Number(params.page);
	const posts = getPosts();
	return {
		posts: posts.slice((page - 1) * perPage, page * perPage),
		page,
		totalPages: Math.ceil(posts.length / perPage)
	};
}
//#endregion
export { entries, load };
