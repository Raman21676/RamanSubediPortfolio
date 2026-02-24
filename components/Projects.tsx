"use client";

import { ExternalLink, Github, Code2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Custom hook for intersection observer
function useInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
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

export default function Projects() {
  const projects = [
    {
      title: "AI Model Implementation",
      description: "Developed classic machine learning models using Python and Scikit-learn to analyze datasets. Implemented data cleaning, feature engineering, and explored algorithms like decision trees and neural networks.",
      tags: ["Python", "Scikit-learn", "Neural Networks", "Data Analysis"],
      gradient: "from-purple-600 to-pink-600",
      year: "2024",
      icon: Code2,
    },
    {
      title: "DevOps Pipeline Simulation",
      description: "Simulated and automated deployment workflows using Git and Docker containers. Practiced setting up continuous integration (CI) pipelines to automate build processes and managed Linux-based server environments.",
      tags: ["Docker", "Git", "CI/CD", "Linux", "Automation"],
      gradient: "from-blue-600 to-cyan-600",
      year: "2024",
      icon: Code2,
    },
    {
      title: "AI Plant Disease Detection",
      description: "Machine learning project for identifying plant diseases using computer vision techniques. Implemented image classification models to help farmers detect crop diseases early.",
      tags: ["Computer Vision", "TensorFlow", "Image Classification", "AI"],
      gradient: "from-green-600 to-teal-600",
      year: "2023",
      icon: Code2,
    },
    {
      title: "NLP Sentiment Analyzer",
      description: "Natural language processing application that analyzes sentiment from text data. Utilized deep learning models to classify emotions and extract insights from customer reviews.",
      tags: ["NLP", "Deep Learning", "Text Analysis", "Python"],
      gradient: "from-orange-600 to-red-600",
      year: "2023",
      icon: Code2,
    },
  ];

  const { ref: headerRef, isInView: headerInView } = useInView();

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-600 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            A showcase of my work in AI, machine learning, and DevOps—combining 
            technical expertise with practical problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ 
  project, 
  index 
}: { 
  project: {
    title: string;
    description: string;
    tags: string[];
    gradient: string;
    year: string;
    icon: typeof Code2;
  }; 
  index: number;
}) {
  const { ref, isInView } = useInView();
  const Icon = project.icon;

  return (
    <div
      ref={ref}
      className={`group glass glow-border rounded-2xl md:rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 relative overflow-hidden cursor-pointer ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Gradient accent */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 md:h-2 bg-gradient-to-r ${project.gradient}`} />
      
      {/* Hover gradient overlay - simplified for performance */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg bg-gradient-to-br ${project.gradient}`}>
              <Icon className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <span className="text-sm text-foreground/50">{project.year}</span>
          </div>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
              aria-label="View GitHub"
            >
              <Github className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button 
              className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
              aria-label="View Project"
            >
              <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-gradient transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-foreground/70 mb-6 leading-relaxed text-sm md:text-base">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 md:px-3 py-1 rounded-full bg-white/5 text-xs md:text-sm text-foreground/80 border border-white/10 hover:border-white/30 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
