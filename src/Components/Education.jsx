import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold gradient-text inline-block mb-10">Education</h2>
        
        <div className="glass rounded-2xl p-6 sm:p-8 hover:border-sky-400/30 transition-all">
          <div className="flex flex-wrap justify-between items-start gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-sky-400/10 flex items-center justify-center flex-shrink-0">
                <FaGraduationCap className="text-sky-400 text-xl" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white">BICTE in Bachelor Level</h3>
                <p className="text-slate-300">Sanothimi Campus, Bhaktapur</p>
                <p className="text-slate-400 text-sm">Tribhuvan University (TU)</p>
              </div>
            </div>
            <span className="px-4 py-1.5 rounded-full border border-sky-400 text-sky-400 text-sm font-medium whitespace-nowrap">
              2023 - 2026
            </span>
          </div>
          
          <ul className="space-y-2 mt-6 pl-4 sm:pl-16">
            <li className="text-slate-300 text-sm sm:text-base flex items-start gap-3">
              <span className="text-sky-400 mt-1.5">▸</span>
              Currently enrolled in 4rd year
            </li>
            <li className="text-slate-300 text-sm sm:text-base flex items-start gap-3">
              <span className="text-sky-400 mt-1.5">▸</span>
              Focus on Full Stack Web Development
            </li>
            <li className="text-slate-300 text-sm sm:text-base flex items-start gap-3">
              <span className="text-sky-400 mt-1.5">▸</span>
              Active participant in tech clubs and hackathons
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;