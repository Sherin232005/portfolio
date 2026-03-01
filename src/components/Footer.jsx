import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-zinc-900 bg-marvel-dark">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-marvel-silver font-hero tracking-widest uppercase text-sm">
          Designed & Built by <span className="text-marvel-red italic">Sherinsweety S</span>
        </p>
        <p className="text-zinc-600 text-xs mt-4 uppercase tracking-tighter">
          © 2026 Avengers Protocol. All Rights Reserved.
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-marvel-red animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-marvel-gold animate-pulse delay-75"></div>
          <div className="w-2 h-2 rounded-full bg-marvel-blue animate-pulse delay-150"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
