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
      <div className="space-y-12 w-full">
        <div className="flex items-center gap-6">
           <div className="p-4 rounded-3xl bg-secondary text-white shadow-xl shadow-secondary/40">
              <Rocket size={32} />
           </div>
           <h2 className="text-4xl md:text-5xl font-black text-white">Rencana Bisnis & Scaling</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
           <div className="space-y-8">
              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="p-10 rounded-[3rem] bg-slate-900/40 border border-white/10 shadow-2xl flex items-start gap-8 backdrop-blur-3xl relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
                 <div className="p-4 bg-primary/20 text-primary-foreground rounded-2xl relative z-10"><Target size={32} /></div>
                 <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-tighter">Target Pasar</h3>
                    <p className="text-lg text-slate-200 font-medium leading-relaxed">Bisnis Food and Beverage level menengah (Kafe, Rumah Makan, Waralaba) yang butuh kontrol ketat.</p>
                 </div>
              </motion.div>

              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="p-10 rounded-[3rem] bg-slate-900/40 border border-white/10 shadow-2xl flex items-start gap-8 backdrop-blur-3xl relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
                 <div className="p-4 bg-secondary/20 text-secondary-foreground rounded-2xl relative z-10"><TrendingUp size={32} /></div>
                 <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-tighter">Model Bisnis</h3>
                    <p className="text-lg text-slate-200 font-medium leading-relaxed">Model Kerjasama Berlangganan bulanan atau tahunan dengan pilihan fitur yang fleksibel.</p>
                 </div>
              </motion.div>
           </div>

           <motion.div 
             initial={{ scale: 0.9, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ delay: 0.7 }}
             className="bg-slate-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden"
           >
              <div className="absolute top-0 right-0 p-8 text-primary opacity-20">
                <BarChart3 size={150} />
              </div>
              <div className="relative z-10 space-y-6">
                 <h3 className="text-3xl font-black">Visi Kedepan</h3>
                 <p className="text-xl text-slate-400 leading-relaxed font-medium">
                   "Menjadi standar sistem operasi digital yang paling tangguh dan mudah digunakan untuk Bisnis Food and Beverage di seluruh Indonesia."
                 </p>
                 <div className="pt-8 grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                       <p className="text-xs text-slate-500 uppercase font-black mb-1">Expansion</p>
                       <p className="text-xl font-bold">Island-wide</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                       <p className="text-xs text-slate-500 uppercase font-black mb-1">Users</p>
                       <p className="text-xl font-bold">1000+ UMKM</p>
                    </div>
                 </div>

                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="pt-8"
                  >
                    <a 
                      href="https://kalibra.vercel.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-white font-bold text-xl hover:bg-primary/80 transition-all hover:scale-105 shadow-xl shadow-primary/20 group"
                    >
                      Coba Demo Sekarang
                      <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </motion.div>
              </div>
           </motion.div>
        </div>
      </div>
    </SlideWrapper>
  );
};
