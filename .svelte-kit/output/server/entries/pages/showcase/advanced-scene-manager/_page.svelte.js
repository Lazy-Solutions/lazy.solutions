import { C as escape_html, S as attr, i as head, r as ensure_array_like, u as html } from "../../../../chunks/server.js";
//#region src/routes/ShowcaseAsm.svelte
function ShowcaseAsm($$renderer) {
	const projects = [{
		title: "Seneca 7: A Cyberpunk Odyssey",
		href: "https://store.steampowered.com/app/1901860/Seneca_7_A_Cyberpunk_Odyssey/",
		image: "/media/images/showcase/Seneca7_CoverPhoto_1920x1080.jpg",
		alt: "Seneca 7",
		copyright: "\"Seneca 7: A Cyberpunk Odyssey\" © The Seneca Project 2022-2023",
		description: "Build a new life in a cozy cyberpunk adventure RPG! Polluted air having you gasping for breath? Drowning in endless debt? Online dating getting you nowhere? Leave your worries behind and reboot your life on Seneca 7, where dreams come true!*",
		note: "(Restrictions may apply. Results may vary.*)",
		quote: "ASM has a lot of great features built-in, including loading screens, pause screens, and profiles. Creating scene collections that have persistent objects with the ability to toggle the opening and closing of collections from a single Scene Helper asset made organizing and optimizing our project that much easier!"
	}, {
		title: "Paladin's Oath",
		href: "https://store.steampowered.com/app/1671590/Paladins_Oath/",
		image: "/media/images/showcase/paladinsoath.png",
		alt: "Paladin's Oath",
		copyright: "\"Paladin's Oath\" © Fire Biscuit Gaming",
		description: "Complex Strategy Fantasy card game RPG inspired by board games like Mage Knight or Gloomhaven. Combines elements of RPG, light deck-building, puzzle and strategy.",
		note: "",
		quote: "It allowed me to setup simple workflows to work on composite scenes as well as very quickly setup the entire flow of scenes for my game."
	}];
	$$renderer.push(`<main class="showcase-page"><header class="showcase-header"><div class="header-content"><p class="section-kicker">Showcase</p> <h1>Projects using Unity Scene Manager</h1> <p>Discover how top developers use the Advanced Scene Manager to handle their <strong>Unity Scene Manager load scene</strong> tasks and project organization.</p></div> <div class="header-cta"><p>Submit your project</p> <a href="mailto:nuwn@hotmail.com">nuwn@hotmail.com</a></div></header> <section class="showcase-grid" aria-label="Advanced Scene Manager project showcase"><!--[-->`);
	const each_array = ensure_array_like(projects);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let project = each_array[$$index];
		$$renderer.push(`<article class="showcase-card"><a target="_blank" rel="noopener noreferrer"${attr("href", project.href)}><img class="card-visual"${attr("src", project.image)}${attr("alt", project.alt)}/> <div class="card-content"><h2>${escape_html(project.title)}</h2> <p class="copyright">${escape_html(project.copyright)}</p> <p class="description">${escape_html(project.description)} `);
		if (project.note) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<b>${escape_html(project.note)}</b>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <span>Click to find out more!</span></p> <blockquote>${escape_html(project.quote)}</blockquote></div></a></article>`);
	}
	$$renderer.push(`<!--]--></section></main>`);
}
//#endregion
//#region src/routes/showcase/advanced-scene-manager/+page.svelte
function _page($$renderer) {
	const schema = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		"url": "https://lazy.solutions/showcase/advanced-scene-manager/",
		"name": "Advanced Scene Manager Showcase | Unity Project Examples",
		"description": "Explore example Unity projects and showcase cases built with Advanced Scene Manager.",
		"breadcrumb": {
			"@type": "BreadcrumbList",
			"itemListElement": [{
				"@type": "ListItem",
				"position": 1,
				"name": "Home",
				"item": "https://lazy.solutions/"
			}, {
				"@type": "ListItem",
				"position": 2,
				"name": "Showcase",
				"item": "https://lazy.solutions/showcase/advanced-scene-manager/"
			}]
		}
	};
	head("1s5y7f0", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Advanced Scene Manager Showcase | Unity Project Examples</title>`);
		});
		$$renderer.push(`<meta name="description" content="See example Unity projects and showcase cases built with Advanced Scene Manager for structured scene loading and production workflows."/> <meta name="keywords" content="Unity Scene Manager, Advanced Scene Manager showcase, Unity scene loading examples, Unity workflow examples"/> <meta name="author" content="Patric Keisala"/> <link rel="canonical" href="https://lazy.solutions/showcase/advanced-scene-manager/"/> <meta property="og:title" content="Advanced Scene Manager Showcase | Unity Project Examples"/> <meta property="og:description" content="Explore example Unity projects and showcase cases built with Advanced Scene Manager."/> <meta property="og:image" content="https://lazy.solutions/media/images/asm_feature.webp"/> <meta property="og:url" content="https://lazy.solutions/showcase/advanced-scene-manager/"/> <meta property="og:type" content="website"/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title" content="Advanced Scene Manager Showcase | Unity Project Examples"/> <meta name="twitter:description" content="Explore example Unity projects and showcase cases built with Advanced Scene Manager."/> ${html(`<script type="application/ld+json">${JSON.stringify(schema)}<\/script>`)}`);
	});
	ShowcaseAsm($$renderer, {});
}
//#endregion
export { _page as default };
