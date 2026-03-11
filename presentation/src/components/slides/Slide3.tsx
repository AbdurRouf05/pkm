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
      <div className="space-y-12 w-full">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">Masalah di Bisnis Food and Beverage</h2>
            <p className="text-xl text-slate-400">Hambatan nyata pertumbuhan usaha mandiri</p>
          </div>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <AlertTriangle className="text-amber-500 w-12 h-12" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((prob, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.2 }}
              className="p-10 rounded-[2.5rem] bg-slate-900/40 border border-white/10 shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 backdrop-blur-3xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-${prob.bg.split('-')[1]}-500/20 rounded-2xl flex items-center justify-center mb-8`}>
                  <prob.icon className={`text-${prob.color.split('-')[1]}-400 w-8 h-8`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">{prob.title}</h3>
                <p className="text-slate-300 text-lg leading-relaxed font-medium">{prob.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
};
