import React, { useState } from "react";
import { Project, Contributor } from "../types";
import { projectsData } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { Users, Star, Bookmark, User, MessageSquareCode, ArrowDownRight, ChevronDown, ChevronUp } from "lucide-react";

export const getProjectBgColor = (projectId: string) => {
  switch (projectId) {
    case "medical-camp-management":
      return "#f6fbfa";
    case "natya-samhita":
      return "#b8a486";
    case "chps-automation":
      return "#fdfdfd";
    case "edu-sim":
      return "#f7f7f7";
    case "sustainable-infrastructure":
      return "#1b1b1b";
    default:
      return "#020617";
  }
};

interface ProjectsProps {
  onContributorSelect: (contributor: Contributor, project: Project) => void;
  onProjectSelect: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onContributorSelect, onProjectSelect }) => {
  // Store expanded state per project card: 'contributors' | 'reviews' | null
  const [expandedSection, setExpandedSection] = useState<{ [key: string]: "contributors" | "reviews" | null }>({});

  const toggleSection = (projectId: string, section: "contributors" | "reviews") => {
    setExpandedSection((prev) => {
      const current = prev[projectId];
      return {
        ...prev,
        [projectId]: current === section ? null : section,
      };
    });
  };

  return (
    <section id="projects-section" className="relative py-20 bg-slate-950 border-t border-slate-900 overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-red-950/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-100 tracking-tight">
            High-Impact Internship Deliverables
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Review live partner integrations developed exclusively by our internship cohorts. Expand details to study individual team member profiles, portfolios, and partner endorsements.
          </p>
        </div>

        {/* Project Card Layout Grid */}
        <div className="space-y-12" id="projects-deck-wrapper">
          {projectsData.map((project) => {
            const activeSection = expandedSection[project.id] || null;

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800 hover:border-slate-800/80 transition-all duration-300 shadow-xl overflow-hidden flex flex-col"
              >
                {/* Horizontal main project container (Desktop layout combines visual + description, mobile wraps vertically) */}
                <div 
                  onClick={() => onProjectSelect(project)}
                  className="grid grid-cols-1 md:grid-cols-12 gap-0 cursor-pointer hover:bg-slate-900/10 transition-colors md:h-[420px]"
                >
                  
                  {/* Left Side: Solid representation of image */}
                  <div 
                    className="md:col-span-5 relative h-64 md:h-full min-h-[250px] overflow-hidden bg-slate-950"
                    style={{ backgroundColor: getProjectBgColor(project.id) }}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      onClick={() => onProjectSelect(project)}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                      className="w-full h-full object-contain p-4 transition-transform duration-500 hover:scale-105 cursor-pointer"
                    />
                    
                    {/* Domain floated badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-slate-950/90 border border-slate-850/80 text-orange-400 font-mono text-[10px] font-bold uppercase tracking-widest rounded-md shadow-lg">
                        {project.domain}
                      </span>
                    </div>
                  </div>

                  {/* Right Side: Details and action bars */}
                  <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between">
                    <div className="space-y-4">
                      
                      <div className="border-b border-slate-900 pb-3">
                        <h3 
                          onClick={() => onProjectSelect(project)}
                          className="text-2xl font-serif font-black text-slate-100 tracking-wide cursor-pointer hover:text-orange-400 transition-colors"
                          title="View Project Details"
                        >
                          {project.name}
                        </h3>
                      </div>

                      {/* Technical Description */}
                      <p 
                        onClick={() => onProjectSelect(project)}
                        className="text-slate-300 text-sm leading-relaxed line-clamp-4 cursor-pointer hover:text-slate-200 transition-colors"
                        title="Click to view full description"
                      >
                        {project.description}
                      </p>

                      {/* Technology Pill List */}
                      <div className="flex flex-wrap gap-1.5 pt-2 max-h-[58px] overflow-hidden">
                        {project.tech.map((singleTech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 bg-slate-950 border border-slate-850 text-slate-400 font-mono text-[10px] font-medium rounded"
                          >
                            {singleTech}
                          </span>
                        ))}
                      </div>

                    </div>

                    {/* Navigation Buttons: Toggle contributor / reviews drawer */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-6 mt-6 border-t border-slate-900/60">
                      
                      {/* Contributors button */}
                      <button
                        id={`btn-contributors-${project.id}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSection(project.id, "contributors");
                        }}
                        className={`flex-1 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-widest border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                          activeSection === "contributors"
                            ? "bg-slate-950 border-orange-500/50 text-orange-400"
                            : "bg-slate-950 hover:bg-slate-900 border-slate-850 text-slate-300 hover:text-slate-100"
                        }`}
                      >
                        <Users size={14} className="text-orange-500" />
                        <span>Team Members</span>
                        {activeSection === "contributors" ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                      </button>

                      {/* Client Reviews button */}
                      <button
                        id={`btn-reviews-${project.id}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSection(project.id, "reviews");
                        }}
                        className={`flex-1 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-widest border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                          activeSection === "reviews"
                            ? "bg-slate-950 border-orange-500/50 text-orange-400"
                            : "bg-slate-950 hover:bg-slate-900 border-slate-850 text-slate-300 hover:text-slate-100"
                        }`}
                      >
                        <Star size={14} className="text-yellow-500" />
                        <span>Partner Reviews</span>
                        {activeSection === "reviews" ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                      </button>

                    </div>

                  </div>

                </div>

                {/* EXPANSION SECTION (Height matching animations for smooth sliders) */}
                <AnimatePresence initial={false}>
                  {activeSection && (
                    <motion.div
                      id={`expansion-${project.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="border-t border-slate-900 bg-slate-950/40 overflow-hidden"
                    >
                      {activeSection === "contributors" && (
                        <div className="p-6 md:p-8 space-y-6" id={`expansion-contributors-${project.id}`}>

                          {/* Contributor Card Deck */}
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {project.contributors.map((contrib) => (
                              <div
                                key={contrib.id}
                                id={`contrib-card-${contrib.id}`}
                                className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl flex flex-col justify-between hover:border-orange-500/20 group hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                              >
                                <div className="flex gap-3">
                                  {/* Minimal photo frame */}
                                   <div 
                                     onClick={() => onContributorSelect(contrib, project)}
                                     className="w-11 h-11 rounded-lg overflow-hidden flex-shrink-0 bg-slate-950 border border-slate-850 cursor-pointer flex items-center justify-center relative group"
                                     title="View Profile"
                                   >
                                     <img
                                       src={contrib.avatar}
                                       alt={contrib.name}
                                       onError={(e) => {
                                         e.currentTarget.style.display = 'none';
                                       }}
                                       className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 duration-300 relative z-10"
                                     />
                                     <User size={18} className="text-slate-500 absolute" />
                                   </div>

                                  {/* Info Column */}
                                  <div className="flex-1 min-w-0">
                                    <h5 
                                      onClick={() => onContributorSelect(contrib, project)}
                                      className="font-serif text-sm font-bold text-slate-100 group-hover:text-orange-400 cursor-pointer hover:underline transition-colors truncate"
                                      title="View Profile"
                                    >
                                      {contrib.name}
                                    </h5>
                                    <p className="text-[11px] text-orange-500 font-mono uppercase tracking-wide mt-0.5">
                                      {contrib.role}
                                    </p>
                                    <p className="text-xs text-slate-400 line-clamp-2 mt-2 leading-relaxed">
                                      {contrib.bio}
                                    </p>
                                  </div>
                                </div>

                                {/* Skills Tag Row */}
                                <div className="border-t border-slate-950 mt-4 pt-3 flex justify-end items-center text-[10px]">
                                  <button
                                    id={`view-profile-btn-${contrib.id}`}
                                    onClick={() => onContributorSelect(contrib, project)}
                                    className="px-3 py-1 bg-slate-950 hover:bg-slate-900 border border-slate-850 text-slate-300 hover:text-slate-100 rounded text-[10px] font-semibold tracking-wider uppercase transition-colors cursor-pointer flex items-center gap-1 group-hover:border-orange-500/20"
                                  >
                                    View Profile
                                    <ArrowDownRight size={10} className="text-orange-500" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {activeSection === "reviews" && (
                        <div className="p-6 md:p-8 space-y-4" id={`expansion-reviews-${project.id}`}>
                          
                          {/* Section Title with Subtitle */}
                          <div className="flex flex-col gap-1 mb-2">
                            <span className="text-[10px] text-orange-500 font-mono uppercase tracking-wider font-bold">Partner Feedback Timeline</span>
                            <h4 className="text-sm font-bold text-slate-200">5-Week Integration Reviews</h4>
                          </div>

                          {/* Horizontal scrolling partner reviews timeline */}
                          <div className="flex gap-5 overflow-x-auto pb-4 pt-1 custom-scrollbar snap-x snap-mandatory">
                            {project.reviews.map((rev, idx) => (
                              <div
                                key={idx}
                                className="min-w-[280px] md:min-w-[340px] max-w-[360px] bg-slate-900/60 border border-slate-800 hover:border-orange-500/30 p-5 rounded-xl space-y-3.5 shadow-md flex flex-col justify-between snap-start transition-all duration-300 relative group overflow-hidden"
                              >
                                {/* Week tag in the card */}
                                <div className="absolute top-0 right-0 p-1 px-2.5 bg-orange-500/10 text-orange-400 font-mono text-[10px] font-bold rounded-bl-lg">
                                  W-{rev.week}
                                </div>

                                <div className="space-y-3">
                                  {/* Commentary text */}
                                  <p className="text-slate-200 text-xs md:text-sm italic leading-relaxed font-sans mt-3">
                                    "{rev.comment}"
                                  </p>
                                </div>

                                <div className="flex flex-col border-t border-slate-950 pt-3">
                                  <span className="text-xs font-bold text-slate-100">{rev.name}</span>
                                  <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wide mt-0.5">
                                    {rev.company}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
