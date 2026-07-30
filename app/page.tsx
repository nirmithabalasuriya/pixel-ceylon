import Nav from '@/components/pixel-ceylon/Nav';
import Hero from '@/components/pixel-ceylon/Hero';
import Ticker from '@/components/pixel-ceylon/Ticker';
import Services from '@/components/pixel-ceylon/Services';
import Stats from '@/components/pixel-ceylon/Stats';
import Projects from '@/components/pixel-ceylon/Projects';
import Founder from '@/components/pixel-ceylon/Founder';
import SocialProof from '@/components/pixel-ceylon/SocialProof';
import Testimonials from '@/components/pixel-ceylon/Testimonials';
import CTA from '@/components/pixel-ceylon/CTA';
import Footer from '@/components/pixel-ceylon/Footer';
import { HomeStructuredData } from '@/components/seo/HomeStructuredData';

export const revalidate = 60;

export default function Home() {
  return (
    <>
      {/* Structured Data for SEO */}
      <HomeStructuredData />

      <main>
        <Nav />
        <Hero />
        <Ticker />
        <Services />
        <Stats />
        <Projects />
        <Founder />
        <Testimonials />
        <SocialProof />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
