import React from "react";
import { Sparkles, Users, Award, BookOpen, Layers } from "lucide-react";

export const SparkProgram: React.FC = () => {
  return (
    <section id="spark-program" className="relative py-20 bg-slate-950 overflow-hidden border-t border-b border-slate-900/60">
      {/* Decorative ambient radial lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-orange-600/5 blur-[160px] pointer-events-none" />
      <div className="absolute top-0 right-10 w-72 h-72 rounded-full bg-red-950/10 blur-[130px] pointer-events-none" />
      
      {/* Background digital grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Neon Glassmorphic Slide Card */}
        <div className="relative bg-slate-900/30 border border-slate-800/80 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-md overflow-hidden group">
          {/* Top orange gradient boundary line */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-red-600 via-orange-500 to-amber-400 opacity-80" />
          
          {/* Animated decorative corner glow */}
          <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-orange-500/10 blur-3xl group-hover:bg-orange-500/20 transition-all duration-700" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Visual Badge Column */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 bg-slate-950/60 border border-slate-900 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-505/5 to-transparent opacity-50" />
              
              <div className="relative p-4 bg-gradient-to-tr from-red-600/10 to-orange-500/10 border border-orange-500/20 rounded-full mb-4 animate-pulse">
                <Sparkles className="text-orange-500 h-10 w-10" />
              </div>
              
              <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-orange-400">Program Spotlight</span>
              <h3 className="text-2xl font-serif font-bold text-white mt-2 leading-tight">Alonzo Spark Internship</h3>
              <div className="mt-4 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-300 text-[10px] font-mono tracking-wider font-semibold uppercase">
                30-Day Cohort
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="space-y-4">
                <h4 className="text-xl md:text-2xl font-serif font-black text-white leading-snug">
                  Empowering Next-Generation Engineers Through Real-World Building
                </h4>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light font-sans">
                  <strong className="text-white font-medium">Alonzo Spark Internship</strong> is a 30-day project-based learning program that empowers students to gain practical experience by working on real-world software projects. 
                </p>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light font-sans">
                  This cohort consists of <strong className="text-white font-medium">15 students</strong> from <span className="text-orange-400 font-medium">Stanley College of Engineering and Technology for Women</span> and <span className="text-orange-400 font-medium">Swami Vivekananda Institute of Technology</span>, collaborating on innovative projects in AI, Full-Stack Development, Automation, and Open-Source Technologies.
                </p>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light font-sans">
                  Under expert mentorship, interns develop technical skills, teamwork, and industry readiness while building impactful solutions.
                </p>
              </div>

              {/* Tag Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 text-[10px] font-mono tracking-wider text-slate-400 uppercase rounded-md">#AI</span>
                <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 text-[10px] font-mono tracking-wider text-slate-400 uppercase rounded-md">#FullStack</span>
                <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 text-[10px] font-mono tracking-wider text-slate-400 uppercase rounded-md">#Automation</span>
                <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 text-[10px] font-mono tracking-wider text-slate-400 uppercase rounded-md">#OpenSource</span>
              </div>

              {/* Program Metrics Row */}
              <div className="pt-6 border-t border-slate-800/60 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-950 border border-slate-850 rounded-lg text-red-500">
                    <BookOpen size={16} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white font-mono">30 Days</div>
                    <div className="text-[9px] text-slate-400 uppercase font-semibold">Duration</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-950 border border-slate-850 rounded-lg text-orange-500">
                    <Users size={16} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white font-mono">15 Interns</div>
                    <div className="text-[9px] text-slate-400 uppercase font-semibold">Cohort Size</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-950 border border-slate-850 rounded-lg text-amber-500">
                    <Award size={16} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white font-mono">2 Colleges</div>
                    <div className="text-[9px] text-slate-400 uppercase font-semibold">Partners</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-950 border border-slate-850 rounded-lg text-yellow-500">
                    <Layers size={16} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white font-mono">4 Tracks</div>
                    <div className="text-[9px] text-slate-400 uppercase font-semibold">Tech Focus</div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
