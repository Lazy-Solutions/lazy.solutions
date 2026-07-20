export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","CNAME","favicon.png","fonts/IBMPlexSans-Italic.woff2","fonts/IBMPlexSans.woff2","fonts/Manrope.woff2","googlef8868a3ea3f165fa.html","llms.txt","media/blog/broken-unity.webp","media/blog/first-post-banner.webp","media/images/asm_bg_blue.webp","media/images/asm_feature.webp","media/images/bg.webp","media/images/company_logo_white.webp","media/images/itch-io-logo-white-new.svg","media/images/logo.svg","media/images/logo1.webp","media/images/LogoWhite.png","media/images/logo_noborder.webp","media/images/logo_white.webp","media/images/NoYes.png","media/images/portrait/andreas.webp","media/images/portrait/patric.webp","media/images/showcase/paladinsoath.png","media/images/showcase/paladinsoath.webp","media/images/showcase/Seneca7_CoverPhoto.webp","media/images/showcase/Seneca7_CoverPhoto_1920x1080_large.jpg","media/images/star.webp","media/images/web_asm_icon.webp","robots.txt","sitemap.xml"]),
	mimeTypes: {".png":"image/png",".woff2":"font/woff2",".html":"text/html",".txt":"text/plain",".webp":"image/webp",".svg":"image/svg+xml",".jpg":"image/jpeg",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.B0q87VLs.js",app:"_app/immutable/entry/app.ClUYbm-8.js",imports:["_app/immutable/entry/start.B0q87VLs.js","_app/immutable/chunks/GUGG0Bud.js","_app/immutable/chunks/Cl2OrdxH.js","_app/immutable/chunks/CymRgjIC.js","_app/immutable/entry/app.ClUYbm-8.js","_app/immutable/chunks/Cl2OrdxH.js","_app/immutable/chunks/DYl5dUZ5.js","_app/immutable/chunks/xihTtKlq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/advanced-scene-manager","/blog","/blog/__data.json","/showcase/advanced-scene-manager","/support","/blog/page/1","/blog/unity-scene-management-best-practices","/blog/welcome-to-lazy-solutions-blog"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
