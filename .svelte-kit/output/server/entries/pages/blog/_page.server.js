import { t as getPosts } from "../../../chunks/blog.js";
//#region src/routes/blog/+page.server.js
var perPage = 10;
function load() {
	return {
		posts: getPosts().slice(0, perPage),
		page: 1,
		totalPages: Math.ceil(getPosts().length / perPage)
	};
}
//#endregion
export { load };
