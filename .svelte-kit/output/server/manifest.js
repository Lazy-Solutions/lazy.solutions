export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","CNAME","favicon.png","googlef8868a3ea3f165fa.html","llms.txt","media/images/asm_bg_blue.webp","media/images/asm_feature.webp","media/images/bg.webp","media/images/company_logo_white.webp","media/images/itch-io-logo-white-new.svg","media/images/logo1.webp","media/images/LogoWhite.png","media/images/logo_noborder.webp","media/images/logo_white.webp","media/images/NoYes.png","media/images/portrait/andreas.webp","media/images/portrait/patric.webp","media/images/showcase/paladinsoath.png","media/images/showcase/Seneca7_CoverPhoto_1920x1080.jpg","media/images/star.webp","media/images/web_asm_icon.webp","robots.txt","sitemap.xml"]),
	mimeTypes: {".png":"image/png",".html":"text/html",".txt":"text/plain",".webp":"image/webp",".svg":"image/svg+xml",".jpg":"image/jpeg",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.DwXy6ARS.js",app:"_app/immutable/entry/app.BPDNcH6j.js",imports:["_app/immutable/entry/start.DwXy6ARS.js","_app/immutable/chunks/CD35ZfJ-.js","_app/immutable/chunks/CPOeMR4X.js","_app/immutable/entry/app.BPDNcH6j.js","_app/immutable/chunks/CPOeMR4X.js","_app/immutable/chunks/DYl5dUZ5.js","_app/immutable/chunks/xihTtKlq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/advanced-scene-manager","/favicon.ico","/showcase/advanced-scene-manager","/support"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
