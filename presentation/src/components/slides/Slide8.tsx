'use client';

import React from 'react';
import { SlideWrapper } from '../SlideWrapper';
import { motion } from 'framer-motion';
import { Wallet, Cloud, ShieldCheck, Cpu, Layout } from 'lucide-react';

interface SlideProps {
  isActive?: boolean;
  direction?: number;
}

export const Slide8: React.FC<SlideProps> = ({ isActive = false, direction = 0 }) => {
  const budgetItems = [
    { 
      no: 1, 
      item: 'Infrastruktur Cloud', 
      amount: 'Rp 3.500.000', 
      desc: 'Supabase Pro, Vercel Pro, & Storage',
      icon: <Cloud className="w-4 h-4 text-blue-400" />
    },
    { 
      no: 2, 
      item: 'Lisensi & Domain', 
      amount: 'Rp 1.500.000', 
      desc: 'Domain .id, SSL, Workspace Email',
      icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />
    },
    { 
      no: 3, 
      item: 'API & Generative AI', 
      amount: 'Rp 1.500.000', 
      desc: 'Gemini API, Genkit, Image API',
      icon: <Cpu className="w-4 h-4 text-purple-400" />
    },
    { 
      no: 4, 
      item: 'Marketing Digital', 
      amount: 'Rp 1.500.000', 
      desc: 'Meta Ads, Google Ads, Publikasi',
      icon: <Layout className="w-4 h-4 text-orange-400" />
    },
  ];

  return (
    <SlideWrapper isActive={isActive} direction={direction}>
      <div className="space-y-4 md:space-y-6 w-full max-w-5xl mx-auto">
        <div className="flex items-center gap-3 md:gap-4 pb-1 md:pb-2">
           <div className="p-2 md:p-3 rounded-xl bg-primary text-white shadow-xl shadow-primary/40 leading-none">
              <Wallet className="w-5 h-5 md:w-7 md:h-7" />
           </div>
           <h2 className="text-2xl md:text-3xl font-black text-white leading-tight uppercase tracking-tighter">Anggaran Biaya Program</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            {budgetItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={isActive ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.1 * index }}
                className="p-3 md:p-4 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-xl flex items-center gap-4 group hover:border-primary/50 transition-colors"
              >
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/20 transition-colors">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xs md:text-sm font-bold text-white uppercase tracking-tight">{item.item}</h3>
                  <p className="text-[10px] md:text-xs text-slate-400">{item.desc}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm md:text-base font-black text-primary italic leading-none">{item.amount}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isActive ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="bg-primary rounded-3xl p-6 md:p-8 flex flex-col justify-center items-center text-center relative overflow-hidden shadow-2xl shadow-primary/30"
          >
            <div className="absolute top-0 right-0 p-8 text-white opacity-10 leading-none">
              <Wallet size={120} />
            </div>
            <h3 className="text-lg md:text-xl font-bold uppercase text-white/80 tracking-widest mb-2 relative z-10">Total Investasi</h3>
            <p className="text-4xl md:text-6xl font-black text-white italic tracking-tighter drop-shadow-xl relative z-10">
              Rp 8.000.000
            </p>
            <div className="mt-6 px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-md relative z-10">
              <p className="text-[10px] md:text-xs font-bold text-white/90 uppercase tracking-widest leading-none">Alokasi Dana PKM-K 2026</p>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideWrapper>
  );
};
