"use client";

import { Code, Database, Cpu, GitBranch, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Custom hook for intersection observer with reduced motion support
function useInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px', ...options }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
}

export default function About() {
  const skills = [
    { icon: Code, name: "Programming", items: ["Python", "C++", "SQL", "JavaScript", "Bash"] },
    { icon: Cpu, name: "AI & ML", items: ["Pandas", "NumPy", "Scikit-learn", "Neural Networks"] },
    { icon: GitBranch, name: "DevOps", items: ["Git", "Docker", "Jenkins", "Linux"] },
    { icon: Database, name: "Backend", items: ["API Integration", "Data Processing"] },
    { icon: Globe, name: "Languages", items: ["English", "Nepali", "German", "Hindi"] },
  ];

  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: bioRef, isInView: bioInView } = useInView();

  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-600 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            A highly motivated Information Technology graduate with a strong academic foundation 
            and practical experience in AI, machine learning, and DevOps.
          </p>
        </div>

        {/* Bio Card */}
        <div 
          ref={bioRef}
          className={`glass glow-border rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 mb-12 transition-all duration-600 delay-100 ease-out ${
            bioInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary-400">Education</h3>
              <div className="space-y-2">
                <p className="text-base md:text-lg font-semibold">Bachelor in Information Technology (BIT)</p>
                <p className="text-foreground/70">Tribhuvan University, Nepal</p>
                <p className="text-foreground/60">2019 - 2023</p>
                <p className="text-sm text-foreground/60 mt-2">
                  Specialized in software foundations and data analysis
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-accent-400">Experience</h3>
              <div className="space-y-2">
                <p className="text-base md:text-lg font-semibold">Technology Support Intern</p>
                <p className="text-foreground/70">Numa Digital Farm, Biratnagar</p>
                <p className="text-foreground/60">2023 - 2024</p>
                <p className="text-sm text-foreground/60 mt-2">
                  Collaborated with technical teams to optimize workflows
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-foreground/80 leading-relaxed">
              Over the past several months, I have continuously learned and applied cutting-edge 
              technologies. I am eager to deepen my theoretical and practical knowledge through a 
              Master&apos;s program in AI, bringing a disciplined, open-minded mindset and a proficiency 
              in ambition and culture.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Separate component for each skill card to use its own intersection observer
function SkillCard({ 
  skill, 
  index 
}: { 
  skill: { icon: typeof Code; name: string; items: string[] }; 
  index: number;
}) {
  const { ref, isInView } = useInView();
  const Icon = skill.icon;

  return (
    <div
      ref={ref}
      className={`glass glow-border rounded-2xl p-5 md:p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer group ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 group-hover:shadow-lg group-hover:shadow-primary-500/30 transition-shadow duration-300">
          <Icon className="w-5 h-5 md:w-6 md:h-6" />
        </div>
        <h4 className="text-lg md:text-xl font-semibold group-hover:text-gradient transition-colors duration-300">
          {skill.name}
        </h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span
            key={item}
            className="px-2.5 md:px-3 py-1 rounded-full bg-white/5 text-xs md:text-sm text-foreground/80 border border-white/10 hover:border-primary-400/50 transition-colors duration-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
