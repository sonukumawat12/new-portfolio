import { useState } from 'react';
import { ExternalLink, Github, FolderOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  gallery?: Array<{
    id: number;
    title: string;
    description: string;
    image: string;
  }>;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => {
  return (
    <div
      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-purple-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center space-y-4">
            <p className="text-white font-semibold">Click to view details</p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.liveUrl, '_blank');
                }}
                className="p-3 bg-blue-600 rounded-full text-white hover:bg-blue-500 transition-colors duration-200"
              >
                <ExternalLink size={20} />
              </button>
              <button
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 hover:scale-110 transition-all duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.githubUrl, '_blank');
                }}
              >
                <Github size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 leading-relaxed text-sm">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-full text-blue-300 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl"></div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="py-20 relative overflow-hidden scroll-snap-align-start">
        {/* Enhanced background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-indigo-950/20 to-gray-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(99,102,241,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_60%,rgba(168,85,247,0.1),transparent_50%)]"></div>
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-400/20 rounded-full mb-8">
              <FolderOpen size={20} className="text-indigo-400" />
              <span className="text-indigo-400 font-medium tracking-wider">MY WORK</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              My{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative">
                Projects
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-30"></div>
              </span>
            </h2>
            
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Discover my latest creations where innovation meets functionality
            </p>
          </div>

          {/* Enhanced Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.id}>
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </div>
            ))}
          </div>
 
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default Projects;