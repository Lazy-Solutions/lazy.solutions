import { getPosts } from '$lib/blog';

export const prerender = true;

const site = 'https://lazy.solutions';

export function GET() {
    const staticPages = [
        '',
        'advanced-scene-manager',
        'showcase/advanced-scene-manager',
        'support',
        'blog'
    ];

    const posts = getPosts();

    const urls = [
        ...staticPages.map(page => ({
            loc: page ? `${site}/${page}` : site,
            lastmod: null,
            changefreq: page === 'blog' ? 'weekly' : 'monthly',
            priority: page === '' ? '1.0' : '0.9'
        })),

        ...posts.map(post => ({
            loc: `${site}/blog/${post.slug}`,
            lastmod: post.date,
            changefreq: 'yearly',
            priority: '0.7'
        }))
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map(url => `
        <url>
            <loc>${url.loc}</loc>
            ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
            <changefreq>${url.changefreq}</changefreq>
            <priority>${url.priority}</priority>
        </url>
    `).join('')}
    </urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml'
        }
    });
}