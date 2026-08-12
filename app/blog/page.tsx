import { Metadata } from 'next';
import { getAllBlogPosts } from '@/lib/blog';
import BlogCard from '@/components/blog/BlogCard';
import { generatePageMetadata } from '@/lib/seo';
import Footer from '@/components/pixel-ceylon/Footer';

const posts = getAllBlogPosts().slice(0, 6);

export const metadata: Metadata = generatePageMetadata({
  title: 'Blog',
  description: 'Latest articles from Pixel Ceylon on design, development, branding, and technology.',
  canonical: 'https://pixelceylon.com/blog',
  type: 'article',
});

export default function BlogIndexPage() {
  return (
    <>
      <main className="bg-[#07080D] text-white min-h-screen">
        <section className="py-24 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <h1 className="mt-4 text-4xl font-bebas tracking-tight text-white sm:text-5xl">Latest stories from Pixel Ceylon</h1>
          <p className="mt-4 text-base leading-8 text-slate-400">
            Explore our latest insights on design, development, branding, and technology.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
