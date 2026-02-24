"use client";

import { Mail, Linkedin, Github, Send, MessageCircle, CheckCircle, AlertCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: formRef, isInView: formInView } = useInView();
  const { ref: socialRef, isInView: socialInView } = useInView();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // EmailJS configuration
      const serviceId = "Service_raman_ai";
      const templateId = "template_8xonf4r";
      const publicKey = "omj8UgzABxYqoO30S";

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "ai@ramansubedi.com",
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus({
        type: "error",
        message: "Oops! Something went wrong. Please try again or contact me directly via email (ai@ramansubedi.com).",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:ai@ramansubedi.com",
      color: "from-red-500 to-orange-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/raman-subedi-ai-engineer",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Raman21676",
      color: "from-gray-600 to-gray-800",
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-600 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
            Let&apos;s Connect
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            I&apos;m always open to discussing new opportunities, collaborations, 
            or just having a chat about AI and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Form */}
          <div 
            ref={formRef}
            className={`glass glow-border rounded-2xl md:rounded-3xl p-6 md:p-8 transition-all duration-600 delay-100 ease-out ${
              formInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
            }`}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-primary-500 focus:outline-none transition-colors bg-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-primary-500 focus:outline-none transition-colors bg-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-primary-500 focus:outline-none transition-colors resize-none bg-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 transition-all duration-300 font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-xl flex items-start gap-3 animate-fadeIn ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20"
                      : "bg-red-500/10 border border-red-500/20"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  )}
                  <p
                    className={`text-sm ${
                      submitStatus.type === "success" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {submitStatus.message}
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Social Links */}
          <div 
            ref={socialRef}
            className={`space-y-6 transition-all duration-600 delay-200 ease-out ${
              socialInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
            }`}
          >
            <div className="glass glow-border rounded-2xl md:rounded-3xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl glass hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${link.color}`}>
                      <link.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <span className="font-medium group-hover:text-gradient transition-colors duration-300">
                      {link.name}
                    </span>
                  </a>
                ))}
                
                <a
                  href="https://wa.me/9779824370085?text=Hello%2C%20I%20saw%20your%20portfolio%20website%20and%20wanted%20to%20get%20in%20touch."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl glass hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600">
                    <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <span className="font-medium group-hover:text-gradient transition-colors duration-300">
                    Chat on WhatsApp
                  </span>
                </a>
              </div>
            </div>

            <div className="glass glow-border rounded-2xl md:rounded-3xl p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-bold mb-4">Quick Info</h3>
              <div className="space-y-3 text-foreground/70 text-sm md:text-base">
                <p>📍 Kathmandu, Nepal</p>
                <p>🎓 BIT Graduate, Tribhuvan University</p>
                <p>💼 Senior AI/ ML & DevOps Engineer</p>
                <p>🌐 www.ramansubedi.com</p>
                <p>📧 ai@ramansubedi.com</p>
                <p>📞 +977 9824370085</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
