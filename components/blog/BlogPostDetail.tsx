import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/lib/blog';
import ArticleContent from './ArticleContent';
import BlogCard from './BlogCard';

type BlogPostDetailProps = {
  post: BlogPost;
  relatedPosts: BlogPost[];
};

export default function BlogPostDetail({ post, relatedPosts }: BlogPostDetailProps) {
  return (
    <div className="space-y-12">
      <div className="overflow-hidden rounded-[32px] border border-[#E5E5E5]/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
        <div className="relative h-[420px] w-full">
          <Image src={post.coverImage} alt={post.altText} fill className="object-cover" sizes="100vw" />
        </div>
        <div className="space-y-4 p-8 sm:p-10">
          <div className="inline-flex rounded-full border border-[#E5E5E5]/20 bg-[#0F1117]/80 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
            {post.category}
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <span>{post.publishedDate}</span>
            <span aria-hidden="true">•</span>
            <span>{post.readingTime}</span>
          </div>
          <p className="max-w-3xl text-base leading-8 text-slate-300">{post.excerpt}</p>
        </div>
      </div>

      <section className="space-y-10">
        <ArticleContent content={post.content} />
      </section>

      <section className="rounded-3xl border border-[#E5E5E5]/10 bg-white/5 p-8 shadow-[0_18px_42px_rgba(0,0,0,0.08)]">
        <div className="mb-8 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Related Articles</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">You might also like</h2>
          </div>
          <Link href="/blog" className="text-sm font-semibold text-[#b5e409] hover:text-white">
            View all articles
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {relatedPosts.map((relatedPost) => (
            <BlogCard key={relatedPost.slug} post={relatedPost} />
          ))}
        </div>
      </section>
    </div>
  );
}
