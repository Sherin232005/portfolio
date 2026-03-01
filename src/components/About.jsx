import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Section id="about" title="Personnel Profile">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ rotate: -10, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-square w-full max-w-md mx-auto relative group">
            {/* Pulsing Arc Reactor Background */}
            <div className="absolute inset-0 bg-marvel-blue/20 rounded-full animate-pulse blur-3xl"></div>
            
            <div className="absolute inset-0 border-8 border-marvel-red skew-x-[-10deg] shadow-[10px_10px_0_#FDB813]">
              {/* Visual Placeholder */}
              <div className="w-full h-full flex items-center justify-center bg-zinc-900 border-4 border-white">
                 <span className="text-9xl font-hero text-marvel-red drop-shadow-[0_0_10px_rgba(226,54,54,0.5)] italic">S</span>
              </div>
            </div>
            
            {/* Nano-tech HUD corners */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-8 border-l-8 border-marvel-gold"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-8 border-r-8 border-marvel-blue"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div className="bg-marvel-blue/10 p-8 border-l-8 border-marvel-blue shadow-[0_0_15px_rgba(0,210,255,0.2)]">
            <h3 className="text-4xl font-hero text-marvel-blue mb-4 uppercase tracking-tighter italic">
              Aspiring Frontend Developer
            </h3>
            <p className="text-white text-2xl leading-relaxed font-bold uppercase">
              Hands-on experience in building <span className="text-marvel-red underline decoration-marvel-gold underline-offset-8">high-performance</span> web architecture.
            </p>
          </div>

          <p className="text-white text-xl leading-relaxed font-black uppercase tracking-wider">
            Completed a website development internship and built real-world projects focusing on clean UI, user experience, and dynamic content rendering. Ready to join the Avengers of development.
          </p>
          
          <div className="grid grid-cols-2 gap-6 pt-10 border-t-4 border-marvel-red/30">
             <div className="bg-marvel-gold/20 p-6 border-b-8 border-marvel-gold">
                <p className="text-marvel-gold font-hero text-sm uppercase tracking-widest font-black">Location</p>
                <p className="text-white font-hero text-3xl uppercase tracking-tighter">Coimbatore, India</p>
             </div>
             <div className="bg-marvel-red/20 p-6 border-b-8 border-marvel-red">
                <p className="text-marvel-red font-hero text-sm uppercase tracking-widest font-black">Status</p>
                <p className="text-white font-hero text-3xl uppercase tracking-tighter">Combat Ready</p>
             </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
