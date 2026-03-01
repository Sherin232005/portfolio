import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/60 backdrop-blur-xl border-b border-marvel-blue/20 py-1' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Iron Man HUD Name Element */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`flex-shrink-0 cursor-pointer relative group transition-transform duration-500 ${scrolled ? 'scale-90 origin-left' : 'scale-100'}`}
          >
            {/* HUD Background Glow */}
            <div className="absolute inset-0 bg-marvel-blue/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* HUD Frame Component */}
            <div className="relative flex items-center gap-4 px-4 py-2 border-l border-r border-marvel-blue/30 bg-black/20 backdrop-blur-md overflow-hidden">
               {/* Animated Scan Line */}
               <motion.div 
                 animate={{ x: ['-100%', '200%'] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 bg-gradient-to-r from-transparent via-marvel-blue/10 to-transparent w-1/2"
               />

               <div className="relative z-10 flex flex-col items-start">
                  <span className="text-[6px] font-mono text-marvel-blue/60 tracking-[0.3em] uppercase leading-none mb-1">Identity_Scan</span>
                  <h1 className="text-lg md:text-xl font-hud tracking-[0.2em] text-white flex items-baseline">
                    SHERIN<span className="text-marvel-blue font-black ml-1">SWEETY</span>
                  </h1>
                  <div className="flex items-center gap-1 mt-1">
                     <div className="w-1 h-1 bg-marvel-blue rounded-full animate-pulse"></div>
                     <span className="text-[5px] font-mono text-marvel-blue/40 tracking-widest uppercase">System_Online</span>
                  </div>
               </div>

               {/* Tech Details (Right side of HUD) */}
               <div className="hidden md:flex flex-col border-l border-marvel-blue/20 pl-3">
                  <div className="w-8 h-[1px] bg-marvel-blue/40 mb-1"></div>
                  <span className="text-[5px] font-mono text-white/20 uppercase">V_4.0_OS</span>
                  <div className="w-4 h-[1px] bg-marvel-blue/40 mt-1 self-end"></div>
               </div>

               {/* HUD Corner Accents */}
               <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-marvel-blue"></div>
               <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-marvel-blue"></div>
            </div>
          </motion.div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-white/60 hover:text-marvel-blue px-2 py-1 text-xs font-mono tracking-[0.3em] uppercase cursor-pointer transition-all relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-marvel-blue transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-marvel-blue p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-morphism overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-marvel-red block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
