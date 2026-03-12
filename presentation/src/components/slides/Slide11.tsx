'use client';

import React from 'react';
import { SlideWrapper } from '../SlideWrapper';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface SlideProps {
  isActive?: boolean;
  direction?: number;
}

export const Slide11: React.FC<SlideProps> = ({ isActive = false, direction = 0 }) => {
  return (
    <SlideWrapper isActive={isActive} direction={direction} className="text-white overflow-hidden">
      <div className="w-full max-w-3xl mx-auto p-4 md:p-8 rounded-3xl md:rounded-[2.5rem] bg-slate-900/40 border border-white/10 backdrop-blur-3xl relative overflow-hidden text-center space-y-6 md:space-y-8 shadow-2xl leading-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
        
        <div className="relative z-10 space-y-6 md:space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-2 md:space-y-4 leading-normal"
          >
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic drop-shadow-2xl leading-tight">
              Thank <span className="text-primary font-black">You</span>
            </h2>
            <div className="w-12 md:w-16 h-1 md:h-1.5 bg-primary mx-auto rounded-full" />
            <p className="text-sm md:text-lg text-slate-300 font-medium px-2">Ready to scale your F&B business with KalibraOS?</p>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", delay: 0.5 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="relative group leading-none">
               <div className="absolute inset-0 bg-primary/20 blur-[40px] group-hover:bg-primary/40 transition-colors" />
               <h3 className="text-4xl md:text-6xl font-black lowercase tracking-tighter relative z-10 text-white drop-shadow-2xl">
                 kalibra<span className="text-primary font-bold">os</span>
               </h3>
            </div>
            <p className="text-slate-400 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[7px] md:text-[10px] bg-white/5 px-4 md:px-5 py-1 md:py-1 rounded-full border border-white/10 backdrop-blur-sm italic">
              Premium IT Solution
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col items-center gap-2 pt-4 border-t border-white/10 leading-none"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-slate-500 font-bold tracking-widest uppercase text-[7px] md:text-[9px] px-4 opacity-50">
              <span className="whitespace-nowrap">Kalibra Systems</span>
              <div className="w-0.5 h-0.5 rounded-full bg-slate-700 hidden md:block" />
              <span className="whitespace-nowrap">2026 Edition</span>
            </div>
            <Heart className="text-red-500/30 w-3.5 h-3.5 md:w-4 md:h-4 animate-pulse" fill="currentColor" />
          </motion.div>
        </div>
      </div>
    </SlideWrapper>
  );
};
