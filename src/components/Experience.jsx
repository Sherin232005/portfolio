import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <Section id="experience" title="Operational History">
      <div className="max-w-5xl mx-auto space-y-32">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group bg-zinc-900 border-8 border-white shadow-[20px_20px_0_#E23636] p-12"
        >
          {/* Subdued HUD decorative elements */}
          <div className="absolute top-0 right-0 p-4 font-hero text-xl text-marvel-blue italic animate-pulse">DATA_SYNC_ACTIVE</div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-start border-b-8 border-marvel-gold pb-12 gap-8">
              <div className="bg-marvel-red p-6 skew-x-[-15deg]">
                <p className="text-white font-hero text-lg tracking-widest uppercase mb-2 skew-x-[15deg] font-black">PHASE_01 // INTERNSHIP</p>
                <h3 className="text-5xl md:text-7xl font-hero text-white uppercase tracking-tighter skew-x-[15deg] italic leading-none">Website Development Intern</h3>
              </div>
              <div className="text-right">
                 <p className="text-marvel-gold font-hero text-xl uppercase tracking-tighter font-black italic underline decoration-white decoration-4 underline-offset-8">Status: Combat Ready</p>
                 <p className="text-white font-hero text-2xl mt-4 tracking-widest">DEPLOYED_REMOTE // 2024</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white text-2xl font-black uppercase tracking-widest italic">
              <div className="bg-white text-black p-8 border-l-8 border-marvel-blue">
                <p>Developed high-performance responsive webpages using modern web protocols.</p>
              </div>
              <div className="bg-marvel-blue/20 p-8 border-l-8 border-white">
                <p>Architected interactive UI systems focused on elite user engagement.</p>
              </div>
              <div className="bg-marvel-red/20 p-8 border-l-8 border-marvel-gold">
                <p>Optimized global components for maximum cross-device operational capacity.</p>
              </div>
              <div className="bg-zinc-800 p-8 border-l-8 border-marvel-red">
                <p>Collaborated on multi-stage digital deployments within strict deadlines.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Experience;
