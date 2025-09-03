import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 border border-white/20 rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div>
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.description}</p>
            </div>
            <div className="flex items-center gap-3">
              {gallery.length > 0 && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsGalleryMode(!isGalleryMode)}
                  className="p-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-lg text-blue-300 hover:text-white transition-colors duration-200"
                  title={isGalleryMode ? "Exit Gallery" : "View Gallery"}
                >
                  <Grid3X3 size={20} />
                </motion.button>
              )}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="p-2 bg-gray-800/50 backdrop-blur-sm rounded-lg text-white hover:bg-gray-700 transition-colors duration-200"
              >
                <X size={20} />
              </motion.button>
            </div>
          </div>

          {/* Content */}
          <div className="flex h-[calc(95vh-120px)]">
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
              {/* Image Section */}
              <div className="flex-1 relative overflow-hidden">
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
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h4 className="text-xl font-bold mb-2">{currentImage.title}</h4>
                        <p className="text-gray-200">{currentImage.description}</p>
                      </div>

                                             {/* Navigation Arrows */}
                       {gallery.length > 1 && (
                         <>
                           <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                             <motion.button
                               whileHover={{ scale: 1.05 }}
                               whileTap={{ scale: 0.95 }}
                               onClick={prevImage}
                               className="p-3 bg-black/60 backdrop-blur-sm rounded-full text-white hover:bg-black/80 transition-all duration-200 shadow-lg"
                             >
                               <ChevronLeft size={24} />
                             </motion.button>
                           </div>
                           <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
                             <motion.button
                               whileHover={{ scale: 1.05 }}
                               whileTap={{ scale: 0.95 }}
                               onClick={nextImage}
                               className="p-3 bg-black/60 backdrop-blur-sm rounded-full text-white hover:bg-black/80 transition-all duration-200 shadow-lg"
                             >
                               <ChevronRight size={24} />
                             </motion.button>
                           </div>
                         </>
                       )}

                      {/* Image Counter */}
                      <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm">
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
                <div className="px-4 py-3 border-t border-white/10">
                  <div className="flex gap-2 justify-center max-w-full overflow-hidden">
                    <div className="flex gap-2 overflow-x-auto scrollbar-hide px-2 py-1">
                      {gallery.map((item, index) => (
                        <motion.button
                          key={item.id}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => { setIsGalleryMode(true); goToImage(index); }}
                          className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
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
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
 
              {/* Project Details */}
              <div className="p-6 border-t border-white/10">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Description */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Project Overview</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>

                  {/* Tech Stack & Links */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </motion.a>
                      
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border-2 border-gray-600 rounded-lg text-gray-300 hover:border-gray-500 hover:text-white transition-all duration-300"
                      >
                        <Github size={16} />
                        Source Code
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery Sidebar (when not in gallery mode) */}
            {!isGalleryMode && gallery.length > 0 && (
              <div className="w-80 border-l border-white/10 bg-gray-900/50 overflow-x-hidden">
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-white mb-4">Project Gallery</h4>
                  <div className="space-y-3 max-h-[calc(95vh-200px)] overflow-y-auto overflow-x-hidden">
                    {gallery.map((item, index) => (
                      <motion.div
                        key={item.id}
                        whileHover={{ scale: 1.01 }}
                        className="bg-gray-800/50 rounded-lg overflow-hidden cursor-pointer border border-white/10 transition-all duration-200 transform-gpu will-change-transform hover:ring-2 hover:ring-blue-400/40"
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
                          <p className="text-gray-400 text-xs">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;