import React, { useState } from "react";
import { Project, Contributor } from "../types";
import { projectsData } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { Users, Star, Calendar, Bookmark, User, MessageSquareCode, ArrowDownRight, ChevronDown, ChevronUp } from "lucide-react";

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
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs font-semibold text-orange-400 uppercase tracking-widest font-mono">
            Active Portfolios
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight">
            High-Impact Internship Deliverables
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Review live client integrations developed exclusively by our internship cohorts. Expand details to study individual contributor profiles, portfolios, and client endorsements.
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
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                  
                  {/* Left Side: Solid representation of image */}
                  <div className="md:col-span-5 relative h-64 md:h-full min-h-[250px] bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.name}
                      onClick={() => onProjectSelect(project)}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-950/80 to-transparent" />
                    
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
                      
                      {/* Title, duration, and metadata info */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-900 pb-3">
                        <h3 
                          onClick={() => onProjectSelect(project)}
                          className="text-2xl font-serif font-black text-white tracking-wide cursor-pointer hover:text-orange-400 transition-colors"
                          title="View Project Details"
                        >
                          {project.name}
                        </h3>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                          <Calendar size={13} className="text-orange-500" />
                          <span>{project.duration}</span>
                        </div>
                      </div>

                      {/* Technical Description */}
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technology Pill List */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
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
                        onClick={() => toggleSection(project.id, "contributors")}
                        className={`flex-1 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-widest border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                          activeSection === "contributors"
                            ? "bg-slate-950 border-orange-500/50 text-orange-400"
                            : "bg-slate-950 hover:bg-slate-900 border-slate-850 text-slate-300 hover:text-white"
                        }`}
                      >
                        <Users size={14} className="text-orange-500" />
                        <span>Contributors</span>
                        {activeSection === "contributors" ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                      </button>

                      {/* Client Reviews button */}
                      <button
                        id={`btn-reviews-${project.id}`}
                        onClick={() => toggleSection(project.id, "reviews")}
                        className={`flex-1 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-widest border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                          activeSection === "reviews"
                            ? "bg-slate-950 border-orange-500/50 text-orange-400"
                            : "bg-slate-950 hover:bg-slate-900 border-slate-850 text-slate-300 hover:text-white"
                        }`}
                      >
                        <Star size={14} className="text-yellow-500" />
                        <span>Client Reviews</span>
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
                          <div className="flex items-center justify-between border-b border-slate-900 pb-3">
                            <h4 className="text-xs font-bold text-orange-400 uppercase tracking-widest font-mono flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                              Technical Contributor Task-Force
                            </h4>
                            <span className="text-[10px] text-slate-500 font-mono">
                              {project.contributors.length} Assigned Resource(s)
                            </span>
                          </div>

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
                                  <div className="w-11 h-11 rounded-lg overflow-hidden flex-shrink-0 bg-slate-950 border border-slate-850">
                                    <img
                                      src={contrib.avatar}
                                      alt={contrib.name}
                                      className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 duration-300"
                                    />
                                  </div>

                                  {/* Info Column */}
                                  <div className="flex-1 min-w-0">
                                    <h5 className="font-serif text-sm font-bold text-white group-hover:text-orange-400 transition-colors truncate">
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
                                <div className="border-t border-slate-950 mt-4 pt-3 flex justify-between items-center text-[10px]">
                                  <span className="text-slate-500 font-mono">Primary Skill: <strong className="text-orange-500/80 font-mono">{contrib.skills[0]}</strong></span>
                                  
                                  <button
                                    id={`view-profile-btn-${contrib.id}`}
                                    onClick={() => onContributorSelect(contrib, project)}
                                    className="px-3 py-1 bg-slate-950 hover:bg-slate-900 border border-slate-850 text-slate-300 hover:text-white rounded text-[10px] font-semibold tracking-wider uppercase transition-colors cursor-pointer flex items-center gap-1 group-hover:border-orange-500/20"
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
                        <div className="p-6 md:p-8 space-y-6" id={`expansion-reviews-${project.id}`}>
                          <div className="flex items-center justify-between border-b border-slate-900 pb-3">
                            <h4 className="text-xs font-bold text-orange-400 uppercase tracking-widest font-mono flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                              Endorsements and Field Reviews
                            </h4>
                            <span className="text-[10px] text-slate-500 font-mono">
                              {project.reviews.length} Client Testimonial(s)
                            </span>
                          </div>

                          {/* Client testimonial cards */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {project.reviews.map((rev, idx) => (
                              <div
                                key={idx}
                                className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-xl space-y-3.5 shadow"
                              >
                                {/* Stars bar */}
                                <div className="flex gap-0.5 text-amber-500">
                                  {[...Array(rev.rating)].map((_, i) => (
                                    <Star key={i} size={12} fill="currentColor" />
                                  ))}
                                </div>

                                {/* Commentary text */}
                                <p className="text-slate-300 text-xs italic leading-relaxed">
                                  "{rev.comment}"
                                </p>

                                {/* Client Author Frame */}
                                <div className="flex items-center gap-3 border-t border-slate-950 pt-3">
                                  <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 bg-slate-950 border border-slate-850">
                                    <img
                                      src={rev.avatar}
                                      alt={rev.name}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div>
                                    <div className="text-xs font-bold text-white">{rev.name}</div>
                                    <div className="text-[10px] text-slate-450 font-mono uppercase tracking-wide mt-0.5">
                                      {rev.company}
                                    </div>
                                  </div>
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
