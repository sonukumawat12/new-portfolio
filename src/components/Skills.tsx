import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Cpu, Palette } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

const SkillCard = ({ skill }: { skill: Skill; index: number }) => {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
      }}
      className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group hover:border-blue-400/50 transition-all duration-500 cursor-pointer relative hover:-translate-y-2"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {skill.icon}
        </div>
        <h3 className="text-white font-bold text-xl group-hover:text-blue-400 transition-colors duration-300">
          {skill.name}
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </motion.div>
  );
};

const Skills = () => {
  const { skills } = portfolioData;
  const { ref, controls } = useScrollAnimation();
  const { scrollYProgress } = useScroll();
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-violet-950/20 to-gray-950"></div>
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.1),transparent_50%)]"
      ></motion.div>
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -30]) }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.1),transparent_50%)]"
      ></motion.div>
      
      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-32 left-20 text-blue-500/20 text-6xl"
        >
          ⚛️
        </motion.div>
        <motion.div
          animate={{ 
            rotate: [360, 0],
            x: [0, -15, 0],
            y: [0, 15, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-32 right-20 text-purple-500/20 text-5xl"
        >
          ⚡
        </motion.div>
      </div>
      
      <motion.div 
        style={{ y }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Enhanced Header */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-violet-500/10 to-blue-500/10 border border-violet-400/20 rounded-full mb-8"
          >
            <Code2 size={20} className="text-violet-400" />
            <span className="text-violet-400 font-medium tracking-wider">TECH STACK</span>
          </motion.div>
          
          <motion.h2
            variants={fadeInUp}
            className="text-5xl lg:text-7xl font-bold text-white mb-8"
          >
            Technical{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative">
              Skills
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-30"></div>
            </span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Mastering cutting-edge technologies to build exceptional digital experiences
          </motion.p>
        </motion.div>

        {/* Enhanced Skills Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={fadeInUp}
              transition={{ delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.08,
                y: -8,
                rotateY: 5,
              }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-6 group hover:border-violet-400/30 transition-all duration-500 cursor-pointer relative transform-gpu will-change-transform"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-blue-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="text-5xl mb-2 group-hover:scale-125 transition-transform duration-500 filter group-hover:drop-shadow-lg">
                  {skill.icon}
                </div>
                <h3 className="text-white font-bold text-lg group-hover:text-violet-300 transition-colors duration-300">
                  {skill.name}
                </h3>
                
                {/* Skill level indicator */}
                <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  ></motion.div>
                </div>
                <span className="text-xs text-gray-400 font-medium">{skill.level}%</span>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-violet-500/20 to-blue-500/20 rounded-full blur-sm"></div>
            </motion.div>
          ))}
        </motion.div>
        
      
      </motion.div>
    </section>
  );
};

export default Skills;