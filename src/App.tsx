/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SparkProgram } from "./components/SparkProgram";
import { Projects } from "./components/Projects";
import { ProjectDetails } from "./components/ProjectDetails";
import { Footer } from "./components/Footer";
import { ContributorProfile } from "./components/ContributorProfile";
import { Contributor, Project } from "./types";
import { AnimatePresence } from "motion/react";

export default function App() {
  const [selectedProfile, setSelectedProfile] = useState<{
    contributor: Contributor;
    project: Project;
  } | null>(null);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleContributorSelect = (contributor: Contributor, project: Project) => {
    // Set profile active, and scroll top to begin clean viewing coordinate
    setSelectedProfile({ contributor, project });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigate = (sectionId?: string) => {
    setSelectedProfile(null);
    setSelectedProject(null);

    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Wait for the AnimatePresence exit transitions to finish and mount components on the DOM by polling
    let attempts = 0;
    const checkAndScroll = () => {
      const element = document.getElementById(sectionId);
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
      } else if (attempts < 15) {
        attempts++;
        setTimeout(checkAndScroll, 50);
      }
    };

    setTimeout(checkAndScroll, 50);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans antialiased overflow-x-hidden selection:bg-orange-500/30 selection:text-white">
      {/* Absolute fixed Header Coordinate */}
      <Navbar onNavigate={handleNavigate} />

      {/* Main viewport flow */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {selectedProfile ? (
            <ContributorProfile
              key={selectedProfile.contributor.id}
              contributor={selectedProfile.contributor}
              projectName={selectedProfile.project.name}
              projectDuration={selectedProfile.project.duration}
              mentor={selectedProfile.project.mentor}
              onClose={() => setSelectedProfile(null)}
            />
          ) : selectedProject ? (
            <ProjectDetails
              key={selectedProject.id}
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
              onContributorSelect={handleContributorSelect}
            />
          ) : (
            <>
              {/* Home Landing Sections */}
              <Hero />
              <SparkProgram />
              <Projects 
                onContributorSelect={handleContributorSelect} 
                onProjectSelect={handleProjectSelect}
              />
            </>
          )}
        </AnimatePresence>
      </main>

      {/* Persistent global footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

