import React from "react";
import { ArrowDown, Briefcase, ChevronRight } from "lucide-react";
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8 text-left max-w-2xl">
            
            {/* Status pill badge */}
            <div className="inline-flex items-center gap-2 p-1.5 pr-3 bg-slate-900/80 border border-slate-800/80 rounded-full text-slate-300 font-sans text-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#f59e0b]">Summer Placement Active</span>
              <ChevronRight size={12} className="text-slate-500" />
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-white leading-[1.1]">
                Building Future{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-amber-400">
                  Innovators
                </span>{" "}
                Through Real-World Experience
              </h1>
              
              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans font-light">
                Explore impactful internships, industry projects, mentor-guided learning experiences, and success stories from our talented contributors.
              </p>
            </div>

            {/* Actions Grid */}
            <div className="flex flex-col sm:flex-row gap-4">
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
                onClick={() => scrollToSection("about-section")}
                className="px-8 py-3.5 bg-slate-900/60 hover:bg-slate-900 border border-slate-800 text-slate-300 hover:text-white font-semibold text-sm rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                About Internship
                <Briefcase size={16} className="text-slate-400" />
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-6 border-t border-slate-900 grid grid-cols-3 gap-4">
              <div>
                <div className="text-xl font-bold text-white font-mono">100%</div>
                <div className="text-[10px] text-slate-450 uppercase font-bold tracking-wider mt-0.5">Placement rate</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white font-mono">0.05ms</div>
                <div className="text-[10px] text-slate-450 uppercase font-bold tracking-wider mt-0.5">Backend latency</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white font-mono">Tier-1</div>
                <div className="text-[10px] text-slate-450 uppercase font-bold tracking-wider mt-0.5">Industry Mentorship</div>
              </div>
            </div>

          </div>

          {/* Right Vector Illustration Column */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Visual background rings */}
            <div className="absolute w-[110%] aspect-square rounded-full border border-slate-900/30 animate-spin" style={{ animationDuration: "60s" }} />
            <div className="absolute w-[80%] aspect-square rounded-full border-2 border-dashed border-slate-900/40 animate-spin" style={{ animationDuration: "40s", animationDirection: "reverse" }} />

            {/* Complex Geometric Interactive Canvas/Mesh SVG Representing AI & Connections */}
            <div className="relative w-full aspect-square max-w-[420px] bg-slate-900/20 border border-slate-800/40 rounded-3xl p-6 backdrop-blur-sm overflow-hidden flex items-center justify-center shadow-2xl shadow-slate-950/50">
              
              {/* Live interactive nodes inside and gradient logo overlays */}
              <svg viewBox="0 0 400 400" className="w-full h-full select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Dynamic grid dots */}
                <pattern id="dotpattern" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#475569" opacity="0.3" />
                </pattern>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#dotpattern)" />

                {/* Pulsing connections mesh lines */}
                <g stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.15">
                  <line x1="100" y1="100" x2="200" y2="80" />
                  <line x1="200" y1="80" x2="300" y2="120" />
                  <line x1="300" y1="120" x2="280" y2="250" />
                  <line x1="280" y1="250" x2="200" y2="320" />
                  <line x1="200" y1="320" x2="100" y2="280" />
                  <line x1="100" y1="280" x2="100" y2="100" />
                  <line x1="100" y1="100" x2="200" y2="200" />
                  <line x1="200" y1="80" x2="200" y2="200" />
                  <line x1="300" y1="120" x2="200" y2="200" />
                  <line x1="280" y1="250" x2="200" y2="200" />
                  <line x1="200" y1="320" x2="200" y2="200" />
                  <line x1="100" y1="280" x2="200" y2="200" />
                </g>

                {/* Solid core central element with Alonzo gradient theme */}
                <defs>
                  <radialGradient id="meshCenterGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#1e293b" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="meshNodesGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#dc2626" />
                    <stop offset="50%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#facc15" />
                  </linearGradient>
                </defs>

                <circle cx="200" cy="200" r="110" fill="url(#meshCenterGlow)" />

                {/* Central digital triangle icon (Emulating the logo perfectly in 3D frame overlay) */}
                <g transform="translate(140, 130) scale(1.2)" filter="url(#glow)">
                  <path d="M 50 10 L 15 85 L 30 85 L 50 40 Z" fill="url(#leftBarGrad)" />
                  <path d="M 50 10 L 58 26 L 46 54 L 64 85 L 80 85 Z" fill="url(#rightBarGrad)" />
                  <path d="M 28 80 L 66 80 L 61 70 L 33 70 Z" fill="url(#crossBarGrad)" />
                </g>

                {/* Glowing Nodes (Representing developers/interns around the project hub) */}
                <circle cx="100" cy="100" r="6" fill="#ef4444" className="animate-ping" style={{ transformOrigin: "100px 100px" }} />
                <circle cx="100" cy="100" r="4" fill="#ef4444" />
                
                <circle cx="200" cy="80" r="4" fill="#f97316" />
                <circle cx="300" cy="120" r="5" fill="#facc15" />
                
                <circle cx="280" cy="250" r="7" fill="#dc2626" />
                <circle cx="200" cy="320" r="4" fill="#f97316" />
                <circle cx="100" cy="280" r="5" fill="#facc15" />

                {/* Decorative data statistics box */}
                <rect x="25" y="315" width="120" height="40" rx="6" fill="#020617" stroke="#334155" strokeWidth="1" />
                <text x="35" y="331" fill="#94a3b8" fontFamily="monospace" fontSize="8" fontWeight="bold">PROCESSOR SPEED</text>
                <text x="35" y="346" fill="#f97316" fontFamily="monospace" fontSize="10" fontWeight="bold">94.8 GFLOPS</text>

                {/* Floating telemetry circle */}
                <rect x="245" y="25" width="120" height="40" rx="6" fill="#020617" stroke="#334155" strokeWidth="1" />
                <text x="255" y="41" fill="#94a3b8" fontFamily="monospace" fontSize="8" fontWeight="bold">SYSTEM BUFFER</text>
                <text x="255" y="56" fill="#ef4444" fontFamily="monospace" fontSize="10" fontWeight="bold">SECURE PIPELINE</text>
              </svg>

              {/* Glowing circular element behind the vector */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/5 to-orange-500/5 mix-blend-color-dodge rounded-3xl pointer-events-none" />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
