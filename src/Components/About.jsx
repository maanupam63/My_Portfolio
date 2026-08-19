import React from 'react';
import { FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold gradient-text inline-block mb-10">About Me</h2>
        
        <div className="glass rounded-2xl p-6 sm:p-10">
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p className="text-base sm:text-lg">
              I'm <strong className="text-white">Anupam Rijal</strong>, a passionate Full Stack Software Developer from 
              <strong className="text-sky-400"> Pauwadung-3, Bhojpur</strong>, currently based in Bhaktapur, Nepal.
            </p>
            <p className="text-base sm:text-lg">
              I am pursuing my <strong className="text-white">BICTE in Bachelor Level</strong> at 
              <strong className="text-sky-400"> Sanothimi Campus, Bhaktapur</strong> under TU University 
              (2023 - 2026). With a strong foundation in modern web technologies, 
              I specialize in building responsive, scalable, and user-friendly applications.
            </p>
            <p className="text-base sm:text-lg">
              I have <strong className="text-white">1.5 years of experience</strong> in financial data entry, 
              which taught me precision, attention to detail, and the importance of 
              data integrity in software development.
            </p>
          </div>

       
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50">
              <FaMapMarkerAlt className="text-sky-400 text-lg" />
              <div>
                <p className="text-xs text-slate-500 uppercase">Location</p>
                <p className="text-white text-sm">Pauwadung-3, Bhojpur, Nepal</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50">
              <FaGraduationCap className="text-sky-400 text-lg" />
              <div>
                <p className="text-xs text-slate-500 uppercase">Education</p>
                <p className="text-white text-sm">BICTE, Sanothimi Campus</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50">
              <FaBriefcase className="text-sky-400 text-lg" />
              <div>
                <p className="text-xs text-slate-500 uppercase">Experience</p>
                <p className="text-white text-sm">1.5 Years (Financial Data Entry)</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50">
              <FaEnvelope className="text-sky-400 text-lg" />
              <div>
                <p className="text-xs text-slate-500 uppercase">Email</p>
                <p className="text-white text-sm">anupamrjl2063@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;