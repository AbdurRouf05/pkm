'use client';

import React from 'react';
import { SlideWrapper } from '../SlideWrapper';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface SlideProps {
  isActive?: boolean;
  direction?: number;
}

export const Slide10: React.FC<SlideProps> = ({ isActive = false, direction = 0 }) => {
  return (
    <SlideWrapper isActive={isActive} direction={direction} className="text-white overflow-hidden">
      <div className="w-full max-w-4xl mx-auto p-8 md:p-12 rounded-[3.5rem] bg-slate-900/40 border border-white/10 backdrop-blur-3xl relative overflow-hidden text-center space-y-10 shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
        
        <div className="relative z-10 space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic drop-shadow-2xl">
              Thank <span className="text-primary">You</span>
            </h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
            <p className="text-xl text-slate-300 font-medium">Ready to scale your F&B business with KalibraOS?</p>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", delay: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative group">
               <div className="absolute inset-0 bg-primary/20 blur-[50px] group-hover:bg-primary/40 transition-colors" />
               <h3 className="text-6xl md:text-8xl font-black lowercase tracking-tighter relative z-10 text-white drop-shadow-2xl">
                 kalibra<span className="text-primary font-bold">os</span>
               </h3>
            </div>
            <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs bg-white/5 px-6 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
              Premium IT Solution
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col items-center gap-3 pt-4 border-t border-white/5"
          >
            <div className="flex items-center gap-2 text-slate-500 font-bold tracking-widest uppercase text-[10px]">
              <span>Kalibra: Integrated Business Systems</span>
              <div className="w-1 h-1 rounded-full bg-slate-700" />
              <span>2026 Edition</span>
            </div>
            <Heart className="text-red-500/40 w-5 h-5 animate-pulse" fill="currentColor" />
          </motion.div>
        </div>
      </div>
    </SlideWrapper>
  );
};
