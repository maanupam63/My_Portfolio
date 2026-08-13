import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold gradient-text inline-block mb-10">Contact Me</h2>
        
        <div className="glass rounded-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Side - Info */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Let's Connect</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                I'm always open to new opportunities, collaborations, or just a friendly chat!
                Feel free to reach out anytime.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-sky-400/10 flex items-center justify-center">
                    <FaEnvelope className="text-sky-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase">Email</p>
                    <p className="text-white">anupamrjl2063@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-sky-400/10 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-sky-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase">Location</p>
                    <p className="text-white">Pauwadung-3, Bhojpur, Nepal</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-3 mt-6">
                <a
                  href="https://www.facebook.com/anupam.rijal.10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center text-sky-400 hover:bg-sky-400 hover:text-white transition-all"
                >
                  <FaFacebook size={18} />
                </a>
                <a
                  href="https://github.com/maanupam63"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center text-sky-400 hover:bg-sky-400 hover:text-white transition-all"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center text-sky-400 hover:bg-sky-400 hover:text-white transition-all"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center text-sky-400 hover:bg-sky-400 hover:text-white transition-all"
                >
                  <FaTwitter size={18} />
                </a>
              </div>
            </div>
            
            {/* Right Side - Contact Form */}
            <div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Message</label>
                  <textarea
                    rows="4"
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform shadow-lg shadow-sky-500/30"
                >
                  Send Message 🚀
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;