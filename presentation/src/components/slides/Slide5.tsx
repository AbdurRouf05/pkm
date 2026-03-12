'use client';

import React from 'react';
import { SlideWrapper } from '../SlideWrapper';
import { motion } from 'framer-motion';
import { WifiOff, Database, Zap, ShieldCheck, Cpu } from 'lucide-react';

interface SlideProps {
  isActive?: boolean;
  direction?: number;
}

export const Slide5: React.FC<SlideProps> = ({ isActive = false, direction = 0 }) => {
  return (
    <SlideWrapper isActive={isActive} direction={direction}>
      <div className="space-y-6 md:space-y-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 md:gap-4 border-b border-white/10 pb-4 md:pb-6 text-center md:text-left">
          <div className="space-y-1 md:space-y-3">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-foreground text-[10px] md:text-xs font-bold uppercase tracking-widest leading-none border border-primary/20">
               <Zap size={14} className="fill-current" />
               Innovation Core
             </div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase tracking-tighter shadow-sm">Inovasi Utama <span className="text-primary italic block md:inline">& Mengapa Kami Menang</span></h2>
          </div>
          <p className="text-sm md:text-lg font-medium text-slate-400 max-w-sm italic tracking-tight hidden md:block">Keunggulan kompetitif yang mendefinisikan Kalibra OS.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Offline First Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="p-5 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-slate-900/40 border border-white/10 backdrop-blur-3xl relative overflow-hidden group hover:border-primary/50 transition-colors"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-red-500/10 flex items-center justify-center text-red-500 mb-4 group-hover:bg-red-500/20 transition-colors">
                <WifiOff className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tighter leading-none">Offline-First Resilience</h3>
              <p className="text-sm md:text-lg text-slate-300 font-medium leading-relaxed">
                <span className="text-white font-bold italic">Internet Mati? Tidak Masalah.</span> Kasir tetap operasional 100% secara lokal. Data tersinkronisasi otomatis saat online kembali.
              </p>
              <div className="flex items-center gap-2 pt-2">
                <ShieldCheck className="text-primary w-4 h-4" />
                <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Enterprise Grade Reliability</span>
              </div>
            </div>
          </motion.div>

          {/* Recipe Intelligence Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="p-5 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-slate-900/40 border border-white/10 backdrop-blur-3xl relative overflow-hidden group hover:border-secondary/50 transition-colors"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-secondary/10 flex items-center justify-center text-secondary mb-4 group-hover:bg-secondary/20 transition-colors">
                <Database className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tighter leading-none">Recipe Intelligence</h3>
              <p className="text-sm md:text-lg text-slate-300 font-medium leading-relaxed">
                 Pelacakan bahan baku hingga satuan <span className="text-secondary font-bold italic">gram/ml</span> secara otomatis. Menghapus "kebocoran stok" & menghitung HPP secara presisi.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <Database className="text-secondary w-4 h-4" />
                <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Precision Inventory System</span>
                <div className="w-1 h-1 rounded-full bg-slate-600 mx-1" />
                <ShieldCheck className="text-emerald-400 w-4 h-4" />
                <span className="text-[10px] md:text-xs font-bold text-emerald-400/80 uppercase tracking-widest leading-none">Sesuai Standar Aturan Pajak</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideWrapper>
  );
};
