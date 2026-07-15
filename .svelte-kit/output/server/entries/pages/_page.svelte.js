import { D as attr, O as escape_html, a as ensure_array_like, h as html, o as head } from "../../chunks/server.js";
//#region src/routes/Home.svelte
function Home($$renderer) {
	const publisherUrl = "https://af.unity.com/sr/camref:1100ljPVc/pubref:website/destination:https://assetstore.unity.com/publishers/48996";
	const asmUrl = "https://af.unity.com/sr/camref:1100ljPVc/pubref:website/destination:https://assetstore.unity.com/packages/tools/utilities/advanced-scene-manager-3-330926";
	const assets = [
		{
			status: "Released",
			title: "Flow Editor",
			body: "A visual node-based editor for Advanced Scene Manager, designed to help you map and manage complex scene flows with ease.",
			href: "https://af.unity.com/sr/camref:1100ljPVc/pubref:website/destination:https://assetstore.unity.com/packages/tools/visual-scripting/flow-editor-for-advanced-scene-manager-374938"
		},
		{
			status: "Under Development",
			title: "Scene Components",
			body: "Powerful data persistence for your scenes.",
			href: publisherUrl
		},
		{
			status: "Undecided",
			title: "Future Project",
			body: "Stay tuned for more professional Unity assets and production workflow tools designed to improve your production pipeline.",
			href: publisherUrl
		}
	];
	const team = [{
		name: "Patric Keisala",
		role: "Studio Manager, Founder",
		image: "/media/images/portrait/patric.webp",
		alt: "Portrait of Patric Keisala"
	}, {
		name: "Andreas Ingeholm",
		role: "Programmer",
		image: "/media/images/portrait/andreas.webp",
		alt: "Portrait of Andreas Ingeholm"
	}];
	$$renderer.push(`<header class="hero"><div class="LogoWrapper" aria-hidden="true"><img class="header-background" src="/media/images/bg.webp" alt="Background"/></div> <section class="hero-content" aria-labelledby="hero-title"><p class="eyebrow">Professional Unity assets from Sweden</p> <h1 id="hero-title">Professional Unity Scene Manager Tools for Production.</h1> <p class="hero-copy">Lazy Solutions develops focused Unity assets that reduce setup time, improve project structure, and support
      teams building maintainable productions.</p> <div class="hero-actions"><a class="button primary" href="#Projects">View Featured Asset</a> <a class="button secondary" target="_blank" rel="noopener noreferrer"${attr("href", publisherUrl)}>Asset Store</a></div></section></header> <main><section id="Store" class="store-strip" aria-label="Store links"><p>Browse all published tools on the Unity Asset Store</p> <a class="store-button" target="_blank" rel="noopener noreferrer"${attr("href", publisherUrl)}>Publisher Page</a></section> <section id="Projects" class="projects-section" aria-labelledby="projects-title"><div class="project-heading"><div><p class="section-kicker">Featured Asset</p> <h2 id="projects-title">Advanced Scene Manager 3</h2></div> <p class="section-lead">A professional workflow asset for Unity teams that need structured scene loading, grouping, and project
        navigation.</p></div> <div class="project-card"><div class="project-visual" style="background-image: url('/media/images/asm_feature.webp');"><span>Workflow Tool</span></div> <div class="project-content"><p class="eyebrow">Scene workflow management</p> <h3>Keep complex Unity projects organized.</h3> <p>Advanced Scene Manager helps teams define reliable scene structures, reduce manual setup, and maintain
          consistent workflows across production.</p> <div class="project-actions"><a class="button primary" href="/advanced-scene-manager">Product Page</a> <a class="button tertiary" target="_blank" rel="noopener noreferrer"${attr("href", asmUrl)}>Unity Asset Store</a> <a class="button secondary" href="/showcase/advanced-scene-manager">Showcase</a></div></div></div></section> <section id="Assets" class="assets-section" aria-labelledby="assets-title"><div class="assets-header"><p class="section-kicker">Other Assets</p> <h2 id="assets-title">Additional workflow tools</h2> <p>Explore our upcoming tools and specialized assets designed to complement our existing solutions and further
        streamline your production pipeline.</p></div> <div class="asset-grid"><!--[-->`);
	const each_array = ensure_array_like(assets);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let asset = each_array[$$index];
		$$renderer.push(`<article class="asset-card"><span class="asset-status">${escape_html(asset.status)}</span> <h3>${escape_html(asset.title)}</h3> <p>${escape_html(asset.body)}</p> <a class="button secondary" target="_blank" rel="noopener noreferrer"${attr("href", asset.href)}>Unity Asset Store</a></article>`);
	}
	$$renderer.push(`<!--]--></div></section> <section id="About" class="team-section" aria-labelledby="about-title"><div class="team-header"><p class="section-kicker">About Us</p> <h2 id="about-title">We try to make the complex feel simple</h2> <p>Lazy Solutions is an independent studio from Sweden. We started selling Unity assets in January 2021 with a
        simple belief: good tools should make work easier, not add friction. We care about ease of use,
        thoughtful UX, flexibility, and quality.</p></div> <div class="team"><!--[-->`);
	const each_array_1 = ensure_array_like(team);
	for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
		let member = each_array_1[$$index_1];
		$$renderer.push(`<article class="staff"><div class="portrait"><img${attr("src", member.image)}${attr("alt", member.alt)}/></div> <h3>${escape_html(member.name)}</h3> <h4>${escape_html(member.role)}</h4> <p>Sweden</p></article>`);
	}
	$$renderer.push(`<!--]--></div></section></main>`);
}
//#endregion
//#region src/routes/+page.svelte
function _page($$renderer) {
	const schema = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebSite",
				"url": "https://lazy.solutions",
				"name": "Lazy Solutions",
				"description": "Professional Unity assets for scene management, workflow automation, and production-ready project structure.",
				"publisher": {
					"@type": "Organization",
					"name": "Lazy Solutions",
					"url": "https://lazy.solutions"
				}
			},
			{
				"@type": "Organization",
				"name": "Lazy Solutions",
				"url": "https://lazy.solutions",
				"logo": {
					"@type": "ImageObject",
					"url": "https://lazy.solutions/media/images/asm_feature.webp"
				}
			},
			{
				"@type": "BreadcrumbList",
				"itemListElement": [{
					"@type": "ListItem",
					"position": 1,
					"name": "Home",
					"item": "https://lazy.solutions"
				}]
			}
		]
	};
	head("1uha8ag", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Lazy Solutions | Unity Assets and Production Tools</title>`);
		});
		$$renderer.push(`<meta name="description" content="Lazy Solutions creates professional Unity assets and production tools for scene management, workflow automation, and maintainable game development pipelines."/> <meta name="keywords" content="Unity assets, Unity tools, Unity development, scene management, workflow tools, production tools, Lazy Solutions"/> <meta name="author" content="Patric Keisala"/> <link rel="canonical" href="https://lazy.solutions"/> <meta property="og:title" content="Lazy Solutions | Unity Assets and Production Tools"/> <meta property="og:description" content="Professional Unity assets for scene management, workflow automation, and production-ready project structure."/> <meta property="og:image" content="https://lazy.solutions/media/images/asm_feature.webp"/> <meta property="og:url" content="https://lazy.solutions"/> <meta property="og:type" content="website"/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title" content="Lazy Solutions | Unity Assets and Production Tools"/> <meta name="twitter:description" content="Professional Unity assets for scene management, workflow automation, and production-ready project structure."/> ${html(`<script type="application/ld+json">${JSON.stringify(schema)}<\/script>`)}`);
	});
	Home($$renderer, {});
}
//#endregion
export { _page as default };
