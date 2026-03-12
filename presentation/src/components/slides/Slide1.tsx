'use client';

import React from 'react';
import { SlideWrapper } from '../SlideWrapper';
import { motion } from 'framer-motion';

interface SlideProps {
  isActive?: boolean;
  direction?: number;
}

export const Slide1: React.FC<SlideProps> = ({ isActive = false, direction = 0 }) => {
  return (
    <SlideWrapper isActive={isActive} direction={direction} className="text-white">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center space-y-6 md:space-y-10 py-6 md:py-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block px-3 py-1.5 rounded-full bg-primary/20 text-primary-foreground font-bold text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.4em] uppercase relative z-10 border border-primary/20 backdrop-blur-sm"
        >
          PKM-K Presentation 2026
        </motion.div>
        
        <div className="relative z-10 space-y-6 md:space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] px-4 italic"
          >
            KALIBRA<span className="text-primary italic">OS</span>
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "150px" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-1 md:h-1.5 bg-primary mx-auto rounded-full shadow-[0_0_20px_rgba(var(--primary),0.5)] mt-2 md:mt-4"
          />

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-black uppercase tracking-tighter italic drop-shadow-lg pt-2"
          >
            SaaS-ERP Terintegrasi: <br />
            <span className="text-white/60 text-xs md:text-lg tracking-widest font-bold not-italic block mt-1">Solusi Efisiensi Operasional UMKM F&B</span>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="pt-6 md:pt-10"
          >
            <p className="text-sm md:text-lg font-black text-white uppercase tracking-[0.4em] opacity-60">ITB Widyagama Lumajang</p>
          </motion.div>
        </div>
      </div>
    </SlideWrapper>
  );
};
