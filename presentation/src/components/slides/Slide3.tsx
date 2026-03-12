'use client';

import React from 'react';
import { SlideWrapper } from '../SlideWrapper';
import { motion } from 'framer-motion';
import { WifiOff, PackageX, FileText, AlertTriangle, PenTool } from 'lucide-react';

interface SlideProps {
  isActive?: boolean;
  direction?: number;
}

export const Slide3: React.FC<SlideProps> = ({ isActive = false, direction = 0 }) => {
  const problems = [
    {
      icon: PenTool,
      title: "Pencatatan Manual",
      desc: "Transaksi & stok masih dicatat di buku. Rawan hilang, salah hitung, & sulit dianalisis.",
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
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
      <div className="space-y-4 md:space-y-6 w-full">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1 md:space-y-2">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-tighter">Masalah di Bisnis FNB</h2>
            <p className="text-xs md:text-base text-slate-400 font-medium italic">Hambatan nyata bagi UMKM yang belum terdigitalisasi</p>
          </div>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex-shrink-0"
          >
            <AlertTriangle className="text-amber-500 w-6 h-6 md:w-8 md:h-8" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {problems.map((prob, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + idx * 0.1 }}
              className="p-4 md:p-5 rounded-2xl md:rounded-[1.5rem] bg-slate-900/40 border border-white/10 shadow-xl hover:shadow-primary/10 transition-all duration-300 backdrop-blur-3xl relative overflow-hidden group border-b-2"
              style={{ borderBottomColor: `var(--${prob.color.split('-')[1]}-500)` }}
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
              <div className="relative z-10 flex flex-col items-start leading-none">
                <div className={`w-8 h-8 md:w-10 md:h-10 bg-${prob.color.split('-')[1]}-500/20 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4`}>
                  <prob.icon className={`${prob.color.replace('text', 'text')} w-4 h-4 md:w-5 md:h-5`} />
                </div>
                <h3 className="text-sm md:text-base font-bold text-white mb-2 uppercase tracking-tighter leading-tight">{prob.title}</h3>
                <p className="text-slate-400 text-[10px] md:text-xs leading-relaxed font-medium">{prob.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
};
