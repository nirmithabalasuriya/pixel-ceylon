import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/blog';

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-3xl border border-[#E5E5E5]/10 bg-white/5 shadow-sm shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      aria-label={`Read ${post.title}`}
    >
      <div className="relative h-[240px] overflow-hidden rounded-t-3xl bg-slate-950">
        <Image
          src={post.coverImage}
          alt={post.altText}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="space-y-4 p-6">
        <div className="inline-flex rounded-full border border-[#E5E5E5]/20 bg-[#0F1117]/80 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
          {post.category}
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-[#b5e409]">
            {post.title}
          </h3>
          <p className="text-sm leading-6 text-slate-400">{post.excerpt}</p>
        </div>
        <div className="flex items-center gap-3 pt-2 text-sm text-slate-400">
          <div className="relative h-9 w-9 overflow-hidden rounded-full border border-[#E5E5E5]/10 bg-[#0F1117]">
            <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
          </div>
          <div>
            <p className="text-sm font-medium text-white">{post.author.name}</p>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{post.publishedDate}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
