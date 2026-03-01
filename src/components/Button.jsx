import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, type = 'primary', className = '', ...props }) => {
  const baseStyles = "px-10 py-4 rounded-sm font-hero tracking-[0.2em] uppercase transition-all duration-300 relative overflow-hidden group border-4";
  
  const variants = {
    primary: "bg-marvel-red text-white border-white hover:bg-white hover:text-marvel-red shadow-[0_0_15px_rgba(226,54,54,0.8)]",
    secondary: "bg-marvel-gold text-black border-black hover:bg-black hover:text-marvel-gold shadow-[0_0_15px_rgba(253,184,19,0.8)]",
    outline: "bg-transparent border-marvel-blue text-marvel-blue hover:bg-marvel-blue hover:text-white shadow-[0_0_15px_rgba(0,210,255,0.8)]",
    danger: "bg-transparent border-marvel-red text-marvel-red hover:bg-marvel-red hover:text-white"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1, rotate: 1 }}
      whileTap={{ scale: 0.9 }}
      className={`${baseStyles} ${variants[type]} ${className}`}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-3 font-black italic">
        {children}
      </span>
      
      {/* HUD Scanline effect on hover */}
      <motion.div 
        className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500"
      />
    </motion.button>
  );
};

export default Button;
