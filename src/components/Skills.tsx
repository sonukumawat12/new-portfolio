import { Database, Server, Wrench, Monitor, Layers, Bot } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <div className="group bg-gradient-to-r from-slate-800/50 to-slate-700/30 border border-slate-600/30 rounded-xl p-4 hover:from-slate-700/60 hover:to-slate-600/40 hover:border-slate-500/50 transition-all duration-300 hover:scale-102 hover:shadow-lg will-change-transform">
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="text-3xl group-hover:scale-105 transition-transform duration-200 will-change-transform">{skill.icon}</div>
        <h4 className="text-white text-sm font-semibold tracking-wide">{skill.name}</h4>
        <div className="w-full bg-slate-600/40 rounded-full h-1 overflow-hidden">
          <div
            style={{ width: `${skill.level}%` }}
            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-500 ease-out will-change-auto`}
          ></div>
        </div>
      </div>
    </div>
  );
};

const CategorySection = ({ title, skills, icon: Icon, color }: {
  title: string;
  skills: Skill[];
  icon: any;
  color: string;
}) => {
  return (
    <div className="space-y-6">
      {/* Enhanced Category Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className={`p-3 rounded-2xl bg-gradient-to-r ${color} shadow-lg will-change-transform`}>
          <Icon size={24} className="text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <div className={`w-16 h-0.5 bg-gradient-to-r ${color} rounded-full mt-1`}></div>
        </div>
      </div>
      
      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const { skills } = portfolioData;

  const categories = [
    {
      title: "Frontend",
      skills: skills.frontend,
      icon: Monitor,
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Backend", 
      skills: skills.backend,
      icon: Server,
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Database",
      skills: skills.database,
      icon: Database,
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Tools",
      skills: skills.tools,
      icon: Wrench,
      color: "from-orange-400 to-red-500"
    },
    {
      title: "AI",
      skills: skills.ai,
      icon: Bot,
      color: "from-green-400 to-teal-500"
    }
  ];

  return (
    <section id="skills" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 to-gray-900"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-full mb-6 backdrop-blur-sm">
            <Layers size={20} className="text-blue-400" />
            <span className="text-blue-400 font-semibold tracking-wider">TECH STACK</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            My{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Technology
            </span>{' '}
            Arsenal
          </h2>
          
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Exploring and mastering cutting-edge technologies to build exceptional digital experiences
          </p>
        </div>

        {/* Enhanced Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {categories.map((category) => (
            <CategorySection
              key={category.title}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              color={category.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;