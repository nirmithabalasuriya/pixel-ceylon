import Image from 'next/image';
import { BlogContentBlock } from '@/lib/blog';

type ArticleContentProps = {
  content: BlogContentBlock[];
};

export default function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div className="space-y-8 text-slate-200">
      {content.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p key={index} className="text-base leading-8">
                {block.text}
              </p>
            );
          case 'h2':
            return (
              <h2 key={index} className="pt-12 text-3xl font-semibold text-white">
                {block.text}
              </h2>
            );
          case 'h3':
            return (
              <h3 key={index} className="pt-10 text-2xl font-semibold text-white">
                {block.text}
              </h3>
            );
          case 'ul':
            return (
              <ul key={index} className="ml-6 list-disc space-y-3 text-base leading-8 text-slate-300">
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={index} className="ml-6 list-decimal space-y-3 text-base leading-8 text-slate-300">
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ol>
            );
          case 'blockquote':
            return (
              <blockquote
                key={index}
                className="rounded-3xl border-l-4 border-[#b5e409] bg-white/5 px-6 py-6 text-slate-100"
              >
                {block.text}
              </blockquote>
            );
          case 'image':
            return (
              <figure key={index} className="rounded-3xl overflow-hidden border border-[#E5E5E5]/10 bg-[#0F1117]">
                <div className="relative h-[360px] w-full">
                  <Image src={block.src} alt={block.alt} fill className="object-cover" sizes="100vw" />
                </div>
                {block.caption ? (
                  <figcaption className="px-6 py-4 text-sm text-slate-400">{block.caption}</figcaption>
                ) : null}
              </figure>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
