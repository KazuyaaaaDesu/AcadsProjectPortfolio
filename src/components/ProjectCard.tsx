// src/components/ProjectCard.tsx
import React from 'react';
import { type DevelopmentProject, type ResearchPaper } from '../data/projectData';

interface ProjectCardProps {
  project: DevelopmentProject;
}

interface ResearchCardProps {
  paper: ResearchPaper;
  onOpenPdf: (url: string, title: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={`group rounded-2xl p-[1.5px] bg-gradient-to-br ${project.gradient} ${project.shadow} transition-all duration-500`}>
      <div className="h-full bg-[#080b0f]/95 rounded-[15px] overflow-hidden flex flex-col justify-between">
        <div>
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080b0f] via-transparent to-transparent" />
          </div>

          <div className="p-6">
            <span className={`text-xs uppercase tracking-widest ${project.tagColor}`}>
              {project.category}
            </span>

            <h2 className="text-xl font-semibold mt-2 mb-3">
              {project.title}
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed">
              {project.description}
            </p>

            {project.tags && (
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className={`px-3 py-1 text-xs rounded-md border ${tag.border} ${tag.text} ${tag.bg}`}>
                    {tag.label}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* add for future use of button to view project
        <div className="p-6 pt-0 flex items-center justify-between mt-auto">
          <button className={`text-sm ${project.buttonColor} transition-colors cursor-pointer`}>
            View Project ↗
          </button>
          <span className="text-gray-500 text-lg">⌁</span>
        </div>
        */}
      </div>
    </div>
  );
};

export const ResearchCard: React.FC<ResearchCardProps> = ({ paper, onOpenPdf }) => {
  return (
    <div className={`group rounded-2xl p-[1.5px] bg-gradient-to-br ${paper.gradient} ${paper.shadow} transition-all duration-500`}>
      <div className="h-full bg-[#080b0f]/95 rounded-[15px] overflow-hidden flex flex-col justify-between">
        <div>
          <img
            src={paper.image}
            alt={paper.title}
            className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
          />

          <div className="p-6">
            <span className={`text-xs uppercase tracking-widest ${paper.tagColor}`}>
              {paper.category}
            </span>

            <h2 className="text-xl font-semibold mt-2 mb-3">
              {paper.title}
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed">
              {paper.description}
            </p>
          </div>
        </div>

        <div className="p-6 pt-0 mt-auto flex items-center justify-between">
          <button 
            onClick={() => onOpenPdf(paper.pdfUrl, paper.title)}
            className={`text-sm ${paper.buttonColor} transition-colors cursor-pointer`}
          >
            Read Paper ↗
          </button>
        </div>
      </div>
    </div>
  );
};