import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const Hero = () => {
  return (
    <Section id="home" className="relative overflow-hidden pt-32">
      {/* Thor's Lightning Flash */}
      <motion.div 
        animate={{ opacity: [0, 0.4, 0, 0.2, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 5 }}
        className="absolute inset-0 bg-marvel-blue/30 pointer-events-none z-0"
      />

      {/* Iron Man HUD Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border-l-4 border-t-4 border-marvel-red animate-pulse"></div>
        <div className="absolute top-10 right-10 w-32 h-32 border-r-4 border-t-4 border-marvel-gold animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 border-l-4 border-b-4 border-marvel-blue animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border-r-4 border-b-4 border-marvel-red animate-pulse"></div>
        <div className="hud-line opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Iron Man Nano Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           {Array.from({ length: 15 }).map((_, i) => (
             <motion.div
               key={i}
               initial={{ x: -100, y: Math.random() * 1000, opacity: 0 }}
               animate={{ x: 2000, y: Math.random() * 1000 - 500, opacity: [0, 1, 0] }}
               transition={{ duration: Math.random() * 2 + 1, repeat: Infinity, delay: Math.random() * 5 }}
               className="absolute w-1 h-1 bg-marvel-red shadow-[0_0_15px_#E23636]"
             />
           ))}
        </div>

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "backOut" }}
          className="mb-8"
        >
          <div className="bg-marvel-red px-10 py-3 inline-block skew-x-[-20deg] border-4 border-white shadow-[0_0_20px_#E23636] relative overflow-hidden group">
            <motion.div 
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            />
            <h3 className="text-white font-hero text-3xl tracking-widest uppercase skew-x-[20deg] relative z-10">
              Mission Protocol: Activated
            </h3>
          </div>
        </motion.div>

        <motion.div
           initial={{ y: 50, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="text-7xl md:text-[10rem] font-hero tracking-tighter italic uppercase leading-none mb-6 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] text-white">
            SHERIN<span className="text-marvel-gold">SWEETY S</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col items-center"
        >
          <p className="text-3xl md:text-4xl text-white font-bold tracking-wide mb-12 max-w-2xl uppercase">
            Frontend Developer | <span className="text-marvel-blue drop-shadow-[0_0_15px_#00D2FF]">UI Architect</span>
          </p>
          
          <div className="flex gap-8 flex-wrap justify-center">
            <Button type="primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Initiate Contact
            </Button>
            <Button type="secondary" onClick={() => window.open('#', '_blank')}>
              Download Dossier
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

import Section from './Section';
export default Hero;
