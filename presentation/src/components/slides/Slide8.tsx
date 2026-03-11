'use client';

import React from 'react';
import { SlideWrapper } from '../SlideWrapper';
import { motion } from 'framer-motion';
import { Code2, Server, Globe, Smartphone as SmartphoneIcon } from 'lucide-react';

interface SlideProps {
  isActive?: boolean;
  direction?: number;
}

export const Slide8: React.FC<SlideProps> = ({ isActive = false, direction = 0 }) => {
  const techs = [
    { label: 'Next.js 15', desc: 'Fast, Modern React Framework', icon: Code2, color: 'text-sky-400' },
    { label: 'Supabase & Dexie', desc: 'Realtime & Offline Persistence', icon: Globe, color: 'text-emerald-400' },
    { label: 'Data Security', desc: 'Enterprise-grade Encryption', icon: Server, color: 'text-amber-400' },
    { label: 'Capacitor', desc: 'Native Hybrid Mobile App', icon: SmartphoneIcon, color: 'text-indigo-400' },
  ];

  return (
    <SlideWrapper isActive={isActive} direction={direction}>
      <div className="space-y-16 w-full">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Teknologi di Balik Layar</h2>
          <p className="text-xl text-slate-500">Membangun dengan standar industri terkini</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techs.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="p-8 rounded-[3rem] bg-slate-900/40 border border-white/10 shadow-2xl hover:border-primary/40 transition-all backdrop-blur-3xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
              <div className="relative z-10 flex flex-col items-center gap-6">
                <div className="w-20 h-20 rounded-3xl bg-slate-800 shadow-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-slate-700 transition-all">
                  <tech.icon className={`${tech.color} w-10 h-10`} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">{tech.label}</h3>
                  <p className="text-sm text-slate-400 font-bold mt-1 uppercase tracking-widest">{tech.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-12 text-slate-300 font-bold text-4xl opacity-20 Select-none">
          <span>REACT 19</span>
          <span>TYPESCRIPT</span>
          <span>TAILWIND V4</span>
        </div>
      </div>
    </SlideWrapper>
  );
};
