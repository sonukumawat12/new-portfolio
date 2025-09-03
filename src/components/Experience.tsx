import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Briefcase, MapPin, TrendingUp, Building2, Clock, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
  icon: string;
}

// New modern animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    rotateX: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
      duration: 0.6,
    },
  },
};

const headerVariants = {
  hidden: { 
    opacity: 0, 
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 20,
      duration: 0.8,
    },
  },
};


const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => {
  return (
    <motion.div 
      variants={cardVariants}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="group relative"
    >
      {/* Main Card */}
      <div className="relative bg-gradient-to-br from-white/8 to-white/2 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500 to-transparent rounded-full blur-2xl"></div>
        </div>
        
        {/* Header Section */}
        <div className="relative z-10 mb-6">
          {/* Company Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/15 to-purple-500/15 border border-blue-400/20 rounded-full mb-4">
            <Building2 size={14} className="text-blue-400" />
            <span className="text-blue-400 font-medium text-sm tracking-wide">
              {experience.company}
            </span>
          </div>
          
          {/* Role Title */}
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
            {experience.title}
          </h3>
          
          {/* Duration */}
          <div className="flex items-center gap-2 text-gray-400">
            <Clock size={16} className="text-purple-400" />
            <span className="font-medium">{experience.duration}</span>
          </div>
        </div>
        
        {/* Description */}
        <div className="relative z-10 mb-6">
          <p className="text-gray-300 leading-relaxed text-base">
            {experience.description}
          </p>
        </div>
        
        {/* Icon Badge */}
        <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <span className="text-2xl">{experience.icon}</span>
        </div>
        
        {/* Achievement Indicator */}
        <div className="absolute bottom-6 right-6 flex items-center gap-1 text-yellow-400">
          <Award size={14} />
          <span className="text-xs font-medium">Achievement</span>
        </div>
        
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      {/* Connection Line */}
      {index < portfolioData.experience.length - 1 && (
        <div className="flex justify-center mt-8">
          <div className="w-px h-16 bg-gradient-to-b from-blue-500/50 to-purple-500/50"></div>
        </div>
      )}
    </motion.div>
  );
};

const Experience = () => {
  const { experience } = portfolioData;
  const { ref, controls } = useScrollAnimation();
  const { scrollYProgress } = useScroll();
  
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"
      ></motion.div>
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"
      ></motion.div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Modern Header */}
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={headerVariants}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-full mb-8 backdrop-blur-sm"
          >
            <TrendingUp size={18} className="text-blue-400" />
            <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase">Professional Journey</span>
          </motion.div>
          
          <motion.h2 
            variants={headerVariants}
            style={{ y: titleY }}
            className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Career{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative">
              Evolution
            </span>
          </motion.h2>
          
          <motion.p 
            variants={headerVariants}
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            From passionate learner to skilled developer - discover the milestones that shaped my expertise
          </motion.p>
        </motion.div>

        {/* Experience Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-8"
        >
          {experience.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </motion.div>
        
        {/* Bottom CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16 pt-8 border-t border-white/5"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-full mb-4">
            <MapPin size={16} className="text-purple-400" />
            <span className="text-purple-400 font-medium text-sm">Jaipur, India</span>
          </div>
          <p className="text-gray-400 text-base max-w-md mx-auto">
            Ready to bring innovation and expertise to your next project
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;