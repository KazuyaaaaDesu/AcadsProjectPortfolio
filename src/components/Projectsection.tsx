// src/components/ProjectSection.tsx
import { useState } from 'react';
import { developmentProjects, researchPapers } from '../data/projectData';
import { ProjectCard, ResearchCard } from './ProjectCard';

export default function ProjectSection() {
  const [activePdf, setActivePdf] = useState<{ url: string; title: string } | null>(null);

  const handleOpenPdf = (url: string, title: string) => {
    setActivePdf({ url, title });
  };

  const handleClosePdf = () => {
    setActivePdf(null);
  };

  return (
    <section className="w-full min-h-screen bg-transparent text-white px-6 md:px-8 py-24 pt-0 relative">
      
      {/* HEADER */}
      <div className="flex flex-col items-center justify-center text-center mb-14">
        <span className="text-sm tracking-[0.35em] uppercase text-emerald-400 mb-3">
          / Projects
        </span>

        <h1 className="relative inline-block text-4xl md:text-5xl font-bold tracking-tight mb-4 px-4 py-1">
          <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-teal-400"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-purple-400"></div>
          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-purple-400"></div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-teal-400"></div>
          
          Things I've Built
        </h1>

        <p className="max-w-2xl text-gray-400 leading-relaxed">
          A collection of academic, personal, and technical projects
          that reflect my skills, interests, and problem-solving approach.
        </p>
      </div>

      {/* DEVELOPMENT PROJECTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {developmentProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* EXPOSITION PAPERS */}
      <div className="max-w-7xl mx-auto mt-32">
        <div className="text-center mb-12">
          <span className="text-sm tracking-[0.35em] uppercase text-purple-400">
            / Research
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Mathematical Exposition
          </h2>

          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Research and mathematical papers exploring theoretical concepts
            and their applications to real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {researchPapers.map((paper, index) => (
            <ResearchCard key={index} paper={paper} onOpenPdf={handleOpenPdf} />
          ))}
        </div>
      </div>

      {/* PDF PREVIEW MODAL */}
      {activePdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8">
          <div className="relative w-full max-w-5xl h-[85vh] bg-[#080b0f] border border-gray-800 rounded-2xl flex flex-col overflow-hidden shadow-2xl">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-[#0c1017]">
              <h3 className="text-lg font-medium text-white truncate max-w-[80%]">
                {activePdf.title}
              </h3>
              <button 
                onClick={handleClosePdf}
                className="text-gray-400 hover:text-white transition-colors p-2 text-xl font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* PDF Viewer Body */}
            <div className="flex-1 w-full bg-gray-900">
              <iframe
                src={activePdf.url}
                title={activePdf.title}
                className="w-full h-full border-0"
              />
            </div>

          </div>
        </div>
      )}

    </section>
  );
}