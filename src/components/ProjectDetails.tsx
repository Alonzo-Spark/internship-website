import React from "react";
import { ArrowLeft, Cpu, Code2, GraduationCap } from "lucide-react";
import { Project, Contributor } from "../types";
import { motion } from "motion/react";

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
  onContributorSelect: (contributor: Contributor, project: Project) => void;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  project,
  onClose,
  onContributorSelect,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 md:pt-32 md:pb-12 relative z-10"
    >
      {/* Return Navigation Anchor */}
      <button
        onClick={onClose}
        className="group mt-2 mb-8 inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-slate-400 hover:text-orange-400 transition-colors uppercase cursor-pointer relative z-50"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        Back to Showcase
      </button>

      {/* Main Details Grid Container */}
      <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md">
        
        {/* Giant Project Showcase Hero Card */}
        <div className="relative h-64 sm:h-96 w-full bg-slate-950">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-contain p-6 bg-white opacity-95"
          />
          {/* Subtle vignette layer */}
          <div className="absolute inset-0 project-details-overlay" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <span className="px-3 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-[10px] font-bold uppercase tracking-widest rounded-md">
              {project.domain}
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-black text-slate-100 mt-3 tracking-tight drop-shadow-md">
              {project.name}
            </h1>
          </div>
        </div>

        {/* Content Showcase Body Grid */}
        <div className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Block: Brief Overview and Tech Profile */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xs font-bold text-orange-400 uppercase tracking-widest font-mono flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
                Project Description & Mission
              </h2>
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-light font-sans">
                {project.description}
              </p>
            </div>

            {/* Technical Framework Stack */}
            <div className="space-y-4 pt-4 border-t border-slate-800/60">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono flex items-center gap-2">
                <Cpu size={12} className="text-orange-500" />
                Architectural Tech-Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((singleTech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-950 border border-slate-850/80 text-slate-350 font-mono text-xs font-medium rounded-lg"
                  >
                    {singleTech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Block: 3 Cohort Contributors */}
          <div className="lg:col-span-5 space-y-6">

            <div className="space-y-4">
              {project.contributors.map((contrib) => (
                <div
                  key={contrib.id}
                  className="p-4 bg-slate-950/60 border border-slate-900 rounded-2xl flex items-center justify-between hover:border-orange-500/20 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    {/* User profile picture */}
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 flex-shrink-0">
                      <img
                        src={contrib.avatar}
                        alt={contrib.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Meta labels */}
                    <div>
                      <h4 className="font-serif text-sm font-bold text-slate-100 group-hover:text-orange-400 transition-colors">
                        {contrib.name}
                      </h4>
                      <p className="text-[10px] text-orange-500 font-mono uppercase tracking-wider mt-0.5">
                        {contrib.role}
                      </p>

                    </div>
                  </div>

                  {/* Dynamic Action Trigger to view detailed bio resume */}
                  <button
                    onClick={() => onContributorSelect(contrib, project)}
                    className="p-2 bg-slate-900 hover:bg-orange-500 border border-slate-800 hover:border-orange-400 rounded-xl text-slate-400 hover:text-white transition-all cursor-pointer"
                    title="View Bio Profile"
                  >
                    <ArrowLeft size={14} className="rotate-180" />
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </motion.div>
  );
};
