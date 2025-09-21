import { useState, memo, useCallback, useMemo, Suspense, lazy } from 'react';
import { ExternalLink, Github, FolderOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import OptimizedImage from './OptimizedImage';
import { useScrollAnimation } from '../hooks/useIntersectionObserver';

// Lazy load the heavy ProjectModal component
const ProjectModal = lazy(() => import('./ProjectModal'));

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

const ProjectCard = memo(({ project, onClick, index }: { project: Project; onClick: () => void; index: number }) => {
  const { elementRef } = useScrollAnimation();
  
  const handleLiveClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(project.liveUrl, '_blank');
  }, [project.liveUrl]);

  const handleGithubClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(project.githubUrl, '_blank');
  }, [project.githubUrl]);
  
  return (
    <div
      ref={elementRef}
      className={`group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden cursor-pointer hover-lift fade-in-on-scroll stagger-${Math.min(index + 1, 4)}`}
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <OptimizedImage
          src={project.image}
          alt={project.title}
          className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          width={600}
          height={256}
          priority={false}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-purple-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center space-y-3 sm:space-y-4 px-4">
            <p className="text-white font-semibold text-sm sm:text-base">Click to view details</p>
            <div className="flex gap-3 sm:gap-4 justify-center">
              <button
                onClick={handleLiveClick}
                className="p-2 sm:p-3 bg-blue-600 rounded-full text-white hover:bg-blue-500 transition-all duration-200 hover:scale-110"
              >
                <ExternalLink size={16} className="sm:w-5 sm:h-5" />
              </button>
              <button
                className="p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 hover:scale-105 transition-all duration-200"
                onClick={handleGithubClick}
              >
                <Github size={16} className="sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{project.description}</p>
        
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.tech.map((tech: string) => (
            <span
              key={tech}
              className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-full text-blue-300 text-xs sm:text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

const Projects = memo(() => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectSelect = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const memoizedProjects = useMemo(() => projects, [projects]);

  return (
    <>
      <section id="projects" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        {/* Simplified background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-indigo-950/10 to-gray-950"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-400/20 rounded-full mb-6 sm:mb-8">
              <FolderOpen size={16} className="text-indigo-400 sm:w-5 sm:h-5" />
              <span className="text-indigo-400 font-medium tracking-wider text-sm sm:text-base">MY WORK</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
              My{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative">
                Projects
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-30"></div>
              </span>
            </h2>
            
            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-4">
              Discover my latest creations where innovation meets functionality
            </p>
          </div>

          {/* Optimized Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {memoizedProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => handleProjectSelect(project)}
              />
            ))}
          </div>
 
        </div>
      </section>

      {selectedProject && (
        <Suspense fallback={
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
            <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          <ProjectModal
            project={selectedProject}
            onClose={handleCloseModal}
          />
        </Suspense>
      )}
    </>
  );
});

Projects.displayName = 'Projects';

export default Projects;