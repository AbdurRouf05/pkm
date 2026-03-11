'use client';

import React from 'react';
import { SlideWrapper } from '../SlideWrapper';
import { motion } from 'framer-motion';
import { Target, TrendingUp, BarChart3, Rocket, ExternalLink } from 'lucide-react';

interface SlideProps {
  isActive?: boolean;
  direction?: number;
}

export const Slide9: React.FC<SlideProps> = ({ isActive = false, direction = 0 }) => {
  return (
    <SlideWrapper isActive={isActive} direction={direction}>
      <div className="space-y-4 md:space-y-8 w-full">
        <div className="flex items-center gap-3 md:gap-4 pb-1 md:pb-2">
           <div className="p-2 md:p-3 rounded-xl bg-secondary text-white shadow-xl shadow-secondary/40 leading-none">
              <Rocket className="w-5 h-5 md:w-7 md:h-7" />
           </div>
           <h2 className="text-2xl md:text-4xl font-black text-white leading-tight uppercase tracking-tighter">Rencana Bisnis & Scaling</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
           <div className="space-y-3 md:space-y-4">
              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="p-4 md:p-6 rounded-3xl md:rounded-[2rem] bg-slate-900/40 border border-white/10 shadow-2xl flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-6 backdrop-blur-3xl relative overflow-hidden group text-center md:text-left leading-none">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
                 <div className="p-2 md:p-3 bg-primary/20 text-primary-foreground rounded-xl relative z-10 leading-none flex-shrink-0"><Target className="w-4 h-4 md:w-6 md:h-6" /></div>
                 <div className="relative z-10">
                    <h3 className="text-sm md:text-xl font-bold text-white mb-1 uppercase tracking-tighter leading-tight">Target Pasar</h3>
                    <p className="text-[11px] md:text-sm text-slate-300 font-medium leading-relaxed max-w-xs mx-auto md:mx-0">Bisnis F&B level menengah (Kafe, Rumah Makan, Waralaba) yang butuh kontrol ketat.</p>
                 </div>
              </motion.div>

              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="p-4 md:p-6 rounded-3xl md:rounded-[2rem] bg-slate-900/40 border border-white/10 shadow-2xl flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-6 backdrop-blur-3xl relative overflow-hidden group text-center md:text-left leading-none">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
                 <div className="p-2 md:p-3 bg-secondary/20 text-secondary-foreground rounded-xl relative z-10 leading-none flex-shrink-0"><TrendingUp className="w-4 h-4 md:w-6 md:h-6" /></div>
                 <div className="relative z-10">
                    <h3 className="text-sm md:text-xl font-bold text-white mb-1 uppercase tracking-tighter leading-tight">Model Bisnis</h3>
                    <p className="text-[11px] md:text-sm text-slate-300 font-medium leading-relaxed max-w-xs mx-auto md:mx-0">Model Kerjasama Berlangganan bulanan atau tahunan dengan pilihan fitur yang fleksibel.</p>
                 </div>
              </motion.div>
           </div>

           <motion.div 
             initial={{ scale: 0.9, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ delay: 0.7 }}
             className="bg-slate-900 rounded-2xl md:rounded-[2.5rem] p-4 md:p-8 text-white relative overflow-hidden shadow-2xl leading-none"
           >
              <div className="absolute top-0 right-0 p-4 md:p-6 text-primary opacity-20 hidden md:block leading-none">
                <BarChart3 size={100} />
              </div>
              <div className="relative z-10 space-y-3 md:space-y-4">
                 <h3 className="text-lg md:text-2xl font-black uppercase text-white italic tracking-tighter leading-tight">Visi Kedepan</h3>
                 <p className="text-[11px] md:text-lg text-slate-400 leading-relaxed font-medium italic">
                    "Menjadi standar sistem operasi digital yang paling tangguh dan mudah digunakan untuk Bisnis Food and Beverage di seluruh Indonesia."
                 </p>
                 <div className="pt-1.5 md:pt-4 grid grid-cols-2 gap-2 md:gap-3">
                    <div className="p-2 md:p-3 bg-white/5 rounded-lg md:rounded-xl border border-white/10">
                       <p className="text-[7px] text-slate-500 uppercase font-black mb-1">Expansion</p>
                       <p className="text-xs md:text-lg font-bold">Island-wide</p>
                    </div>
                    <div className="p-2 md:p-3 bg-white/5 rounded-lg md:rounded-xl border border-white/10">
                       <p className="text-[7px] text-slate-500 uppercase font-black mb-1">Users</p>
                       <p className="text-xs md:text-lg font-bold">1000+ UMKM</p>
                    </div>
                 </div>

                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="pt-3 md:pt-6 text-center"
                  >
                    <a 
                      href="https://kalibra.vercel.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 md:gap-3 px-4 py-2 md:px-6 md:py-3 rounded-xl bg-primary text-white font-bold text-[10px] md:text-base hover:bg-primary/80 transition-all hover:scale-105 shadow-xl shadow-primary/20 group"
                    >
                      Coba Demo Sekarang
                      <ExternalLink size={14} className="md:w-[18px] md:h-[18px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </motion.div>
              </div>
           </motion.div>
        </div>
      </div>
    </SlideWrapper>
  );
};
