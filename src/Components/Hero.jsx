import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

          <div className="flex-1 text-center lg:text-left">
            <p className="text-sky-400 text-lg font-medium mb-2">Hi, I'm</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
              Anupam Rijal
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 font-light mb-4">
              Full Stack Software Developer
            </p>
            <p className="text-slate-400 max-w-lg mx-auto lg:mx-0 text-base leading-relaxed">
              Building scalable web applications with React, Node.js, and MongoDB.
              Currently pursuing B.IT in Computer Engineering at Sanothimi Campus.
            </p>
                      
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-6">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-semibold rounded-full hover:scale-105 transition-transform shadow-lg shadow-sky-500/30"
              >
                Hire Me
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-sky-400 text-sky-400 font-semibold rounded-full hover:bg-sky-400 hover:text-white transition-all"
              >
                View Projects
              </a>
            </div>

       
            <div className="flex gap-4 justify-center lg:justify-start mt-6">
              <a href="https://www.facebook.com/anupam.rijal.10" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center text-sky-400 hover:bg-sky-400 hover:text-white transition-all">
                <FaFacebook size={18} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center text-sky-400 hover:bg-sky-400 hover:text-white transition-all">
                <FaGithub size={18} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center text-sky-400 hover:bg-sky-400 hover:text-white transition-all">
                <FaLinkedin size={18} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center text-sky-400 hover:bg-sky-400 hover:text-white transition-all">
                <FaTwitter size={18} />
              </a>
            </div>
          </div>

  
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative group">
         
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full opacity-70 group-hover:opacity-100 blur-sm transition-opacity duration-500 animate-pulse"></div>
              
           
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-sky-400/50 glow-image">
                <img
                  src="mypic.jpg"
                  alt="Anupam Rijal"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://ui-avatars.com/api/?name=Anupam+Rijal&size=300&background=0f172a&color=38bdf8&bold=true&font-size=0.5';
                  }}
                />
              </div>

            
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-full h-[1px] bg-gradient-to-r from-sky-400/20 to-transparent"
                    style={{
                      transform: `rotate(${i * 45}deg)`,
                      transformOrigin: 'center',
                      width: '140%',
                    }}
                  />
                ))}
              </div>

              <div className="absolute -top-2 -right-2 bg-slate-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-sky-400 border border-sky-400/30 animate-bounce">
                🚀 React
              </div>
              <div className="absolute -bottom-2 -left-2 bg-slate-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-indigo-400 border border-indigo-400/30 animate-bounce delay-100">
                💻 Full Stack
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;