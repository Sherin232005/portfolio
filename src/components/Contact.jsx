import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Button from './Button';

const Contact = () => {
  return (
    <Section id="contact" title="Establish Comms">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-zinc-900 border-8 border-white p-12 shadow-[20px_20px_0_#00D2FF]"
        >
          <h3 className="text-5xl font-hero text-marvel-blue mb-12 uppercase tracking-tighter italic">Secure Interface</h3>
          <form className="space-y-10">
            <div className="space-y-4">
              <label className="block text-white text-2xl font-hero uppercase tracking-widest">Subject_Identity</label>
              <input 
                type="text" 
                className="w-full bg-black border-4 border-white p-4 text-white font-hero text-2xl focus:border-marvel-red focus:outline-none transition-all placeholder:text-zinc-800 uppercase italic"
                placeholder="TONY_STARK"
              />
            </div>
            <div className="space-y-4">
              <label className="block text-white text-2xl font-hero uppercase tracking-widest">Signal_Address</label>
              <input 
                type="email" 
                className="w-full bg-black border-4 border-white p-4 text-white font-hero text-2xl focus:border-marvel-red focus:outline-none transition-all placeholder:text-zinc-800 uppercase italic"
                placeholder="STARK_IND_INTEL"
              />
            </div>
            <div className="space-y-4">
              <label className="block text-white text-2xl font-hero uppercase tracking-widest">Intel_Transmission</label>
              <textarea 
                rows="4"
                className="w-full bg-black border-4 border-white p-4 text-white font-hero text-2xl focus:border-marvel-red focus:outline-none transition-all placeholder:text-zinc-800 uppercase italic resize-none"
                placeholder="MESSAGE_ENCRYPTED..."
              ></textarea>
            </div>
            <div className="pt-8">
              <Button type="primary" className="w-full text-4xl py-8">
                Transmit Signal
              </Button>
            </div>
          </form>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-between"
        >
          <div className="space-y-12 bg-marvel-red p-12 border-8 border-white shadow-[20px_20px_0_#FDB813]">
            <h3 className="text-5xl font-hero text-white mb-8 uppercase tracking-tighter italic">Social Nodes</h3>
            <p className="text-white text-2xl font-black leading-relaxed uppercase tracking-widest italic">
              Connect via encrypted nodes for global deployment and collaboration.
            </p>
            <div className="flex gap-10 flex-wrap">
              {[
                { icon: Github, link: '#' },
                { icon: Linkedin, link: '#' },
                { icon: Twitter, link: '#' },
                { icon: Mail, link: 'mailto:sherinsweety23@example.com' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  whileHover={{ scale: 1.5, rotate: 10 }}
                  className="bg-white text-black p-6 border-4 border-black hover:bg-marvel-gold transition-all"
                >
                  <social.icon size={48} strokeWidth={3} />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="mt-12 bg-marvel-blue p-10 border-8 border-white shadow-[-20px_20px_0_#E23636]">
            <p className="text-white font-hero text-lg uppercase tracking-widest font-black">Operational_Base</p>
            <p className="text-white font-hero text-5xl uppercase tracking-tighter italic">Coimbatore, India</p>
            <p className="text-black font-hero text-xl uppercase tracking-widest font-black mt-4 animate-bounce">Status: Mission_Ready</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
