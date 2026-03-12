'use client';

import React from 'react';
import { SlideWrapper } from '../SlideWrapper';
import { motion } from 'framer-motion';
import { Target, TrendingUp, BarChart3, Rocket, DollarSign, Users, Quote } from 'lucide-react';

interface SlideProps {
  isActive?: boolean;
  direction?: number;
}

export const Slide7: React.FC<SlideProps> = ({ isActive = false, direction = 0 }) => {
  return (
    <SlideWrapper isActive={isActive} direction={direction}>
      <div className="space-y-4 md:space-y-6 w-full max-w-5xl mx-auto">
        <div className="flex items-center gap-3 md:gap-4 pb-1 md:pb-2 border-b border-white/10 text-center md:text-left">
           <div className="p-2 md:p-3 rounded-xl bg-secondary text-white shadow-xl shadow-secondary/40 leading-none">
              <Rocket className="w-5 h-5 md:w-7 md:h-7" />
           </div>
           <div className="space-y-1">
             <h2 className="text-2xl md:text-4xl font-black text-white leading-tight uppercase tracking-tighter">Rencana Bisnis & Validasi Nyata</h2>
             <p className="text-xs md:text-base text-slate-400 font-medium italic">Kalibra OS bukan sekadar konsep, tapi solusi yang sudah berjalan.</p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
           {/* Section: Market & Biz Model */}
           <div className="md:col-span-5 space-y-4">
              <motion.div initial={{ x: -20, opacity: 0 }} animate={isActive ? { x: 0, opacity: 1 } : {}} transition={{ delay: 0.3 }} className="p-5 md:p-6 rounded-[2rem] bg-slate-900/40 border border-white/10 shadow-xl flex items-start gap-4 md:gap-6 backdrop-blur-3xl relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
                 <div className="p-2 md:p-3 bg-primary/20 text-primary-foreground rounded-xl relative z-10 flex-shrink-0"><Target className="w-5 h-5 md:w-6 md:h-6" /></div>
                 <div className="relative z-10">
                    <h3 className="text-base md:text-xl font-bold text-white mb-1 uppercase tracking-tighter">Target Pasar</h3>
                    <p className="text-xs md:text-sm text-slate-400 font-medium leading-relaxed">Bisnis F&B menengah & waralaba yang membutuhkan kontrol stok ketat.</p>
                 </div>
              </motion.div>

              <motion.div initial={{ x: -20, opacity: 0 }} animate={isActive ? { x: 0, opacity: 1 } : {}} transition={{ delay: 0.5 }} className="p-5 md:p-6 rounded-[2rem] bg-slate-900/40 border border-white/10 shadow-xl flex items-start gap-4 md:gap-6 backdrop-blur-3xl relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
                 <div className="p-2 md:p-3 bg-secondary/20 text-secondary-foreground rounded-xl relative z-10 flex-shrink-0"><TrendingUp className="w-5 h-5 md:w-6 md:h-6" /></div>
                 <div className="relative z-10">
                    <h3 className="text-base md:text-xl font-bold text-white mb-1 uppercase tracking-tighter">Model Bisnis</h3>
                    <p className="text-xs md:text-sm text-slate-400 font-medium leading-relaxed">SaaS (Software as a Service) Berlangganan mulai dari Rp 199k/bln.</p>
                 </div>
              </motion.div>
           </div>

           {/* Section: Traction & Vision */}
           <div className="md:col-span-7 flex flex-col gap-4">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isActive ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
                className="bg-slate-900/60 rounded-[2.5rem] p-6 md:p-8 text-white relative overflow-hidden shadow-2xl border border-primary/20 flex-1"
              >
                  <div className="absolute top-0 right-0 p-8 text-primary opacity-5 hidden md:block">
                    <BarChart3 size={120} />
                  </div>
                  
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between">
                       <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] uppercase font-bold tracking-widest leading-none">
                          <DollarSign size={12} />
                          Live Traction
                       </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                       <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center">
                          <Users className="text-primary w-6 h-6 mb-2" />
                          <span className="text-2xl md:text-3xl font-black">02</span>
                          <p className="text-[10px] text-slate-500 uppercase font-black">Klien Aktif</p>
                       </div>
                       <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center">
                          <DollarSign className="text-emerald-400 w-6 h-6 mb-2" />
                          <span className="text-2xl md:text-3xl font-black">6jt</span>
                          <p className="text-[10px] text-slate-500 uppercase font-black">Pendapatan</p>
                       </div>
                    </div>
                    
                    <div className="pt-2 border-t border-white/5">
                       <div className="flex gap-2">
                          <Quote className="text-primary w-4 h-4 flex-shrink-0" />
                          <p className="text-xs md:text-base text-slate-300 leading-relaxed font-medium italic">
                             "Telah diuji di lapangan dan menghasilkan pendapatan nyata."
                          </p>
                       </div>
                    </div>
                  </div>
              </motion.div>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={isActive ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.9 }}
                className="bg-primary rounded-2xl p-4 md:p-6 text-white flex items-center justify-between group overflow-hidden relative shadow-xl shadow-primary/20"
              >
                 <div className="absolute right-0 top-0 h-full w-1/2 bg-white/10 -skew-x-12 translate-x-1/2 group-hover:translate-x-0 transition-transform duration-700" />
                 <div className="relative z-10">
                    <p className="text-[9px] uppercase font-black tracking-widest leading-none mb-1 opacity-80">Scaling Vision</p>
                    <h3 className="text-xl md:text-2xl font-black tracking-tighter uppercase italic leading-none">1000+ UMKM F&B</h3>
                 </div>
                 <BarChart3 className="relative z-10 w-8 h-8 md:w-10 md:h-10 opacity-30 group-hover:opacity-100 transition-opacity" />
              </motion.div>
           </div>
        </div>
      </div>
    </SlideWrapper>
  );
};
