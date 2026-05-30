import React from "react";
import { motion } from "motion/react";
import { Contributor, Mentor } from "../types";
import { X, Award, Code2, GraduationCap, ArrowLeft, Mail, Phone, Globe, ExternalLink, Calendar, FileCheck2, UserCheck } from "lucide-react";

interface ContributorProfileProps {
  contributor: Contributor;
  projectName: string;
  projectDuration: string;
  mentor: Mentor;
  onClose: () => void;
}

export const ContributorProfile: React.FC<ContributorProfileProps> = ({
  contributor,
  projectName,
  projectDuration,
  mentor,
  onClose,
}) => {
  return (
    <motion.div
      id="contributor-profile-overlay"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-40 bg-slate-950 overflow-y-auto text-slate-100 mt-[73px] sm:mt-0"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-950/20 via-slate-950 to-slate-950" />
      
      {/* Decorative vertical mesh lines to simulate Alonzo AI digital tech aesthetic */}
      <div className="absolute inset-x-0 top-0 h-96 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative max-w-6xl mx-auto px-4 py-8 md:py-12 z-10">
        
        {/* Back Button & Floating Header */}
        <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-5">
          <button
            id="back-to-projects-btn"
            onClick={onClose}
            className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-orange-400 group transition-colors cursor-pointer"
          >
            <ArrowLeft size={18} className="transform group-hover:-translate-x-1 transition-transform" />
            Back to Project Grid
          </button>
          
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-1 bg-gradient-to-r from-red-900/40 to-orange-500/10 border border-orange-500/20 text-orange-400 rounded-full font-mono uppercase">
              Contributor Dossier
            </span>
            <button
              id="profile-close-icon"
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-white bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-full transition-all cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* 2-Column Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start" id="contributor-main-grid">
          
          {/* LEFT SIDE: Portrait, Contact Links, Experience, Achievements & Education */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Portrait Card */}
            <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800 overflow-hidden shadow-xl" id="portrait-card">
              <div className="aspect-square w-full relative bg-slate-950">
                <img
                  src={contributor.avatar}
                  alt={contributor.name}
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                
                {/* Float tag on image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-sm font-mono text-orange-400 font-semibold uppercase">{contributor.role}</div>
                  <h2 className="text-2xl font-serif font-bold text-white tracking-wide mt-1">{contributor.name}</h2>
                </div>
              </div>

              {/* Stat Lines in Portrait */}
              <div className="p-5 border-t border-slate-800/80 bg-slate-950/40 divide-y divide-slate-800/60">
                <div className="flex items-center justify-between py-2 text-sm">
                  <span className="text-slate-400 flex items-center gap-2">
                    <GraduationCap size={15} className="text-orange-500" />
                    Academic CGPA
                  </span>
                  <span className="font-mono font-bold text-white text-right">{contributor.cgpa}</span>
                </div>
                <div className="flex items-center justify-between py-2 text-sm">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Calendar size={15} className="text-orange-500" />
                    Internship Term
                  </span>
                  <span className="font-mono text-slate-350 text-right">{projectDuration}</span>
                </div>
                <div className="flex items-center justify-between py-2 text-sm">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Code2 size={15} className="text-orange-500" />
                    Project Assignment
                  </span>
                  <span className="font-sans font-medium text-slate-200 text-right truncate max-w-[150px]">{projectName}</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Portal */}
            <div className="bg-slate-900/40 backdrop-blur-md rounded-xl border border-slate-800/80 p-5 space-y-3.5 shadow-md">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Professional Directory</h3>
              <div className="space-y-2.5 text-xs">
                <a href={`mailto:${contributor.name.toLowerCase().replace(/\s/g, "")}@alonzo.ai`} className="flex items-center gap-2 text-slate-300 hover:text-orange-400 transition-colors">
                  <Mail size={14} className="text-slate-500" />
                  <span>{contributor.name.toLowerCase().replace(/\s/g, "")}@alonzo.ai</span>
                </a>
                <div className="flex items-center gap-2 text-slate-300">
                  <Phone size={14} className="text-slate-500" />
                  <span>+1 (800) 555-ALNZ</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 hover:text-orange-400 transition-colors">
                  <Globe size={14} className="text-slate-500" />
                  <span>portfolio.{contributor.name.toLowerCase().replace(/\s/g, "")}.io</span>
                </div>
              </div>
            </div>

            {/* Education Block */}
            <div className="bg-slate-900/40 backdrop-blur-md rounded-xl border border-slate-800/85 p-5 space-y-4 shadow-md">
              <h3 className="text-xs font-semibold text-orange-400 uppercase tracking-widest flex items-center gap-2">
                <GraduationCap size={15} />
                Education
              </h3>
              {contributor.resume.education.map((edu, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="text-sm font-semibold text-white leading-snug">{edu.degree}</div>
                  <div className="text-xs text-slate-300">{edu.school}</div>
                  <div className="flex justify-between items-center text-[11px] text-slate-500 font-mono pt-0.5">
                    <span>{edu.year}</span>
                    <span className="text-orange-400 font-semibold">{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT SIDE: Biography, "What I Contributed", Mentor Feedback & Real Embedded Resume Viewer */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Bio Segment */}
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight">{contributor.name}</h1>
              <div className="text-base text-orange-400 font-mono uppercase tracking-wider">{contributor.role} • {projectName}</div>
              <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">{contributor.bio}</p>
            </div>

            {/* Skills / Tech Used tags */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Technologies & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {contributor.techUsed.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-900 border border-slate-800 text-slate-200 text-xs font-mono rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Experience Section "What I Contributed" */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-emerald-500/10 p-6 space-y-4 shadow-xl">
              <h3 className="text-xs font-semibold text-emerald-400 uppercase tracking-widest flex items-center gap-2 font-mono">
                <span className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse" />
                Work Placement: /src/con_exper.ts
              </h3>
              <div className="space-y-3">
                <h4 className="text-lg font-serif font-bold text-white">What I Contributed</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {contributor.contributions}
                </p>
              </div>
            </div>

            {/* Mentor Section */}
            <div className="bg-slate-900/65 backdrop-blur-md rounded-xl border border-orange-500/15 p-6 space-y-5 shadow-xl">
              <h3 className="text-xs font-semibold text-orange-400 uppercase tracking-widest flex items-center gap-2">
                <UserCheck size={15} />
                Mentor Evaluation
              </h3>
              
              <div className="flex flex-col md:flex-row gap-5 items-start">
                {/* Mentor Photo */}
                <div className="w-16 h-16 rounded-xl overflow-hidden border border-slate-800 flex-shrink-0 bg-slate-950">
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Mentor Testimonial Description */}
                <div className="space-y-3 flex-1">
                  <p className="text-slate-200 text-sm italic leading-relaxed">
                    "{mentor.comment}"
                  </p>
                  <div>
                    <div className="text-xs font-bold text-white">{mentor.name}</div>
                    <div className="text-[11px] text-slate-400 font-mono mt-0.5">{mentor.designation} • {mentor.organization}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* EMBEDDED RESUME VIEWER (Displays resume directly within the page, does NOT force download) */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl" id="embedded-resume-viewer">
              <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-850">
                <div className="flex items-center gap-2.5">
                  <FileCheck2 size={18} className="text-orange-400" />
                  <span className="text-xs font-bold text-slate-200 uppercase tracking-widest">Embedded Interactive CV Document</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] text-slate-450 font-mono">Live Sync</span>
                </div>
              </div>

              {/* Realistic Clean A4 Résumé Paper Rendering (Elegant corporate high contrast style) */}
              <div className="p-8 md:p-12 bg-white text-slate-900 font-sans leading-relaxed selection:bg-orange-100 max-w-4xl mx-auto border-t border-slate-100">
                
                {/* Resume Header */}
                <div className="text-center space-y-2 border-b-2 border-slate-900 pb-5">
                  <h2 className="text-35 font-serif font-bold text-slate-900 text-2xl uppercase tracking-wider">{contributor.name}</h2>
                  <div className="text-xs font-mono font-bold tracking-wide text-orange-600 uppercase">{contributor.role}</div>
                  <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[11px] text-slate-500 font-mono">
                    <span>{contributor.name.toLowerCase().replace(/\s/g, "")}@alonzo.ai</span>
                    <span>•</span>
                    <span>+1 (800) 555-ALNZ</span>
                    <span>•</span>
                    <span>{contributor.name.toLowerCase().replace(/\s/g, "")}.io</span>
                  </div>
                </div>

                {/* Profile Summary Segment inside resume */}
                <div className="py-5 border-b border-slate-100 space-y-2">
                  <h3 className="text-xs font-bold tracking-widest text-slate-900 uppercase">Executive Summary</h3>
                  <p className="text-xs text-slate-700 leading-relaxed text-justify">
                    A highly competent, detail-oriented technology engineer holding an academic record of {contributor.cgpa}. 
                    Extensively contributed to the construction of {projectName} during placement at Alonzo AI. Equipped with a strong background 
                    in {contributor.skills.slice(0, 3).join(", ")}, specializing in secure API structures, high-performance architecture, and visual analytics dashboards.
                  </p>
                </div>

                {/* Technical Skills segment inside resume */}
                <div className="py-5 border-b border-slate-100 space-y-2">
                  <h3 className="text-xs font-bold tracking-widest text-slate-900 uppercase">Core Competencies & Stack</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2.5 text-xs text-slate-700">
                    <div>
                      <span className="font-bold text-slate-950">Engineering Stack:</span>
                      <p className="text-[11px] text-slate-500 font-medium mt-0.5">{contributor.techUsed.join(", ")}</p>
                    </div>
                    <div>
                      <span className="font-bold text-slate-950">Platform Skills:</span>
                      <p className="text-[11px] text-slate-500 font-medium mt-0.5">{contributor.skills.join(", ")}</p>
                    </div>
                    <div>
                      <span className="font-bold text-slate-950">Academic Standard:</span>
                      <p className="text-[11px] text-slate-650 font-bold mt-0.5">CGPA Score: {contributor.cgpa}</p>
                    </div>
                  </div>
                </div>

                {/* Professional Placement inside resume */}
                <div className="py-5 border-b border-slate-100 space-y-3">
                  <h3 className="text-xs font-bold tracking-widest text-slate-900 uppercase">Professional Placements</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xs font-bold text-slate-950">Alonzo AI Solutions</h4>
                        <div className="text-[10px] text-slate-500 font-mono uppercase font-bold mt-0.5">Associate Placement — {contributor.role}</div>
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono text-right">{projectDuration}</span>
                    </div>
                    <p className="text-xs text-slate-750 leading-relaxed text-justify">
                      {contributor.contributions} Assured the technical and architectural delivery standards specified under primary advisor {mentor.name}.
                    </p>
                  </div>
                </div>

                {/* Core Academic Projects inside resume */}
                <div className="py-5 border-b border-slate-100 space-y-4">
                  <h3 className="text-xs font-bold tracking-widest text-slate-900 uppercase">Specialized Projects</h3>
                  {contributor.resume.projects.map((proj, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between items-baseline">
                        <h4 className="text-xs font-bold text-slate-950">{proj.title}</h4>
                        <span className="text-[9px] font-mono bg-slate-100 text-slate-600 px-1.5 py-0.5 font-bold rounded">{proj.tech.join(" | ")}</span>
                      </div>
                      <p className="text-xs text-slate-650 leading-relaxed">
                        {proj.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Achievements section in Resume */}
                <div className="py-5 space-y-2">
                  <h3 className="text-xs font-bold tracking-widest text-slate-900 uppercase">Selected Achievements</h3>
                  <ul className="list-disc pl-5 text-xs text-slate-700 space-y-1.5">
                    {contributor.resume.achievements.map((ach, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {ach}
                      </li>
                    ))}
                    <li className="leading-relaxed">
                      Awarded full merit-based certificate of excellence during {projectName} internship showcase.
                    </li>
                  </ul>
                </div>

              </div>

              {/* Action row beneath Resume */}
              <div className="flex items-center justify-between p-5 bg-slate-950 border-t border-slate-850">
                <span className="text-[10px] text-slate-500 font-mono">Verified Security Hash ID: alz_{contributor.id.substring(0,4)}</span>
                <button
                  id="faux-print-btn"
                  onClick={() => window.print()}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-xs font-medium text-slate-200 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ExternalLink size={13} />
                  Print Document
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
};
