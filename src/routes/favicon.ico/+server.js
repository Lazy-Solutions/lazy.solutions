import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const prerender = true;

const faviconPath = join(process.cwd(), 'public', 'favicon.png');

export async function GET() {
  const file = await readFile(faviconPath);

  return new Response(file, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  });
}
