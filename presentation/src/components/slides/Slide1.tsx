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
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-5xl mx-auto p-8 md:p-12 rounded-[3.5rem] bg-slate-900/40 border border-white/10 backdrop-blur-3xl relative overflow-hidden text-center space-y-6 shadow-2xl"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground font-semibold text-xs tracking-wide uppercase relative z-10"
        >
          PKM-K Presentation
        </motion.div>
        
        <div className="relative z-10 space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight uppercase font-sans drop-shadow-2xl px-4"
          >
            INOVASI SAAS-ERP TERINTEGRASI: <br />
            <span className="text-primary italic text-[0.85em]">Platform Manajemen Stok & Akuntansi Otomatis</span> <br />
            <span className="text-[0.7em] block mt-2 opacity-90">Solusi Efisiensi Bisnis FNB</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            Manajemen Stok Berbasis Recipe-Intelligence Usaha Mikro Kecil dan Menengah
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="pt-6 space-y-1"
          >
            <p className="text-base font-bold text-white uppercase tracking-widest opacity-80">ITB Widyagama Lumajang</p>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </SlideWrapper>
  );
};
