export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","CNAME","favicon.png","fonts/IBMPlexSans-Italic.woff2","fonts/IBMPlexSans.woff2","fonts/Manrope.woff2","googlef8868a3ea3f165fa.html","llms.txt","media/images/asm_bg_blue.webp","media/images/asm_feature.webp","media/images/bg.webp","media/images/company_logo_white.webp","media/images/itch-io-logo-white-new.svg","media/images/logo.svg","media/images/logo1.webp","media/images/LogoWhite.png","media/images/logo_noborder.webp","media/images/logo_white.webp","media/images/NoYes.png","media/images/portrait/andreas.webp","media/images/portrait/patric.webp","media/images/showcase/paladinsoath.png","media/images/showcase/paladinsoath.webp","media/images/showcase/Seneca7_CoverPhoto.webp","media/images/showcase/Seneca7_CoverPhoto_1920x1080_large.jpg","media/images/star.webp","media/images/web_asm_icon.webp","robots.txt","sitemap.xml"]),
	mimeTypes: {".png":"image/png",".woff2":"font/woff2",".html":"text/html",".txt":"text/plain",".webp":"image/webp",".svg":"image/svg+xml",".jpg":"image/jpeg",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.90db91ot.js",app:"_app/immutable/entry/app.CpxkSmjv.js",imports:["_app/immutable/entry/start.90db91ot.js","_app/immutable/chunks/BsuMTQEe.js","_app/immutable/chunks/hqYuSIdw.js","_app/immutable/entry/app.CpxkSmjv.js","_app/immutable/chunks/hqYuSIdw.js","_app/immutable/chunks/DYl5dUZ5.js","_app/immutable/chunks/xihTtKlq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/advanced-scene-manager",
				pattern: /^\/advanced-scene-manager\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/favicon.ico",
				pattern: /^\/favicon\.ico\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/favicon.ico/_server.js'))
			},
			{
				id: "/showcase/advanced-scene-manager",
				pattern: /^\/showcase\/advanced-scene-manager\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/support",
				pattern: /^\/support\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
