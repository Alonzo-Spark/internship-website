import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Contributor, Mentor } from "../types";
import { get30DaysTasks, TaskItem } from "../utils/dailyTasksGenerator";
import { X, Award, Code2, GraduationCap, ArrowLeft, Github, Linkedin, ExternalLink, FileCheck2, UserCheck, Calendar, Mail, Phone, Download } from "lucide-react";

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
  const [selectedDay, setSelectedDay] = useState<number>(30);
  const [selectedWeekFilter, setSelectedWeekFilter] = useState<string>("all");
  const [showResume, setShowResume] = useState<boolean>(false);

  const rawGithub = contributor.github !== undefined ? contributor.github : contributor.name.toLowerCase().replace(/\s/g, "");
  const githubUrl = rawGithub ? (rawGithub.startsWith("http") ? rawGithub : `https://github.com/${rawGithub.replace(/^(https?:\/\/)?(www\.)?github\.com\//, "")}`) : "";
  const githubDisplay = rawGithub ? `github.com/${rawGithub.replace(/^(https?:\/\/)?(www\.)?github\.com\//, "")}` : "";

  const rawLinkedin = contributor.linkedin !== undefined ? contributor.linkedin : contributor.name.toLowerCase().replace(/\s/g, "");
  const linkedinUrl = rawLinkedin ? (rawLinkedin.startsWith("http") ? rawLinkedin : `https://linkedin.com/in/${rawLinkedin.replace(/^(https?:\/\/)?(www\.)?linkedin\.com\/in\//, "")}`) : "";
  const linkedinDisplay = rawLinkedin ? `linkedin.com/in/${rawLinkedin.replace(/^(https?:\/\/)?(www\.)?linkedin\.com\/in\//, "")}` : "";

  const allTasks = get30DaysTasks(contributor.role, contributor.name, contributor.dailyTasks);

  // Filter tasks for grid presentation based on week selector
  const displayedTasks = allTasks.filter((task) => {
    if (selectedWeekFilter === "all") return true;
    const week = parseInt(selectedWeekFilter);
    const startDay = (week - 1) * 6 + 1;
    const endDay = week * 6;
    return task.day >= startDay && task.day <= endDay;
  });

  const activeTask = allTasks.find((t) => t.day === selectedDay) || allTasks[29];

  return (
    <motion.div
      id="contributor-profile-overlay"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.35 }}
      className="max-w-6xl mx-auto px-4 pt-24 pb-8 md:pt-32 md:pb-12 z-10 relative"
    >
      {/* Return Navigation Anchor */}
      <button
        id="back-to-projects-btn"
        onClick={onClose}
        className="group mt-2 mb-8 inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-slate-400 hover:text-orange-400 transition-colors uppercase cursor-pointer relative z-50"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        Back to Project Details
      </button>

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
            </div>

            {/* Stat Lines in Portrait */}
            <div className="p-5 border-t border-slate-800/80 bg-slate-950/40 divide-y divide-slate-800/60">
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

          {/* College & Education Block */}
          <div className="bg-slate-900/40 backdrop-blur-md rounded-xl border border-slate-800/85 p-5 space-y-4 shadow-md">
            <h3 className="text-xs font-semibold text-orange-400 uppercase tracking-widest flex items-center gap-2">
              <GraduationCap size={15} />
              College & Education
            </h3>

            {/* Primary College highlight */}
            <div className="space-y-1.5 p-3 bg-slate-950/60 border border-slate-900 rounded-xl">
              <div className="text-[10px] text-slate-500 font-mono uppercase font-bold">Academic Institution</div>
              <div className="text-xs font-bold text-slate-100 leading-relaxed">{contributor.resume.education[0].school}</div>
              <div className="text-[10px] text-orange-500 font-mono mt-1 font-semibold">{contributor.resume.education[0].degree}</div>
            </div>

            {contributor.resume.education.map((edu, idx) => (
              <div key={idx} className="flex justify-between items-center pt-3 border-t border-slate-800/50 text-xs font-mono">
                <span className="text-slate-400">{edu.year}</span>
                <span className="text-orange-400 font-semibold">{edu.grade}</span>
              </div>
            ))}
          </div>

          {/* Quick Contact Portal */}
          <div className="bg-slate-900/40 backdrop-blur-md rounded-xl border border-slate-800/80 p-5 space-y-3.5 shadow-md">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Professional Directory</h3>
            <div className="space-y-2.5 text-xs">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-orange-400 transition-colors"
                >
                  <Github size={14} className="text-slate-500" />
                  <span>{githubDisplay}</span>
                </a>
              )}
              {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-orange-400 transition-colors"
                >
                  <Linkedin size={14} className="text-slate-500" />
                  <span>{linkedinDisplay}</span>
                </a>
              )}
              {contributor.email && (
                <a
                  href={`mailto:${contributor.email}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-orange-400 transition-colors"
                >
                  <Mail size={14} className="text-slate-500" />
                  <span>{contributor.email}</span>
                </a>
              )}
              {contributor.phone && (
                <a
                  href={`tel:${contributor.phone}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-orange-400 transition-colors"
                >
                  <Phone size={14} className="text-slate-500" />
                  <span>{contributor.phone}</span>
                </a>
              )}
            </div>
          </div>

        </div>

        {/* RIGHT SIDE: Biography, "What I Contributed", 30 Days Tasks, Weekly Reviews & Resume */}
        <div className="lg:col-span-8 space-y-8">

          {/* Bio Segment */}
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-100 tracking-tight">{contributor.name}</h1>
            <div className="text-base text-orange-400 font-mono uppercase tracking-wider">{contributor.role} • {projectName}</div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">{contributor.bio}</p>
          </div>

          {/* Skills tags */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {contributor.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-slate-900 border border-slate-800 text-slate-200 text-xs font-mono rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Key Contributions Segment */}
          <div className="space-y-3 bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-800/80 p-6 md:p-8 shadow-xl">
            <h3 className="text-xs font-semibold text-orange-400 uppercase tracking-widest flex items-center gap-2 font-mono">
              <Award size={15} />
              Key Internship Contributions
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed text-justify font-sans">
              {contributor.contributions}
            </p>
          </div>

          {/* 5-Week Internship Task Interactive Roadmap */}
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-blue-500/10 p-6 md:p-8 space-y-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
              <div className="space-y-1">
                <h3 className="text-xs font-semibold text-blue-400 uppercase tracking-widest flex items-center gap-2 font-mono">
                  <span className="h-2 w-2 bg-blue-400 rounded-full animate-pulse" />
                  5-Week Internship Task Matrix
                </h3>
                <p className="text-[11px] text-slate-500 font-sans">
                  Click on any day index tile to view the complete daily technical deliverables log.
                </p>
              </div>

              {/* Week Selector Filters */}
              <div className="flex flex-wrap gap-1 bg-slate-950 p-1 rounded-xl border border-slate-850">
                {["all", "1", "2", "3", "4", "5"].map((wk) => (
                  <button
                    key={wk}
                    onClick={() => setSelectedWeekFilter(wk)}
                    className={`px-2.5 py-1 text-[10px] font-mono font-bold uppercase rounded-lg transition-all cursor-pointer ${selectedWeekFilter === wk
                      ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      : "text-slate-500 hover:text-slate-350 border border-transparent"
                      }`}
                  >
                    {wk === "all" ? "All" : `W-${wk}`}
                  </button>
                ))}
              </div>
            </div>

            {/* Task Grid & Showcase Layout split */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">

              {/* Left Column: 30 Interactive Day Tiles */}
              <div className="md:col-span-7 space-y-3">
                <div className="grid grid-cols-6 gap-2">
                  {displayedTasks.map((t) => {
                    const isSelected = selectedDay === t.day;
                    return (
                      <button
                        key={t.day}
                        onClick={() => setSelectedDay(t.day)}
                        className={`h-11 rounded-lg flex flex-col items-center justify-center font-mono text-xs font-bold transition-all relative cursor-pointer border ${isSelected
                          ? "bg-blue-500/10 border-blue-500 text-blue-400 shadow-md shadow-blue-500/10 scale-105"
                          : "bg-slate-950/60 border-slate-900 text-slate-400 hover:text-slate-200 hover:border-slate-800"
                          }`}
                      >
                        <span className="text-[9px] text-slate-500 block leading-none mb-0.5">Day</span>
                        {t.day}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Selected Day Highlight Card */}
              <div className="md:col-span-5 bg-slate-950/80 border border-slate-900 rounded-xl p-5 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 text-blue-450 font-mono text-[9px] font-bold uppercase rounded">
                      Day {activeTask.day} Report
                    </span>
                    <span className="flex items-center gap-1.5 text-[9px] text-emerald-400 font-mono font-bold uppercase">
                      <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full" />
                      {activeTask.status}
                    </span>
                  </div>

                  <h4 className="font-serif text-sm font-bold text-slate-100 border-b border-slate-900 pb-2">
                    {activeTask.title}
                  </h4>

                  <p className="text-xs text-slate-350 leading-relaxed font-light font-sans">
                    {activeTask.detail}
                  </p>
                </div>


              </div>

            </div>
          </div>

          {/* 5-Week Weekly Mentor Review Timeline */}
          <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl border border-orange-500/15 p-6 md:p-8 space-y-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
              <div className="space-y-1">
                <h3 className="text-xs font-semibold text-orange-400 uppercase tracking-widest flex items-center gap-2 font-mono">
                  <UserCheck size={15} />
                  Weekly Mentor Review (5 Weeks)
                </h3>
                <p className="text-[11px] text-slate-500 font-sans">
                  Evaluation logs drafted by {mentor.name} ({mentor.designation})
                </p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full">
                <span className="text-[10px] font-mono font-bold text-orange-400">Average:</span>
                <span className="text-xs font-mono font-bold text-white">
                  {(contributor.weeklyReviews.reduce((acc, curr) => acc + curr.rating, 0) / 5).toFixed(2)} / 5
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
              {contributor.weeklyReviews.map((rev) => (
                <div
                  key={rev.week}
                  className="p-4 bg-slate-950/60 border border-slate-900 hover:border-orange-500/30 rounded-xl space-y-3 transition-all duration-300 relative group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-1 px-2 bg-orange-500/10 text-orange-400 font-mono text-[9px] font-bold rounded-bl-lg">
                    W-{rev.week}
                  </div>

                  <div className="flex items-center gap-1 text-amber-500">
                    <Award size={12} fill="currentColor" />
                    <span className="text-xs font-mono font-bold text-slate-200">{rev.rating.toFixed(1)}</span>
                  </div>

                  <p className="text-[11px] text-slate-350 leading-relaxed font-light font-sans group-hover:text-slate-200 transition-colors">
                    "{rev.review}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* EMBEDDED RESUME VIEWER */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl" id="embedded-resume-viewer">
            <div className="flex items-center justify-between px-6 py-5 bg-slate-950 border-b border-slate-850">
              <div className="flex items-center gap-2.5">
                <FileCheck2 size={18} className="text-orange-400" />
                <div>
                  <span className="text-xs font-bold text-slate-200 uppercase tracking-widest block">Interactive CV Document</span>
                  <span className="text-[10px] text-slate-500 font-mono mt-0.5 block">Alonzo verified digital signature</span>
                </div>
              </div>              <button
                onClick={() => {
                  setShowResume(!showResume);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer border ${showResume
                  ? "bg-slate-950 hover:bg-slate-900 border-slate-850 text-slate-400 hover:text-slate-200"
                  : "bg-orange-500 hover:bg-orange-600 border-orange-450 text-white shadow-lg shadow-orange-500/20"
                  }`}
              >
                {showResume ? "Hide Resume" : "View Resume CV"}
              </button>
            </div>

            <AnimatePresence initial={false}>
              {showResume && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  {contributor.resumePdf ? (
                    <div className="bg-slate-950 p-4 space-y-4 border-t border-slate-850">
                      {/* PDF Toolbar with Download option */}
                      <div className="flex justify-between items-center bg-slate-905/80 border border-slate-800/80 p-3 rounded-xl backdrop-blur-md">
                        <span className="text-xs text-slate-400 font-mono flex items-center gap-2">
                          <FileCheck2 size={14} className="text-orange-400" />
                          {contributor.name}_Resume.pdf
                        </span>
                        <a
                          href={contributor.resumePdf}
                          download={`${contributor.name}_Resume.pdf`}
                          className="px-3.5 py-1.5 bg-orange-500 hover:bg-orange-600 border border-orange-450 text-white rounded-lg text-xs font-mono font-bold tracking-wider uppercase transition-colors flex items-center gap-1.5 shadow-md shadow-orange-500/20 cursor-pointer"
                        >
                          <Download size={13} />
                          Download PDF
                        </a>
                      </div>
                      
                      {/* PDF Iframe embed */}
                      <div className="w-full aspect-[1/1.414] min-h-[500px] sm:min-h-[750px] bg-slate-900 border border-slate-800 rounded-xl overflow-hidden relative">
                        <iframe
                          src={`${contributor.resumePdf}#view=FitH`}
                          title={`${contributor.name} Resume`}
                          className="w-full h-full border-none"
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      {/* Realistic Clean A4 Résumé Paper Rendering */}
                      <div className="p-8 md:p-12 bg-white text-slate-900 font-sans leading-relaxed selection:bg-orange-100 max-w-4xl mx-auto border-t border-slate-100">

                        {/* Resume Header */}
                        <div className="text-center space-y-2 border-b-2 border-slate-900 pb-5">
                          <h2 className="text-slate-900 text-2xl uppercase tracking-wider font-bold">{contributor.name}</h2>
                          <div className="text-xs font-mono font-bold tracking-wide text-orange-600 uppercase">{contributor.role}</div>
                          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-[11px] text-slate-500 font-mono">
                            {contributor.email && <span>{contributor.email}</span>}
                            {contributor.email && contributor.phone && <span>•</span>}
                            {contributor.phone && <span>{contributor.phone}</span>}
                            {githubDisplay && (contributor.email || contributor.phone) && <span>•</span>}
                            {githubDisplay && <span>{githubDisplay}</span>}
                            {linkedinDisplay && (contributor.email || contributor.phone || githubDisplay) && <span>•</span>}
                            {linkedinDisplay && <span>{linkedinDisplay}</span>}
                          </div>
                        </div>

                        {/* Profile Summary Segment */}
                        <div className="py-5 border-b border-slate-100 space-y-2">
                          <h3 className="text-xs font-bold tracking-widest text-slate-900 uppercase">Executive Summary</h3>
                          <p className="text-xs text-slate-700 leading-relaxed text-justify">
                            A highly competent, detail-oriented technology engineer from {contributor.resume.education[0].school}.
                            Extensively contributed to the construction of {projectName} during placement at Alonzo AI. Equipped with a strong background
                            in {contributor.skills.slice(0, 3).join(", ")}, specializing in secure API structures, high-performance architecture, and visual analytics dashboards.
                          </p>
                        </div>

                        {/* Technical Skills segment */}
                        <div className="py-5 border-b border-slate-100 space-y-2">
                          <h3 className="text-xs font-bold tracking-widest text-slate-900 uppercase">Core Competencies & Stack</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs text-slate-700">
                            <div>
                              <span className="font-bold text-slate-955">Engineering Stack:</span>
                              <p className="text-[11px] text-slate-500 font-medium mt-0.5">{contributor.techUsed.join(", ")}</p>
                            </div>
                            <div>
                              <span className="font-bold text-slate-955">Platform Skills:</span>
                              <p className="text-[11px] text-slate-500 font-medium mt-0.5">{contributor.skills.join(", ")}</p>
                            </div>
                          </div>
                        </div>

                        {/* Professional Placement */}
                        <div className="py-5 border-b border-slate-100 space-y-3">
                          <h3 className="text-xs font-bold tracking-widest text-slate-900 uppercase">Professional Placements</h3>
                          <div className="space-y-2">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="text-xs font-bold text-slate-955">Alonzo AI Solutions</h4>
                                <div className="text-[10px] text-slate-500 font-mono uppercase font-bold mt-0.5">Associate Placement — {contributor.role}</div>
                              </div>
                              <span className="text-[10px] text-slate-500 font-mono text-right">{projectDuration}</span>
                            </div>
                            <p className="text-xs text-slate-755 leading-relaxed text-justify">
                              {contributor.contributions} Assured the technical and architectural delivery standards specified under primary advisor {mentor.name}.
                            </p>
                          </div>
                        </div>

                        {/* Core Academic Projects */}
                        <div className="py-5 border-b border-slate-100 space-y-4">
                          <h3 className="text-xs font-bold tracking-widest text-slate-900 uppercase">Specialized Projects</h3>
                          {contributor.resume.projects.map((proj, idx) => (
                            <div key={idx} className="space-y-1">
                              <div className="flex justify-between items-baseline">
                                <h4 className="text-xs font-bold text-slate-955">{proj.title}</h4>
                                <span className="text-[9px] font-mono bg-slate-100 text-slate-600 px-1.5 py-0.5 font-bold rounded">{proj.tech.join(" | ")}</span>
                              </div>
                              <p className="text-xs text-slate-650 leading-relaxed">
                                {proj.description}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Achievements section */}
                        <div className="py-5 space-y-2">
                          <h3 className="text-xs font-bold tracking-widest text-slate-950 uppercase">Selected Achievements</h3>
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

                      {/* Action row */}
                      <div className="flex items-center justify-between p-5 bg-slate-950 border-t border-slate-850">
                        <span className="text-[10px] text-slate-500 font-mono">Verified Security Hash ID: alz_{contributor.id.substring(0, 4)}</span>
                        <button
                          id="faux-print-btn"
                          onClick={() => window.print()}
                          className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-xs font-medium text-slate-200 transition-colors cursor-pointer flex items-center gap-1.5"
                        >
                          <ExternalLink size={13} />
                          Print Document
                        </button>
                      </div>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </motion.div>
  );
};
