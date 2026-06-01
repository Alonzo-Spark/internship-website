import React from "react";
import { Sparkles, Users, Award, BookOpen, Layers } from "lucide-react";

export const SparkProgram: React.FC = () => {
  return (
    <section id="spark-program" className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden border-t border-b border-slate-900/60">
      {/* Decorative ambient radial lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full bg-orange-600/8 blur-[180px] pointer-events-none" />
      <div className="absolute top-0 right-10 w-80 h-80 rounded-full bg-red-950/15 blur-[150px] pointer-events-none" />
      
      {/* Background digital grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Neon Glassmorphic Slide Card */}
        <div className="relative bg-slate-900/30 border border-slate-800/80 rounded-[2rem] p-8 md:p-12 lg:p-16 shadow-2xl backdrop-blur-md overflow-hidden group">
          {/* Top orange gradient boundary line */}
          <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-red-600 via-orange-500 to-amber-400 opacity-90" />
          
          {/* Animated decorative corner glow */}
          <div className="absolute -top-24 -left-24 w-56 h-56 rounded-full bg-orange-500/10 blur-3xl group-hover:bg-orange-500/20 transition-all duration-700" />
          
          {/* Animated decorative bottom-right glow */}
          <div className="absolute -bottom-24 -right-24 w-56 h-56 rounded-full bg-orange-500/5 blur-3xl group-hover:bg-orange-500/15 transition-all duration-700 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Visual Badge Column */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-6 md:p-10 bg-slate-950/70 border border-slate-900/80 rounded-3xl relative overflow-hidden min-h-[340px] shadow-inner">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/5 to-transparent opacity-50" />
              
              <div className="relative p-5 bg-gradient-to-tr from-red-600/15 to-orange-500/15 border border-orange-500/30 rounded-full mb-5 animate-pulse">
                <Sparkles className="text-orange-500 h-12 w-12" />
              </div>
              
              <span className="font-mono text-xs uppercase font-bold tracking-widest text-orange-400">Program Spotlight</span>
              <h3 className="text-3xl font-serif font-black text-slate-100 mt-2 leading-tight">Alonzo Spark Internship</h3>
              <div className="mt-5 px-4 py-1.5 bg-orange-500/10 border border-orange-500/25 rounded-full text-orange-300 text-xs font-mono tracking-wider font-semibold uppercase">
                5-Week Cohort
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-7 space-y-6 lg:pl-2">
              
              <div className="space-y-4">
                <h4 className="text-2xl md:text-3xl lg:text-4xl font-serif font-black text-slate-100 leading-tight">
                  Empowering Next-Generation Engineers Through Real-World Building
                </h4>
                <p className="text-base md:text-lg text-slate-300 leading-relaxed font-light font-sans">
                  <strong className="text-slate-100 font-medium font-sans">Alonzo Spark Internship</strong> is a 5-week project-based learning program that empowers students to gain practical experience by working on real-world software projects. 
                </p>
                <p className="text-base md:text-lg text-slate-300 leading-relaxed font-light font-sans">
                  This cohort consists of <strong className="text-slate-100 font-medium font-sans">15 students</strong> from <span className="text-orange-400 font-medium font-sans">Stanley College of Engineering and Technology for Women</span> and <span className="text-orange-400 font-medium font-sans">Swami Vivekananda Institute of Technology</span>, collaborating on innovative projects across AI, Full-Stack Development, Automation, EdTech, and Open-Source Technologies.
                </p>
                <p className="text-base md:text-lg text-slate-300 leading-relaxed font-light font-sans">
                  Under expert mentorship, interns develop technical skills, teamwork, and industry readiness while building impactful solutions.
                </p>
              </div>

              {/* Tag Badges */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                <span className="px-3.5 py-1.5 bg-slate-900 border border-slate-800 text-xs font-mono tracking-wider text-slate-400 hover:text-orange-400 hover:border-orange-500/30 transition-all duration-300 uppercase rounded-lg">#AI</span>
                <span className="px-3.5 py-1.5 bg-slate-900 border border-slate-800 text-xs font-mono tracking-wider text-slate-400 hover:text-orange-400 hover:border-orange-500/30 transition-all duration-300 uppercase rounded-lg">#FullStack</span>
                <span className="px-3.5 py-1.5 bg-slate-900 border border-slate-800 text-xs font-mono tracking-wider text-slate-400 hover:text-orange-400 hover:border-orange-500/30 transition-all duration-300 uppercase rounded-lg">#Automation</span>
                <span className="px-3.5 py-1.5 bg-slate-900 border border-slate-800 text-xs font-mono tracking-wider text-slate-400 hover:text-orange-400 hover:border-orange-500/30 transition-all duration-300 uppercase rounded-lg">#EdTech</span>
                <span className="px-3.5 py-1.5 bg-slate-900 border border-slate-800 text-xs font-mono tracking-wider text-slate-400 hover:text-orange-400 hover:border-orange-500/30 transition-all duration-300 uppercase rounded-lg">#OpenSource</span>
              </div>

              {/* Program Metrics Row */}
              <div className="pt-6 border-t border-slate-800/60 grid grid-cols-2 sm:grid-cols-4 gap-5">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 bg-slate-950 border border-slate-850 rounded-xl text-red-500">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <div className="text-base font-extrabold text-slate-100 font-mono">5 Weeks</div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mt-0.5">Duration</div>
                  </div>
                </div>
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 bg-slate-950 border border-slate-850 rounded-xl text-orange-500">
                    <Users size={18} />
                  </div>
                  <div>
                    <div className="text-base font-extrabold text-slate-100 font-mono">15 Interns</div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mt-0.5">Cohort Size</div>
                  </div>
                </div>
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 bg-slate-950 border border-slate-850 rounded-xl text-amber-500">
                    <Award size={18} />
                  </div>
                  <div>
                    <div className="text-base font-extrabold text-slate-100 font-mono">2 Colleges</div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mt-0.5">Partners</div>
                  </div>
                </div>
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 bg-slate-950 border border-slate-850 rounded-xl text-yellow-500">
                    <Layers size={18} />
                  </div>
                  <div>
                    <div className="text-base font-extrabold text-slate-100 font-mono">5 Tracks</div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mt-0.5">Tech Focus</div>
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
