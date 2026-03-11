'use client';

import React from 'react';
import { SlideWrapper } from '../SlideWrapper';
import { motion } from 'framer-motion';
import { WifiOff, PackageX, FileText, AlertTriangle } from 'lucide-react';

interface SlideProps {
  isActive?: boolean;
  direction?: number;
}

export const Slide3: React.FC<SlideProps> = ({ isActive = false, direction = 0 }) => {
  const problems = [
    {
      icon: WifiOff,
      title: "Stop Karena Sinyal",
      desc: "Kasir sering macet total saat internet mati atau lemot di lokasi UMKM.",
      color: "text-red-500",
      bg: "bg-red-50"
    },
    {
      icon: PackageX,
      title: "Stok Bocor",
      desc: "Hanya tahu barang terjual, tapi tidak tahu sisa bahan baku presisi (terigu, daging, saus).",
      color: "text-orange-500",
      bg: "bg-orange-50"
    },
    {
      icon: FileText,
      title: "Laporan Ribet",
      desc: "Penghitungan laba rugi masih manual, memakan waktu, dan rawan human error.",
      color: "text-amber-500",
      bg: "bg-amber-50"
    }
  ];

  return (
    <SlideWrapper isActive={isActive} direction={direction}>
      <div className="space-y-6 md:space-y-8 w-full">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1 md:space-y-2">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white uppercase tracking-tighter">Masalah di Bisnis FNB</h2>
            <p className="text-sm md:text-lg text-slate-400 font-medium">Hambatan nyata pertumbuhan usaha mandiri</p>
          </div>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex-shrink-0"
          >
            <AlertTriangle className="text-amber-500 w-8 h-8 md:w-10 md:h-10" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {problems.map((prob, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.2 }}
              className="p-5 md:p-6 rounded-3xl md:rounded-[2rem] bg-slate-900/40 border border-white/10 shadow-xl hover:shadow-primary/10 transition-all duration-300 backdrop-blur-3xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
              <div className="relative z-10 flex flex-col items-start leading-none">
                <div className={`w-10 h-10 md:w-12 md:h-12 bg-${prob.bg.split('-')[1]}-500/20 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6`}>
                  <prob.icon className={`text-${prob.color.split('-')[1]}-400 w-5 h-5 md:w-6 md:h-6`} />
                </div>
                <h3 className="text-base md:text-xl font-bold text-white mb-2 md:mb-3 uppercase tracking-tighter leading-tight">{prob.title}</h3>
                <p className="text-slate-300 text-xs md:text-base leading-relaxed font-medium shadow-sm">{prob.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
};
