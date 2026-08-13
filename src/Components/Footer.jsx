import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 border-t border-slate-700/50 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} <span className="text-white font-semibold">Anupam Rijal</span>. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs">
            Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;