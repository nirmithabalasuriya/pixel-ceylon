import BlogCard from './BlogCard';
import { getAllBlogPosts } from '@/lib/blog';

const posts = getAllBlogPosts().slice(0, 6);

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-[#07080D] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <h2 className="mt-4 text-6xl font-bebas tracking-tight text-white sm:text-6xl">Blogs</h2>
          <p className="mt-4 text-base leading-8 text-slate-400">
            Explore our latest insights on design, development, branding, and technology.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
