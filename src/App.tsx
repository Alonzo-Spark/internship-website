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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans antialiased overflow-x-hidden selection:bg-orange-500/30 selection:text-white">
      {/* Absolute fixed Header Coordinate */}
      <Navbar />

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
      <Footer />
    </div>
  );
}

