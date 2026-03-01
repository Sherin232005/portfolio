import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML5', level: '90%', category: 'Frontend' },
  { name: 'CSS3', level: '85%', category: 'Frontend' },
  { name: 'JavaScript (ES6)', level: '80%', category: 'Languages' },
  { name: 'React.js', level: '60%', category: 'Frameworks' },
  { name: 'Python', level: '50%', category: 'Languages' },
  { name: 'Responsive Design', level: '90%', category: 'Tools' },
];

const Skills = () => {
  return (
    <Section id="skills" title="Technical Arsenal">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
            className="group glass-morphism p-10 relative overflow-hidden bg-zinc-900 border-4 border-marvel-red hover:border-marvel-gold transition-all duration-300 shadow-[5px_5px_0_white]"
          >
            <div className="flex justify-between items-end mb-6">
               <div>
                  <p className="text-xl text-marvel-blue font-hero uppercase tracking-widest mb-1">{skill.category}</p>
                  <h4 className="text-4xl font-hero text-white uppercase tracking-tighter italic">{skill.name}</h4>
               </div>
            </div>

            <div className="w-full h-6 bg-black border-2 border-white relative overflow-hidden">
               <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className="h-full bg-marvel-red shadow-[0_0_15px_#E23636]"
               />
               <span className="absolute right-2 top-0 text-white font-hero text-sm leading-none">{skill.level}</span>
            </div>
            
            <div className="mt-8 flex justify-between items-center">
               <p className="text-xs font-hero text-marvel-gold tracking-widest font-black uppercase italic">Operational Status: Optimal</p>
               <div className="w-12 h-4 bg-white skew-x-[-20deg]"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
