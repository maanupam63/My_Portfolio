import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Financial Data Dashboard',
      description: 'A real-time dashboard for tracking financial data with interactive charts and reports. Built with modern web technologies.',
      tech: ['React', 'Express', 'MongoDB', 'Chart.js'],
      link: '#',
    },
    {
      title: 'E-Commerce API',
      description: 'RESTful API for an e-commerce platform with user authentication, product management, and order processing.',
      tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      link: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'This personal portfolio built with React showcasing skills, experience, and projects with animated spider web background.',
      tech: ['React', 'Tailwind CSS', 'JavaScript'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold gradient-text inline-block mb-10">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:border-sky-400/50 group"
            >
       
              <div className="text-4xl font-bold text-sky-400/20 mb-2">
                {(index + 1).toString().padStart(2, '0')}
              </div>
              
       
              <h3 className="text-xl font-semibold text-white mb-3">
                {project.title}
              </h3>
              
          
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              
             
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-sky-400/10 text-sky-400 border border-sky-400/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            
            
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sky-400 hover:text-white transition-colors text-sm font-medium group-hover:gap-3 transition-all"
              >
                View Project
                <FaExternalLinkAlt size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;