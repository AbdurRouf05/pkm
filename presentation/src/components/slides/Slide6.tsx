'use client';

import React from 'react';
import { SlideWrapper } from '../SlideWrapper';
import { motion } from 'framer-motion';
import { Code2, Server, Globe, Smartphone as SmartphoneIcon } from 'lucide-react';

interface SlideProps {
  isActive?: boolean;
  direction?: number;
}

export const Slide6: React.FC<SlideProps> = ({ isActive = false, direction = 0 }) => {
  const techs = [
    { label: 'Next.js 15', desc: 'Fast, Modern React Framework', icon: Code2, color: 'text-sky-400' },
    { label: 'Supabase & Dexie', desc: 'Realtime & Offline Persistence', icon: Globe, color: 'text-emerald-400' },
    { label: 'Data Security', desc: 'Enterprise-grade Encryption', icon: Server, color: 'text-amber-400' },
    { label: 'Capacitor', desc: 'Native Hybrid Mobile App', icon: SmartphoneIcon, color: 'text-indigo-400' },
  ];

  return (
    <SlideWrapper isActive={isActive} direction={direction}>
      <div className="space-y-6 md:space-y-8 w-full">
        <div className="text-center space-y-1 md:space-y-3">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tighter uppercase leading-none">Teknologi di Balik Layar</h2>
          <p className="text-sm md:text-lg text-slate-400 font-medium">Membangun dengan standar industri terkini</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {techs.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="p-5 md:p-6 rounded-3xl md:rounded-[2rem] bg-slate-900/40 border border-white/10 shadow-2xl hover:border-primary/40 transition-all backdrop-blur-3xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
              <div className="relative z-10 flex flex-col items-center gap-3 md:gap-4 text-center leading-none">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-slate-800 shadow-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-slate-700 transition-all">
                  <tech.icon className={`${tech.color} w-5 h-5 md:w-7 md:h-7`} />
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-black text-white leading-tight">{tech.label}</h3>
                  <p className="hidden md:block text-[10px] text-slate-400 font-bold mt-1 uppercase tracking-widest">{tech.desc}</p>
                  <p className="md:hidden text-[8px] text-slate-500 font-bold mt-1 uppercase tracking-wider">{tech.desc.split(' ')[0]} tech</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-slate-300 font-bold text-base md:text-2xl opacity-10 Select-none tracking-tighter uppercase italic">
          <span>REACT 19</span>
          <span>TYPESCRIPT</span>
          <span>TAILWIND V4</span>
        </div>
      </div>
    </SlideWrapper>
  );
};
