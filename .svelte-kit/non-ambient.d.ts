
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/asm" | "/showcase" | "/showcase/advanced-scene-manager" | "/support";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/asm": Record<string, never>;
			"/showcase": Record<string, never>;
			"/showcase/advanced-scene-manager": Record<string, never>;
			"/support": Record<string, never>
		};
		Pathname(): "/" | "/asm" | "/showcase/advanced-scene-manager" | "/support";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.nojekyll" | "/CNAME" | "/favicon.png" | "/googlef8868a3ea3f165fa.html" | "/media/images/asm_bg_blue.webp" | "/media/images/asm_feature.webp" | "/media/images/bg.webp" | "/media/images/company_logo_white.webp" | "/media/images/itch-io-logo-white-new.svg" | "/media/images/logo1.webp" | "/media/images/LogoWhite.png" | "/media/images/logo_noborder.webp" | "/media/images/logo_white.webp" | "/media/images/NoYes.png" | "/media/images/portrait/andreas.webp" | "/media/images/portrait/patric.webp" | "/media/images/showcase/paladinsoath.png" | "/media/images/showcase/Seneca7_CoverPhoto_1920x1080.jpg" | "/media/images/star.webp" | "/media/images/web_asm_icon.webp" | "/robots.txt" | "/sitemap.xml" | string & {};
	}
}