import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import dynamic from 'next/dynamic';

// Lazy load below-the-fold components for better performance
const About = dynamic(() => import('@/components/About'), {
  loading: () => <div className="min-h-screen animate-pulse bg-white/5" />,
});
const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => <div className="min-h-screen animate-pulse bg-white/5" />,
});
const ResumeDownload = dynamic(() => import('@/components/ResumeDownload'), {
  loading: () => <div className="py-20 animate-pulse bg-white/5" />,
});
const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <div className="min-h-screen animate-pulse bg-white/5" />,
});
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="py-10 animate-pulse bg-white/5" />,
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <ResumeDownload />
      <Contact />
      <Footer />
    </main>
  );
}
