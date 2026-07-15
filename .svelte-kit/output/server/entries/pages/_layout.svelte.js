import "../../chunks/internal.js";
import { S as attr, c as unsubscribe_stores, m as getContext, o as slot, s as store_get, t as attr_class } from "../../chunks/server.js";
import "../../chunks/client.js";
//#region node_modules/@sveltejs/kit/src/runtime/app/stores.js
/**
* A function that returns all of the contextual stores. On the server, this must be called during component initialization.
* Only use this if you need to defer store subscription until after the component has mounted, for some reason.
*
* @deprecated Use `$app/state` instead (requires Svelte 5, [see docs for more info](https://svelte.dev/docs/kit/migrating-to-sveltekit-2#SvelteKit-2.12:-$app-stores-deprecated))
*/
var getStores = () => {
	const stores$1 = getContext("__svelte__");
	return {
		/** @type {typeof page} */
		page: { subscribe: stores$1.page.subscribe },
		/** @type {typeof navigating} */
		navigating: { subscribe: stores$1.navigating.subscribe },
		/** @type {typeof updated} */
		updated: stores$1.updated
	};
};
/**
* A readable store whose value contains page data.
*
* On the server, this store can only be subscribed to during component initialization. In the browser, it can be subscribed to at any time.
*
* @deprecated Use `page` from `$app/state` instead (requires Svelte 5, [see docs for more info](https://svelte.dev/docs/kit/migrating-to-sveltekit-2#SvelteKit-2.12:-$app-stores-deprecated))
* @type {import('svelte/store').Readable<import('@sveltejs/kit').Page>}
*/
var page = { subscribe(fn) {
	return getStores().page.subscribe(fn);
} };
//#endregion
//#region src/components/Navigation.svelte
function Navigation($$renderer) {
	const publisherUrl = "https://af.unity.com/sr/camref:1100ljPVc/pubref:website/destination:https://assetstore.unity.com/publishers/48996";
	let navOpen = false;
	$$renderer.push(`<nav id="navigation" aria-label="Primary navigation"${attr_class("", void 0, { "nav-open": navOpen })}><a class="brand-mark"${attr("href", "/")} aria-label="Lazy Solutions home"><img class="lazy_icon" src="/media/images/logo.svg" alt="Lazy Solutions Homepage"/> <span class="brand-name">Lazy Solutions</span></a> <button class="menu-toggle" aria-label="Toggle menu"${attr("aria-expanded", navOpen)}><i class="fas fa-bars"></i></button> <div class="nav-links"><a href="/#Projects">Projects</a> <a href="/#About">About Us</a> <a href="/#navbar-footer">Social</a> <a target="_blank" rel="noopener noreferrer"${attr("href", publisherUrl)}>Asset Store</a> <a href="/support">Support</a></div></nav>`);
}
//#endregion
//#region src/components/Footer.svelte
function Footer($$renderer) {
	$$renderer.push(`<footer id="navbar-footer"><div class="footer-inner"><div class="footer-brand"><p>Professional Unity assets and production workflow tools from Sweden.</p></div> <div class="footer-links"><h2>Social</h2> <nav class="social-media" aria-label="Social links"><a target="_blank" rel="noopener noreferrer" href="https://discord.com/invite/ayE4EHB6bQ" class="fab fa-discord" aria-label="Discord"></a> <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@lazysolutions" class="fab fa-youtube" aria-label="YouTube"></a> <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Lazy_Solutions" class="fab fa-x-twitter" aria-label="X"></a></nav></div> <div class="footer-meta"><p>This site contains Unity Asset Store affiliate links.</p> <p>© 2018 - 2026 Patric Keisala. All rights reserved.</p></div></div></footer>`);
}
//#endregion
//#region src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		$: store_get($$store_subs ??= {}, "$page", page).url.pathname;
		Navigation($$renderer, {});
		$$renderer.push(`<!----> <!--[-->`);
		slot($$renderer, $$props, "default", {}, null);
		$$renderer.push(`<!--]--> `);
		Footer($$renderer, {});
		$$renderer.push(`<!---->`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
export { _layout as default };
