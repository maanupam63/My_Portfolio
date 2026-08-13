import React from 'react';
import { 
  SiReact, SiJavascript, SiPython, SiTailwindcss, 
  SiExpress, SiMongodb, SiNodedotjs, SiGit 
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'React.js', icon: <SiReact />, color: '#61dafb' },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e' },
    { name: 'Python', icon: <SiPython />, color: '#3776ab' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06b6d4' },
    { name: 'Express.js', icon: <SiExpress />, color: '#ffffff' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
    { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
    { name: 'Git', icon: <SiGit />, color: '#f05032' },
  ];

  return (
    <section id="skills" className="bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold gradient-text inline-block mb-10">My Skills</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="glass rounded-xl p-5 sm:p-6 text-center hover:scale-105 transition-transform duration-300 cursor-default group"
            >
              <div className="text-4xl sm:text-5xl mb-3 group-hover:animate-bounce" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <p className="text-slate-300 font-medium text-sm sm:text-base">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;