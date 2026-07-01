import { C as escape_html, S as attr, a as head, i as ensure_array_like } from "../../../chunks/server.js";
//#region src/routes/Asm.svelte
function Asm($$renderer) {
	const assetStoreUrl = "https://af.unity.com/sr/camref:1100ljPVc/destination:https://assetstore.unity.com/packages/tools/utilities/advanced-scene-manager-3-330926";
	const trialUrl = "https://github.com/Lazy-Solutions/AdvancedSceneManager/tree/main/trial";
	const features = [
		["Additive Scene Loading", "Load and unload scenes cleanly without the usual headaches."],
		["Custom Loading Screens", "Built-in support for smooth loading screens with progress handling."],
		["Scene Collections", "Organize your scenes into groups and load them together easily."],
		["Rich Loading Events", "Callbacks for every stage of the loading process."],
		["Editor Visualization", "Helpful tools to see and manage your scene flow in the editor."],
		["Persistent Objects", "Better handling of DontDestroyOnLoad and cross-scene references."]
	];
	$$renderer.push(`<main class="asm-page"><header class="asm-product-header"><div><img src="/media/images/web_asm_icon.webp" alt="Advanced Scene Manager 3 icon"/></div></header> <section class="asm-section asm-hero-section"><h1>Advanced Scene Manager 3 <br/> A Better SceneManager for Unity</h1> <p class="subtitle">Simplify additive scene loading, loading screens, and multi-scene workflows with a powerful and reliable <strong>SceneManager</strong> replacement designed for real game development.</p> <div class="asm-cta-buttons"><a${attr("href", assetStoreUrl)} class="buy-btn" target="_blank" rel="noopener noreferrer">Get It on the Asset Store</a> <a${attr("href", trialUrl)} class="trial-btn" target="_blank" rel="noopener noreferrer">Try Free Trial</a></div></section> <section class="asm-section"><h2>What is the best Unity Scene Manager?</h2> <p>Advanced Scene Manager 3 (ASM3) is a complete <strong>Unity SceneManager</strong> replacement that makes <strong>scene management in Unity</strong> significantly easier and more reliable.</p> <p>Whether you need to <strong>Unity Scene Manager load scene</strong> additively, create smooth custom loading
      screens, or manage complex multi-scene setups, ASM3 removes the usual headaches associated with the built-in
      SceneManager.</p></section> <section class="asm-section"><h2>See Advanced Scene Manager 3 in Action</h2> <iframe width="100%" src="https://www.youtube.com/embed/K0wFdUaBmbw?rel=0&amp;modestbranding=1" title="Advanced Scene Manager 3 Overview" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe></section> <section class="asm-section"><h2>Key Features</h2> <div class="asm-features-grid"><!--[-->`);
	const each_array = ensure_array_like(features);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let feature = each_array[$$index];
		$$renderer.push(`<div class="asm-feature-item"><h3>${escape_html(feature[0])}</h3> <p>${escape_html(feature[1])}</p></div>`);
	}
	$$renderer.push(`<!--]--></div></section> <section class="asm-section"><div class="review-stars" aria-label="Five star review"><!--[-->`);
	const each_array_1 = ensure_array_like(Array(5));
	for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
		each_array_1[$$index_1];
		$$renderer.push(`<img src="/media/images/star.webp" alt=""/>`);
	}
	$$renderer.push(`<!--]--></div> <p>Since 2021, Advanced Scene Manager has helped hundreds of Unity developers build more stable and organized
      multi-scene games. Known for its ease of use and excellent support.</p></section> <section class="asm-section"><h2>Ready to simplify your scene management?</h2> <p>Try the free trial first, then grab the full version on the Unity Asset Store.</p> <div class="asm-cta-buttons"><a${attr("href", assetStoreUrl)} class="buy-btn" target="_blank" rel="noopener noreferrer">Buy on Unity Asset Store</a></div> <p class="support">Questions? Join our <a href="https://discord.com/invite/ayE4EHB6bQ" target="_blank" rel="noopener noreferrer">Discord community</a> for support and updates.</p></section></main>`);
}
//#endregion
//#region src/routes/asm/+page.svelte
function _page($$renderer) {
	head("7awhyg", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Advanced Scene Manager 3 - Better SceneManager for Unity</title>`);
		});
		$$renderer.push(`<meta name="description" content="Advanced Scene Manager 3 is a powerful Unity SceneManager replacement that simplifies additive scene loading, loading screens, and multi-scene management."/> <meta name="keywords" content="Advanced Scene Manager, SceneManager Unity, Unity Scene Management, Unity Scene Manager, additive scene loading, Unity SceneManager, scene management unity, Unity asset"/> <meta name="author" content="Patric Keisala"/> <link rel="canonical" href="https://lazy.solutions/asm/"/> <meta name="google-site-verification" content="UOtRF1dl2NLgyJQr4NMBxI7m5Az1jrhrCb3ya5N2MNg"/> <meta property="og:title" content="Advanced Scene Manager 3 - Better SceneManager for Unity"/> <meta property="og:description" content="A powerful Unity SceneManager replacement for smooth additive loading, custom loading screens, and reliable scene management."/> <meta property="og:image" content="https://lazy.solutions/media/images/asm_feature.webp"/> <meta property="og:url" content="https://lazy.solutions/asm/"/> <meta property="og:type" content="website"/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title" content="Advanced Scene Manager 3 - Better SceneManager for Unity"/> <meta name="twitter:description" content="Simplify additive scene loading and multi-scene workflows in Unity."/>`);
	});
	Asm($$renderer, {});
}
//#endregion
export { _page as default };
