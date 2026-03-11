'use client';

import React from 'react';
import { SlideWrapper } from '../SlideWrapper';
import { motion } from 'framer-motion';
import { Layers, Cloud, Server } from 'lucide-react';

interface SlideProps {
  isActive?: boolean;
  direction?: number;
}

export const Slide2: React.FC<SlideProps> = ({ isActive = false, direction = 0 }) => {
  return (
    <SlideWrapper isActive={isActive} direction={direction}>
      <div className="space-y-8 w-full">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-tight">SaaS vs ERP</h2>
          <p className="text-lg text-slate-400 mt-1 uppercase tracking-widest font-bold">The Foundation of KalibraOS</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 pb-4">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-[2.5rem] bg-slate-900/40 border border-white/10 hover:border-primary/40 transition-all backdrop-blur-3xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 group-hover:opacity-10 transition-opacity" />
            <div className="relative z-10 text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-4">
                <Layers className="text-primary w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-tighter">ERP</h3>
              <p className="text-slate-400 text-sm mb-3 italic">"The Integrated System"</p>
              <p className="text-slate-200 text-base leading-relaxed font-medium">Software terintegrasi untuk mengelola seluruh aspek bisnis dalam satu platform.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="p-8 rounded-[2.5rem] bg-slate-900/40 border border-white/10 hover:border-secondary/40 transition-all backdrop-blur-3xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 group-hover:opacity-10 transition-opacity" />
            <div className="relative z-10 text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mb-4">
                <Cloud className="text-secondary w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-tighter">SaaS</h3>
              <p className="text-slate-400 text-sm mb-3 italic">"Cloud Access Model"</p>
              <p className="text-slate-200 text-base leading-relaxed font-medium">Akses software via browser tanpa server fisik. Cukup berlangganan & siap pakai.</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="p-8 rounded-[3rem] bg-gradient-to-r from-primary/30 to-blue-600/30 border border-white/10 text-white text-center backdrop-blur-3xl relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <Server size={100} />
          </div>
          <h3 className="text-2xl font-black mb-1 uppercase">Mengenal KalibraOS</h3>
          <p className="text-lg font-medium text-slate-100 max-w-3xl mx-auto italic">
            "Sistem manajemen bisnis terintegrasi yang disajikan secara layanan perangkat lunak modern untuk efisiensi UMKM F&B."
          </p>
        </motion.div>
      </div>
    </SlideWrapper>
  );
};
