import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      role: 'Financial Data Entry Specialist',
      company: 'Finance Department (Remote)',
      duration: '2021 - 2023 (1.5 Years)',
      responsibilities: [
        'Managed and processed large-scale financial data with 99% accuracy',
        'Ensured data integrity and consistency across multiple databases',
        'Collaborated with cross-functional teams to streamline data workflows',
        'Developed automation scripts to reduce manual data entry time by 30%',
      ],
    },
  ];

  return (
    <section id="experience" className="bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold gradient-text inline-block mb-10">Experience</h2>
        
        {experiences.map((exp, index) => (
          <div key={index} className="glass rounded-2xl p-6 sm:p-8 hover:border-sky-400/30 transition-all">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sky-400/10 flex items-center justify-center flex-shrink-0">
                  <FaBriefcase className="text-sky-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">{exp.role}</h3>
                  <p className="text-slate-400">{exp.company}</p>
                </div>
              </div>
              <span className="px-4 py-1.5 rounded-full border border-sky-400 text-sky-400 text-sm font-medium whitespace-nowrap">
                {exp.duration}
              </span>
            </div>
            
            <ul className="space-y-3 pl-4 sm:pl-16">
              {exp.responsibilities.map((item, i) => (
                <li key={i} className="text-slate-300 text-sm sm:text-base flex items-start gap-3">
                  <span className="text-sky-400 mt-1.5">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;