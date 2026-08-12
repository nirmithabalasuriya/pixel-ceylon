export type BlogAuthor = {
  name: string;
  role: string;
  avatar: string;
};

export type BlogContentBlock =
  | {
      type: 'paragraph';
      text: string;
    }
  | {
      type: 'h2' | 'h3';
      text: string;
    }
  | {
      type: 'ul' | 'ol';
      items: string[];
    }
  | {
      type: 'blockquote';
      text: string;
    }
  | {
      type: 'image';
      src: string;
      alt: string;
      caption?: string;
    };

export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  altText: string;
  category: string;
  author: BlogAuthor;
  publishedDate: string;
  readingTime: string;
  content: BlogContentBlock[];
  relatedSlugs: string[];
};

const posts: BlogPost[] = [
  {
    title: 'Designing interfaces that convert attention into action',
    slug: 'designing-interfaces-that-convert',
    excerpt:
      'How modern UI design and motion help brands turn attention into conversions with clarity and premium polish.',
    coverImage: '/images/ABEC.webp',
    altText: 'Interface layout with cards and UI details',
    category: 'UI Design',
    author: {
      name: 'Anika Perera',
      role: 'Design Lead',
      avatar: '/images/Nirmitha.webp',
    },
    publishedDate: 'Aug 4, 2026',
    readingTime: '7 min read',
    content: [
      {
        type: 'paragraph',
        text: 'A well-designed interface creates a clear decision path and makes digital experiences feel effortless. This article explores the details that matter when building conversion-focused interfaces.',
      },
      {
        type: 'h2',
        text: 'Build clarity with hierarchy',
      },
      {
        type: 'paragraph',
        text: 'Use strong typography, contrast, and spacing to guide the eye. The first few seconds define whether a visitor feels trust or confusion.',
      },
      {
        type: 'ul',
        items: [
          'Keep headlines bold and concise.',
          'Support the message with brief, benefit-led copy.',
          'Highlight actions with subtle contrast.',
        ],
      },
      {
        type: 'blockquote',
        text: 'An interface should feel like a helpful guide, not a competition for attention.',
      },
      {
        type: 'image',
        src: '/images/project1.webp',
        alt: 'Premium dashboard layout and interface components',
        caption: 'High-end product interfaces rely on strong hierarchy and calm spacing.',
      },
      {
        type: 'h3',
        text: 'Soft motion for premium feeling',
      },
      {
        type: 'paragraph',
        text: 'Use hover lift, fade-in elements, and subtle micro-interactions to make the experience feel polished without overwhelming the user.',
      },
    ],
    relatedSlugs: ['ai-assisted-brand-storytelling', 'nextjs-performance-playbook', 'launching-wordpress-with-style'],
  },
  {
    title: 'AI-assisted brand storytelling for modern businesses',
    slug: 'ai-assisted-brand-storytelling',
    excerpt:
      'A practical guide to using AI with creative strategy so brand stories feel human, modern, and memorable.',
    coverImage: '/images/Vauxhall.webp',
    altText: 'Brand storytelling with creative imagery',
    category: 'Branding',
    author: {
      name: 'Shanika Jayawardena',
      role: 'Creative Strategist',
      avatar: '/images/Sen.webp',
    },
    publishedDate: 'Jul 22, 2026',
    readingTime: '6 min read',
    content: [
      {
        type: 'paragraph',
        text: 'AI can support brand storytelling when it is guided by strong positioning, visual clarity, and human oversight. This article shares how to make that balance work.',
      },
      {
        type: 'h2',
        text: 'Start with a clear narrative structure',
      },
      {
        type: 'paragraph',
        text: 'Define the problem, the promise, and the outcome. A strong structure helps AI-generated ideas stay on-brand and relevant.',
      },
      {
        type: 'h3',
        text: 'Maintain visual rhythm',
      },
      {
        type: 'paragraph',
        text: 'Use the same spacing, typography, and card styling across content to keep the story polished and cohesive.',
      },
    ],
    relatedSlugs: ['designing-interfaces-that-convert', 'nextjs-performance-playbook', 'business-storytelling-with-saas-aesthetics'],
  },
  {
    title: 'Next.js performance playbook for modern agencies',
    slug: 'nextjs-performance-playbook',
    excerpt:
      'Optimize Next.js websites for speed, smooth interaction, and reliable client experiences with practical best practices.',
    coverImage: '/images/Meshaun.webp',
    altText: 'Next.js performance dashboard and metrics',
    category: 'Development',
    author: {
      name: 'Kamal Fernando',
      role: 'Frontend Engineer',
      avatar: '/images/ABEC.webp',
    },
    publishedDate: 'Jul 10, 2026',
    readingTime: '5 min read',
    content: [
      {
        type: 'paragraph',
        text: 'Fast loading pages feel premium. Here are practical Next.js performance decisions that improve load times, animation, and user experience.',
      },
      {
        type: 'h2',
        text: 'Prefer static rendering where possible',
      },
      {
        type: 'paragraph',
        text: 'Static rendering delivers reliability and speed. Use it for landing pages, case studies, and content that does not change every request.',
      },
      {
        type: 'h3',
        text: 'Design interactions intentionally',
      },
      {
        type: 'paragraph',
        text: 'Small hover transitions and motion feel premium. Avoid large layout shifts that hurt load time and readability.',
      },
    ],
    relatedSlugs: ['designing-interfaces-that-convert', 'ai-assisted-brand-storytelling', 'launching-wordpress-with-style'],
  },
  {
    title: 'Launching WordPress with modern brand polish',
    slug: 'launching-wordpress-with-style',
    excerpt:
      'WordPress can feel premium when paired with clean editorial design, strong content structure, and smooth visual consistency.',
    coverImage: '/images/Sen gallery.webp',
    altText: 'Editorial WordPress layout and branding',
    category: 'WordPress',
    author: {
      name: 'Nashira Ali',
      role: 'Content Strategist',
      avatar: '/images/Founder.webp',
    },
    publishedDate: 'Jun 30, 2026',
    readingTime: '6 min read',
    content: [
      {
        type: 'paragraph',
        text: 'Modern WordPress launches are about strong structure and polished visuals. A clean editorial feel makes content easy to consume and edit.',
      },
      {
        type: 'h2',
        text: 'Keep the content system simple',
      },
      {
        type: 'paragraph',
        text: 'Curate a small set of flexible sections so editors can update pages quickly without breaking the brand layout.',
      },
    ],
    relatedSlugs: ['designing-interfaces-that-convert', 'nextjs-performance-playbook', 'business-storytelling-with-saas-aesthetics'],
  },
  {
    title: 'Business storytelling with SaaS-inspired polish',
    slug: 'business-storytelling-with-saas-aesthetics',
    excerpt:
      'A framework for business brands to use clean visuals, thoughtful messaging, and structured content to feel premium and modern.',
    coverImage: '/images/Gosberton.webp',
    altText: 'Business story layout with neat visual structure',
    category: 'Business',
    author: {
      name: 'Milan Perera',
      role: 'Strategy Director',
      avatar: '/images/Project1.webp',
    },
    publishedDate: 'May 16, 2026',
    readingTime: '5 min read',
    content: [
      {
        type: 'paragraph',
        text: 'Premium business storytelling is precise, clear, and visually consistent. This article shares how to keep messaging strong without overcomplicating the layout.',
      },
      {
        type: 'h2',
        text: 'Define a clear brand voice',
      },
      {
        type: 'paragraph',
        text: 'Business storytelling should sound confident, helpful, and easy to understand. Keep sections crisp and outcomes obvious.',
      },
    ],
    relatedSlugs: ['ai-assisted-brand-storytelling', 'designing-interfaces-that-convert', 'nextjs-performance-playbook'],
  },
  {
    title: 'How to make design systems feel premium and cohesive',
    slug: 'design-systems-that-feel-premium',
    excerpt:
      'Learn how to shape design systems with spacing, motion, and typography that feel like a natural extension of your brand.',
    coverImage: '/images/Vauxhall gallery.webp',
    altText: 'Premium design system layout and spacing',
    category: 'Design',
    author: {
      name: 'Iman Silva',
      role: 'Design Systems Lead',
      avatar: '/images/Founder.webp',
    },
    publishedDate: 'Apr 18, 2026',
    readingTime: '6 min read',
    content: [
      {
        type: 'paragraph',
        text: 'A premium design system is built from consistent spacing, refined typography, and purposeful motion. These elements keep the interface feeling unified and polished.',
      },
      {
        type: 'h2',
        text: 'Use spacing to create calm pages',
      },
      {
        type: 'paragraph',
        text: 'Whitespace gives every element room to breathe. That calmness is what makes premium digital products feel effortless.',
      },
    ],
    relatedSlugs: ['designing-interfaces-that-convert', 'ai-assisted-brand-storytelling', 'business-storytelling-with-saas-aesthetics'],
  },
];

export function getAllBlogPosts() {
  return posts;
}

export function getBlogPostSlugs() {
  return posts.map((post) => post.slug);
}

export function getBlogPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug) ?? null;
}

export function getRelatedPosts(currentSlug: string) {
  const current = getBlogPostBySlug(currentSlug);
  if (!current) return [];
  return posts.filter((post) => current.relatedSlugs.includes(post.slug)).slice(0, 3);
}
