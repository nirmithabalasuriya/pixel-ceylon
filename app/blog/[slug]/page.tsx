import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getBlogPostBySlug, getBlogPostSlugs, getRelatedPosts } from '@/lib/blog';
import BlogPostDetail from '@/components/blog/BlogPostDetail';
import BackButton from '@/components/blog/BackButton';
import Footer from '@/components/pixel-ceylon/Footer';
import { generatePageMetadata } from '@/lib/seo';

type BlogPageParams = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getBlogPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPageParams): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Not Found',
      description: 'Blog post not found.',
    };
  }

  return generatePageMetadata({
    title: post.title,
    description: post.excerpt,
    canonical: `https://pixelceylon.com/blog/${post.slug}`,
    type: 'article',
  });
}

export default function BlogPostPage({ params }: BlogPageParams) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(params.slug);

  return (
    <>
      <main className="bg-[#07080D] text-white min-h-screen px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <BackButton />
          </div>
          <BlogPostDetail post={post} relatedPosts={relatedPosts} />
        </div>
      </main>
      <Footer />
    </>
  );
}
