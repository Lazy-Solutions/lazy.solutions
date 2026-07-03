import { readFile } from "node:fs/promises";
import { join } from "node:path";
//#region src/routes/favicon.ico/+server.js
var prerender = true;
var faviconPath = join(process.cwd(), "public", "favicon.png");
async function GET() {
	const file = await readFile(faviconPath);
	return new Response(file, { headers: {
		"Content-Type": "image/png",
		"Cache-Control": "public, max-age=31536000, immutable"
	} });
}
//#endregion
export { GET, prerender };
