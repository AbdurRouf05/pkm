'use client';

import React from 'react';
import { SlideWrapper } from '../SlideWrapper';
import { motion } from 'framer-motion';
import { ExternalLink, PlayCircle, Monitor, Smartphone, Globe } from 'lucide-react';

interface SlideProps {
  isActive?: boolean;
  direction?: number;
}

export const Slide9: React.FC<SlideProps> = ({ isActive = false, direction = 0 }) => {
  return (
    <SlideWrapper isActive={isActive} direction={direction}>
      <div className="w-full max-w-5xl mx-auto space-y-8 md:space-y-12 text-center">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isActive ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground font-bold border border-primary/30 text-xs tracking-widest uppercase mb-2"
          >
            <PlayCircle size={16} className="fill-current" />
            Live Demonstration
          </motion.div>
          <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight italic">
            Coba <span className="text-primary">Demo</span> Sekarang
          </h2>
          <p className="text-lg md:text-2xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed">
            Sistem kami telah siap dan dapat diakses melalui berbagai platform. Rasakan langsung efisiensi Kalibra OS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <motion.div 
             initial={{ y: 20, opacity: 0 }}
             animate={isActive ? { y: 0, opacity: 1 } : {}}
             transition={{ delay: 0.3 }}
             className="p-8 rounded-[2.5rem] bg-slate-900/40 border border-white/10 backdrop-blur-3xl flex flex-col items-center gap-4 group hover:border-primary/50 transition-all"
           >
              <Monitor className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold uppercase tracking-tight">Desktop Web</h3>
           </motion.div>
           <motion.div 
             initial={{ y: 20, opacity: 0 }}
             animate={isActive ? { y: 0, opacity: 1 } : {}}
             transition={{ delay: 0.5 }}
             className="p-8 rounded-[2.5rem] bg-slate-900/40 border border-white/10 backdrop-blur-3xl flex flex-col items-center gap-4 group hover:border-primary/50 transition-all"
           >
              <Smartphone className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold uppercase tracking-tight">Mobile App</h3>
           </motion.div>
           <motion.div 
             initial={{ y: 20, opacity: 0 }}
             animate={isActive ? { y: 0, opacity: 1 } : {}}
             transition={{ delay: 0.7 }}
             className="p-8 rounded-[2.5rem] bg-slate-900/40 border border-white/10 backdrop-blur-3xl flex flex-col items-center gap-4 group hover:border-primary/50 transition-all"
           >
              <Globe className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold uppercase tracking-tight">Cloud Sync</h3>
           </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="pt-4"
        >
          <a 
            href="https://kalibra.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-8 py-4 md:px-12 md:py-6 rounded-2xl bg-primary text-white font-black text-lg md:text-2xl hover:bg-primary/90 transition-all hover:scale-105 shadow-[0_20px_50px_rgba(var(--primary),0.3)] group"
          >
            KUNJUNGI WEBSITE DEMO
            <ExternalLink size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
          </a>
          <p className="mt-6 text-slate-500 font-bold uppercase tracking-widest text-xs">kalibra.vercel.app</p>
        </motion.div>
      </div>
    </SlideWrapper>
  );
};
