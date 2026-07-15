import "../../chunks/internal.js";
import { D as attr, c as rest_props, d as spread_props, dt as fallback, f as store_get, h as html, l as sanitize_props, n as attributes, p as unsubscribe_stores, r as bind_props, t as attr_class, u as slot, y as getContext } from "../../chunks/server.js";
import "../../chunks/client.js";
import { icon, parse } from "@fortawesome/fontawesome-svg-core";
import { faDiscord, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
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
	$$renderer.push(`<nav id="navigation" aria-label="Primary navigation"${attr_class("", void 0, { "nav-open": navOpen })}><a class="brand-mark"${attr("href", "/")} aria-label="Lazy Solutions home"><img class="lazy_icon" src="/media/images/logo.svg" alt="Lazy Solutions Homepage" height="35" width="42"/> <span class="brand-name">Lazy Solutions</span></a> <button class="menu-toggle" aria-label="Toggle menu"${attr("aria-expanded", navOpen)}><i class="fas fa-bars"></i></button> <div class="nav-links"><a href="/#Projects">Projects</a> <a href="/#About">About Us</a> <a href="/#navbar-footer">Social</a> <a target="_blank" rel="noopener noreferrer sponsored"${attr("href", publisherUrl)}>Asset Store</a> <a href="/support">Support</a></div></nav>`);
}
//#endregion
//#region node_modules/@fortawesome/svelte-fontawesome/src/utils/get-class-list-from-props.js
function classList(props) {
	const { beat, fade, beatFade, bounce, shake, flash, spin, spinPulse, spinReverse, pulse, fixedWidth, inverse, border, listItem, flip, size, rotation, pull } = props;
	const classes = {
		"fa-beat": beat,
		"fa-fade": fade,
		"fa-beat-fade": beatFade,
		"fa-bounce": bounce,
		"fa-shake": shake,
		"fa-flash": flash,
		"fa-spin": spin,
		"fa-spin-reverse": spinReverse,
		"fa-spin-pulse": spinPulse,
		"fa-pulse": pulse,
		"fa-fw": fixedWidth,
		"fa-inverse": inverse,
		"fa-border": border,
		"fa-li": listItem,
		"fa-flip": flip === true,
		"fa-flip-horizontal": flip === "horizontal" || flip === "both",
		"fa-flip-vertical": flip === "vertical" || flip === "both",
		[`fa-${size}`]: typeof size !== "undefined" && size !== null,
		[`fa-rotate-${rotation}`]: typeof rotation !== "undefined" && rotation !== null && rotation !== 0,
		[`fa-pull-${pull}`]: typeof pull !== "undefined" && pull !== null,
		"fa-swap-opacity": props.swapOpacity
	};
	return Object.keys(classes).map((key) => classes[key] ? key : null).filter((key) => key);
}
//#endregion
//#region node_modules/@fortawesome/svelte-fontawesome/src/utils/camelize.js
function _isNumerical(obj) {
	obj = obj - 0;
	return obj === obj;
}
function camelize(string) {
	if (_isNumerical(string)) return string;
	string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
		return chr ? chr.toUpperCase() : "";
	});
	return string.substr(0, 1).toLowerCase() + string.substr(1);
}
//#endregion
//#region node_modules/@fortawesome/svelte-fontawesome/src/converter.js
function styleToString(style) {
	if (typeof style === "string") return style;
	return Object.keys(style).reduce((acc, key) => acc + key.split(/(?=[A-Z])/).join("-").toLowerCase() + ":" + style[key] + ";", "");
}
function convert(createElement, element, extraProps = {}) {
	if (typeof element === "string") return element;
	const children = (element.children || []).map((child) => {
		return convert(createElement, child);
	});
	const mixins = Object.keys(element.attributes || {}).reduce((acc, key) => {
		const val = element.attributes[key];
		if (key === "style") acc.attrs["style"] = styleToString(val);
		else if (key.indexOf("aria-") === 0 || key.indexOf("data-") === 0) acc.attrs[key.toLowerCase()] = val;
		else acc.attrs[camelize(key)] = val;
		return acc;
	}, { attrs: {} });
	return createElement(element.tag, { ...mixins.attrs }, children);
}
//#endregion
//#region node_modules/@fortawesome/svelte-fontawesome/src/logger.js
var PRODUCTION = false;
try {
	PRODUCTION = process.env.NODE_ENV === "production";
} catch (e) {}
function logger_default(...args) {
	if (!PRODUCTION && console && typeof console.error === "function") console.error(...args);
}
//#endregion
//#region node_modules/@fortawesome/svelte-fontawesome/src/utils/normalize-icon-args.js
function normalizeIconArgs(icon) {
	if (icon && typeof icon === "object" && icon.prefix && icon.iconName && icon.icon) return icon;
	if (parse.icon) return parse.icon(icon);
	if (icon === null) return null;
	if (icon && typeof icon === "object" && icon.prefix && icon.iconName) return icon;
	if (Array.isArray(icon) && icon.length === 2) return {
		prefix: icon[0],
		iconName: icon[1]
	};
	if (typeof icon === "string") return {
		prefix: "fas",
		iconName: icon
	};
}
//#endregion
//#region node_modules/@fortawesome/svelte-fontawesome/src/utils/object-with-key.js
function objectWithKey(key, value) {
	return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? { [key]: value } : {};
}
//#endregion
//#region node_modules/@fortawesome/svelte-fontawesome/src/components/SvgElement.svelte
function SvgElement($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let tag = $$props["tag"];
		let props = $$props["props"];
		let children = $$props["children"];
		let style = fallback($$props["style"], null);
		let ref = fallback($$props["ref"], null);
		if (tag !== "svg") throw new Error("SvgElement requires a tag of \"svg\"");
		function processChildren(children) {
			return children?.reduce((acc, child) => {
				return acc + (child.tag ? generateMarkup(child) : child);
			}, "") || "";
		}
		function generateMarkup({ tag, props, children }) {
			return `<${tag} ${Object.keys(props).map((key) => `${key}="${props[key]}"`).join(" ")}>${processChildren(children)}</${tag}>`;
		}
		const markup = processChildren(children);
		const elementStyle = props?.style ? `${props.style}${style || ""}` : style;
		const elementProps = {
			...props,
			style: elementStyle
		};
		$$renderer.push(`<svg${attributes({ ...elementProps }, void 0, void 0, void 0, 3)}>${html(markup)}</svg>`);
		bind_props($$props, {
			tag,
			props,
			children,
			style,
			ref
		});
	});
}
//#endregion
//#region node_modules/@fortawesome/svelte-fontawesome/src/components/FontAwesomeIcon.svelte
function FontAwesomeIcon($$renderer, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	const $$restProps = rest_props($$sanitized_props, [
		"border",
		"mask",
		"maskId",
		"fixedWidth",
		"inverse",
		"flip",
		"icon",
		"listItem",
		"pull",
		"pulse",
		"rotation",
		"size",
		"spin",
		"spinPulse",
		"spinReverse",
		"beat",
		"fade",
		"beatFade",
		"bounce",
		"shake",
		"symbol",
		"title",
		"titleId",
		"transform",
		"swapOpacity",
		"ref",
		"style"
	]);
	$$renderer.component(($$renderer) => {
		let border = fallback($$props["border"], false);
		let mask = fallback($$props["mask"], null);
		let maskId = fallback($$props["maskId"], null);
		let fixedWidth = fallback($$props["fixedWidth"], false);
		let inverse = fallback($$props["inverse"], false);
		let flip = fallback($$props["flip"], false);
		let icon$1 = fallback($$props["icon"], null);
		let listItem = fallback($$props["listItem"], false);
		let pull = fallback($$props["pull"], null);
		let pulse = fallback($$props["pulse"], false);
		let rotation = fallback($$props["rotation"], null);
		let size = fallback($$props["size"], null);
		let spin = fallback($$props["spin"], false);
		let spinPulse = fallback($$props["spinPulse"], false);
		let spinReverse = fallback($$props["spinReverse"], false);
		let beat = fallback($$props["beat"], false);
		let fade = fallback($$props["fade"], false);
		let beatFade = fallback($$props["beatFade"], false);
		let bounce = fallback($$props["bounce"], false);
		let shake = fallback($$props["shake"], false);
		let symbol = fallback($$props["symbol"], false);
		let title = fallback($$props["title"], "");
		let titleId = fallback($$props["titleId"], null);
		let transform = fallback($$props["transform"], null);
		let swapOpacity = fallback($$props["swapOpacity"], false);
		let ref = fallback($$props["ref"], null);
		let style = fallback($$props["style"], null);
		const iconLookup = normalizeIconArgs(icon$1);
		const classes = objectWithKey("classes", [...classList($$sanitized_props), ...($$sanitized_props.class || "").split(" ")]);
		const transformObj = objectWithKey("transform", typeof transform === "string" ? parse.transform(transform) : transform);
		const maskObj = objectWithKey("mask", normalizeIconArgs(mask));
		const renderedIcon = icon(iconLookup, {
			...classes,
			...transformObj,
			...maskObj,
			symbol,
			title,
			titleId,
			maskId
		});
		let result = null;
		if (!renderedIcon) logger_default("Could not find icon", iconLookup);
		else {
			const { abstract } = renderedIcon;
			result = convert((tag, props, children) => {
				return {
					tag,
					props,
					children
				};
			}, abstract[0], $$restProps);
		}
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (result) {
				$$renderer.push("<!--[0-->");
				SvgElement($$renderer, spread_props([result, {
					style,
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					}
				}]));
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]-->`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, {
			border,
			mask,
			maskId,
			fixedWidth,
			inverse,
			flip,
			icon: icon$1,
			listItem,
			pull,
			pulse,
			rotation,
			size,
			spin,
			spinPulse,
			spinReverse,
			beat,
			fade,
			beatFade,
			bounce,
			shake,
			symbol,
			title,
			titleId,
			transform,
			swapOpacity,
			ref,
			style
		});
	});
}
//#endregion
//#region src/components/Footer.svelte
function Footer($$renderer) {
	$$renderer.push(`<footer id="navbar-footer"><div class="footer-inner"><div class="footer-brand"><p>Professional Unity assets and production tools from Sweden.</p></div> <div class="footer-links"><h2>Social</h2> <nav class="social-media" aria-label="Social links"><a target="_blank" rel="noopener noreferrer" href="https://discord.com/invite/ayE4EHB6bQ" aria-label="Discord">`);
	FontAwesomeIcon($$renderer, { icon: faDiscord });
	$$renderer.push(`<!----></a> <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@lazysolutions" aria-label="YouTube">`);
	FontAwesomeIcon($$renderer, { icon: faYoutube });
	$$renderer.push(`<!----></a> <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Lazy_Solutions" aria-label="X">`);
	FontAwesomeIcon($$renderer, { icon: faXTwitter });
	$$renderer.push(`<!----></a></nav></div> <div class="footer-meta"><p>This site contains Unity Asset Store affiliate links.</p> <p>© 2018 - 2026 Patric Keisala. All rights reserved.</p></div></div></footer>`);
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
