import fs from 'node:fs';
import path from 'node:path';
import Link from 'next/link';

const BLOG_DIR = path.join(process.cwd(), 'src', 'app', 'blog');

export const metadata = {
  title: 'Blog | ModernBrand',
  description: 'Artículos y novedades en MDX.',
};

export default function BlogIndexPage() {
  const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true });
  const posts = entries
    .filter((e) => e.isDirectory())
    .map((dir) => ({ slug: dir.name }));

  return (
    <main className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map(({ slug }) => (
          <article key={slug} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold mb-2 capitalize">
              {slug.replace(/-/g, ' ')}
            </h2>
            <Link href={`/blog/${slug}`} className="text-primary-400 underline">
              Leer más →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
