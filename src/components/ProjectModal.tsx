import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Github, ChevronLeft, ChevronRight, Grid3X3 } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  gallery?: GalleryItem[];
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryMode, setIsGalleryMode] = useState(false);

  // Reset image index and gallery mode when project changes or closes
  useEffect(() => {
    setCurrentImageIndex(0);
    setIsGalleryMode(false);
  }, [project?.id]);

  if (!project) return null;

  const gallery = project.gallery || [];
  const currentImage = gallery[currentImageIndex];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div
        className="bg-gradient-to-br from-gray-900 to-gray-800 border border-white/20 rounded-xl sm:rounded-2xl max-w-6xl w-full max-h-[98vh] sm:max-h-[95vh] overflow-hidden animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-6 border-b border-white/10">
          <div className="flex-1 min-w-0 pr-2">
            <h3 className="text-lg sm:text-2xl font-bold text-white truncate">{project.title}</h3>
            <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 sm:line-clamp-1">{project.description}</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {gallery.length > 0 && (
              <button
                onClick={() => setIsGalleryMode(!isGalleryMode)}
                className="p-1.5 sm:p-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-lg text-blue-300 hover:text-white hover:scale-105 active:scale-95 transition-all duration-200"
                title={isGalleryMode ? "Exit Gallery" : "View Gallery"}
              >
                <Grid3X3 size={16} className="sm:w-5 sm:h-5" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 bg-gray-800/50 backdrop-blur-sm rounded-lg text-white hover:bg-gray-700 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <X size={16} className="sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row h-[calc(98vh-80px)] sm:h-[calc(95vh-120px)]">
          {/* Main Content */}
          <div className="flex-1 flex flex-col min-h-0">
            {/* Image Section */}
            <div className="flex-1 relative overflow-hidden min-h-[200px] sm:min-h-[300px]">
              {isGalleryMode && gallery.length > 0 ? (
                <div className="h-full relative">
                  {/* Main Image */}
                  <div className="h-full relative">
                    <img
                      src={currentImage.image}
                      alt={currentImage.title}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Image Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 text-white">
                      <h4 className="text-base sm:text-xl font-bold mb-1 sm:mb-2">{currentImage.title}</h4>
                      <p className="text-gray-200 text-sm sm:text-base line-clamp-2">{currentImage.description}</p>
                    </div>

                    {/* Navigation Arrows */}
                    {gallery.length > 1 && (
                      <>
                        <div className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10">
                          <button
                            onClick={prevImage}
                            className="p-2 sm:p-3 bg-black/60 backdrop-blur-sm rounded-full text-white hover:bg-black/80 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg"
                          >
                            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
                          </button>
                        </div>
                        <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10">
                          <button
                            onClick={nextImage}
                            className="p-2 sm:p-3 bg-black/60 backdrop-blur-sm rounded-full text-white hover:bg-black/80 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg"
                          >
                            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
                          </button>
                        </div>
                      </>
                    )}

                    {/* Image Counter */}
                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4 px-2 sm:px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm">
                      {currentImageIndex + 1} / {gallery.length}
                    </div>
                  </div>

                  {/* Thumbnail Navigation */}
                  {/* moved below image */}
                </div>
              ) : (
                <div className="h-full relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
              )}
            </div>

            {/* Thumbnail Navigation (static below image) */}
            {gallery.length > 0 && (
              <div className="px-2 sm:px-4 py-2 sm:py-3 border-t border-white/10">
                <div className="flex gap-1 sm:gap-2 justify-center max-w-full overflow-hidden">
                  <div className="flex gap-1 sm:gap-2 overflow-x-auto scrollbar-hide px-1 sm:px-2 py-1">
                    {gallery.map((item, index) => (
                      <button
                        key={item.id}
                        onClick={() => { setIsGalleryMode(true); goToImage(index); }}
                        className={`flex-shrink-0 w-12 h-9 sm:w-16 sm:h-12 rounded-md sm:rounded-lg overflow-hidden border-2 hover:scale-105 active:scale-95 transition-all duration-200 ${
                          index === currentImageIndex
                            ? 'border-blue-400 scale-110'
                            : 'border-white/30 hover:border-white/60'
                        }`}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
 
            {/* Project Details */}
            <div className="p-3 sm:p-6 border-t border-white/10 max-h-[40vh] lg:max-h-none overflow-y-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {/* Description */}
                <div className="space-y-3">
                  <h4 className="text-base sm:text-lg font-semibold text-white">Project Overview</h4>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {project.longDescription}
                  </p>
                </div>

                {/* Tech Stack & Links */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-full text-blue-300 text-xs sm:text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Company Project Notice */}
                  {project.githubUrl === "#" && (
                    <div className="mb-4 p-3 sm:p-4 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-400/30 rounded-lg">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="text-amber-400 mt-0.5">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h5 className="text-amber-300 font-medium text-sm sm:text-base mb-1">Company Project</h5>
                          <p className="text-amber-200/80 text-xs sm:text-sm leading-relaxed">
                            This project was developed during my employment at a company. Due to confidentiality agreements and company policies, I don't have access to the source code or live system for demonstration purposes. The images and details shown are representative of the project's functionality.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    {project.liveUrl !== "#" ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:from-blue-500 hover:to-purple-500 hover:scale-105 active:scale-95 transition-all duration-300 text-sm sm:text-base"
                      >
                        <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                        Live Demo
                      </a>
                    ) : (
                      <div className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-gray-600/50 rounded-lg text-gray-400 text-sm sm:text-base cursor-not-allowed">
                        <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                        Live Demo (Not Available)
                      </div>
                    )}
                    
                    {project.githubUrl !== "#" ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 border-2 border-gray-600 rounded-lg text-gray-300 hover:border-gray-500 hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 text-sm sm:text-base"
                      >
                        <Github size={14} className="sm:w-4 sm:h-4" />
                        Source Code
                      </a>
                    ) : (
                      <div className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 border-2 border-gray-600/50 rounded-lg text-gray-500 text-sm sm:text-base cursor-not-allowed">
                        <Github size={14} className="sm:w-4 sm:h-4" />
                        Source Code (Confidential)
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Sidebar (hidden on mobile, shown on large screens when not in gallery mode) */}
          {!isGalleryMode && gallery.length > 0 && (
            <div className="hidden lg:block w-80 border-l border-white/10 bg-gray-900/50 overflow-x-hidden">
              <div className="p-4">
                <h4 className="text-lg font-semibold text-white mb-4">Project Gallery</h4>
                <div className="space-y-3 max-h-[calc(95vh-200px)] overflow-y-auto overflow-x-hidden">
                  {gallery.map((item, index) => (
                    <div
                      key={item.id}
                      className="bg-gray-800/50 rounded-lg overflow-hidden cursor-pointer border border-white/10 hover:scale-101 hover:ring-2 hover:ring-blue-400/40 transition-all duration-200 transform-gpu will-change-transform"
                      onClick={() => {
                        setIsGalleryMode(true);
                        setCurrentImageIndex(index);
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-24 object-cover"
                      />
                      <div className="p-3">
                        <h5 className="text-white font-medium text-sm mb-1">{item.title}</h5>
                        <p className="text-gray-400 text-xs line-clamp-2">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;