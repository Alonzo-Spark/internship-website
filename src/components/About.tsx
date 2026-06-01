import React, { useState, useEffect, useRef } from "react";
import { GraduationCap, Award, Compass, BookOpen, UserCheck, Code, ArrowUpRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { statisticsData } from "../data";

interface CounterProps {
  value: number;
  suffix: string;
  duration?: number;
}

const AnimatedCounter: React.FC<CounterProps> = ({ value, suffix, duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(elementRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const isFloat = end % 1 !== 0;
    const stepTime = 16; // Approx 60 FPS
    const steps = Math.ceil(duration / stepTime);
    const increment = (end - start) / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCount(end);
        clearInterval(timer);
      } else {
        start += increment;
        setCount(isFloat ? Math.round(start * 10) / 10 : Math.round(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, duration, isInView]);

  return (
    <div ref={elementRef} className="text-4xl md:text-5xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-amber-400">
      {count}
      {suffix}
    </div>
  );
};

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Compass className="text-red-500" size={24} />,
      title: "Internship Mission",
      desc: "Empowering next-generation engineers to convert concepts into production-grade solutions through actual corporate exposure and agile product cycles."
    },
    {
      icon: <GraduationCap className="text-orange-500" size={24} />,
      title: "Practical Learning",
      desc: "Bypassing theoretical exercises. Interns assume active duties in real product lifecycles, dealing with live codebases, metrics, and operations."
    },
    {
      icon: <BookOpen className="text-amber-500" size={24} />,
      title: "Real-world Project Exposure",
      desc: "Delivering fully functional platforms for healthcare, high-frequency quantitative sandbox metrics, and autonomous route dispatch planners."
    },
    {
      icon: <UserCheck className="text-yellow-500" size={24} />,
      title: "Mentorship Opportunities",
      desc: "Direct daily collaboration with tech leads, industry veterans, and architecture leads who review pull requests and guide technical decisions."
    },
    {
      icon: <Code className="text-red-400" size={24} />,
      title: "Skill Development",
      desc: "Deep-dives into Node, FastAPI, Go, Rust, PostgreSQL, Vector Databases (Pinecone), caching (Redis), deployment (Docker), and React stacks."
    },
    {
      icon: <Award className="text-orange-400" size={24} />,
      title: "Industry Collaboration",
      desc: "Interacting directly with corporate partners and venture teams to demonstrate progress and shape features based on authentic market requirements."
    }
  ];

  return (
    <section id="about-section" className="relative py-20 bg-slate-950 border-t border-slate-900 overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-orange-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-red-900/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs font-semibold text-orange-400 uppercase tracking-widest font-mono">
            Placement Mandate
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-100 tracking-tight">
            A Masterclass in High-Impact Technical Training
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Alonzo AI's internship program bridges scholarly academic structures with practical industrial engineering demands. We establish small, hyper-focused product teams guided by veterans to deliver production solutions.
          </p>
        </div>

        {/* Highlight Grid (6 Pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20" id="about-pillars-grid">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl hover:border-orange-500/30 transition-all hover:-translate-y-1 duration-300 shadow-md group"
            >
              <div className="p-3 bg-slate-950 border border-slate-850 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-base font-serif font-bold text-slate-100 mb-2 tracking-wide group-hover:text-orange-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics Board with Animated Counters */}
        <div
          id="stats-board-container"
          className="bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800/80 p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Top orange gradient boundary line */}
          <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-red-650 via-orange-500 to-amber-400 opacity-60" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12" id="counters-grid">
            {statisticsData.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center space-y-2 border-r last:border-r-0 border-slate-800/40"
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
