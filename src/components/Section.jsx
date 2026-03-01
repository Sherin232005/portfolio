import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, children, className = '', title = '' }) => {
  return (
    <section id={id} className={`py-32 px-6 md:px-12 max-w-7xl mx-auto min-h-screen flex flex-col justify-center relative ${className}`}>
      {/* Thunder Strike Glow (Thor) */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 0.2, 0] }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute inset-0 bg-marvel-blue/20 pointer-events-none"
      />

      {title && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="mb-20 relative"
        >
          <div className="bg-marvel-red inline-block px-8 py-3 skew-x-[-15deg] border-4 border-white shadow-[10px_10px_0_#FDB813] relative overflow-hidden group">
            {/* Iron Man HUD Scanline */}
            <motion.div 
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-white/10"
            />
            <h2 className="text-4xl md:text-6xl font-hero text-white uppercase tracking-tighter skew-x-[15deg] italic relative z-10">
              {title}
            </h2>
          </div>
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
