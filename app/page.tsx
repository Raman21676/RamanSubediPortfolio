import Navigation from "@/components/Navigation";
import HeroWinterScene from "@/components/HeroWinterScene";
import dynamic from 'next/dynamic';

// Lazy load below-the-fold components for better performance
const About = dynamic(() => import('@/components/About'), {
  loading: () => <div className="min-h-screen animate-pulse bg-[#0f172a]" />,
});
const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => <div className="min-h-screen animate-pulse bg-[#0f172a]" />,
});
const ResumeDownload = dynamic(() => import('@/components/ResumeDownload'), {
  loading: () => <div className="py-20 animate-pulse bg-[#0f172a]" />,
});
const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <div className="min-h-screen animate-pulse bg-[#0f172a]" />,
});
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="py-10 animate-pulse bg-[#0f172a]" />,
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroWinterScene />
      <div className="bg-[#0f172a]">
        <About />
        <Projects />
        <ResumeDownload />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
