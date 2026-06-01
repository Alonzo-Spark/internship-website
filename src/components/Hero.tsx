import React from "react";
import { ArrowDown, Briefcase } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
}

export const Hero: React.FC<HeroProps> = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950"
    >
      {/* Decorative Radial Grid / Orbs representing high tech Bespoke AI atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-amber-900/10 via-slate-950 to-slate-950" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-slate-950 to-transparent" />
      
      {/* Subtle floating background ambient lights to mirror the uploaded logo color scheme */}
      <div className="absolute top-1/4 left-1/5 w-80 h-80 rounded-full bg-red-800/10 blur-[130px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-orange-600/5 blur-[150px] animate-pulse pointer-events-none" style={{ animationDuration: "8s" }} />

      {/* Structured digital geometric grid backplane (Modern Alonzo-AI digital design) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] opacity-60" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-full z-10 w-full flex flex-col items-center justify-center text-center">

        {/* Headline & Subheading */}
        <div className="space-y-6 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black tracking-tight text-slate-100 leading-[1.15]">
            Building Future{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-amber-400">
              Innovators
            </span>{" "}
            Through Real-World Experience
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-sans font-light max-w-2xl mx-auto">
            Explore impactful internships, industry projects, mentor-guided learning experiences, and success stories from our talented team members.
          </p>
        </div>

        {/* Actions Grid */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
          <button
            id="hero-view-projects-btn"
            onClick={() => scrollToSection("projects-section")}
            className="px-8 py-3.5 bg-gradient-to-r from-red-700 via-orange-600 to-amber-500 text-white font-semibold text-sm rounded-xl transition-all hover:brightness-110 active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-orange-950/20"
          >
            View Projects
            <ArrowDown size={16} className="text-white animate-bounce" />
          </button>
          
          <button
            id="hero-about-btn"
            onClick={() => scrollToSection("spark-program")}
            className="px-8 py-3.5 bg-slate-900/60 hover:bg-slate-900 border border-slate-800 text-slate-300 hover:text-slate-100 font-semibold text-sm rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            About Internship
            <Briefcase size={16} className="text-slate-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
