'use client';

import React from 'react';
import { SlideWrapper } from '../SlideWrapper';
import { motion } from 'framer-motion';
import { Banknote, Calculator, PieChart } from 'lucide-react';

interface SlideProps {
  isActive?: boolean;
  direction?: number;
}

export const Slide7: React.FC<SlideProps> = ({ isActive = false, direction = 0 }) => {
  return (
    <SlideWrapper isActive={isActive} direction={direction}>
      <div className="space-y-6 md:space-y-8 w-full max-w-5xl mx-auto">
        <div className="text-center space-y-2 md:space-y-3">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="inline-block"
          >
            <Banknote className="w-8 h-8 md:w-12 md:h-12 text-primary mb-1 shadow-2xl" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none italic">Akuntansi & Pajak</h2>
          <p className="text-base md:text-xl font-medium text-slate-400 tracking-tight leading-relaxed max-w-3xl mx-auto">Transparansi Laba Rugi Otomatis Berbasis Data Real-time.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-5 md:p-6 rounded-3xl md:rounded-[2rem] bg-slate-900/40 border border-white/10 backdrop-blur-3xl relative overflow-hidden group shadow-2xl leading-none"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
            <div className="relative z-10 space-y-3 md:space-y-4">
              <div className="flex items-center gap-2 font-bold uppercase tracking-widest text-[8px] md:text-[10px] text-emerald-400 opacity-60">Automation Active</div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="p-2.5 md:p-3 bg-emerald-500/20 rounded-xl md:rounded-2xl text-emerald-400 flex-shrink-0">
                  <Calculator size={20} className="md:w-[24px] md:h-[24px]" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-tighter">Laba Rugi (P&L)</h3>
              </div>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-medium">Sistem menghitung otomatis selisih **Omzet** dan **Beban Bahan Baku (HPP)** secara akurat tanpa perlu input manual di akhir bulan.</p>
              <div className="h-1.5 md:h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: '75%' }} transition={{ duration: 1.5 }} className="h-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-5 md:p-6 rounded-3xl md:rounded-[2rem] bg-slate-900/40 border border-white/10 backdrop-blur-3xl relative overflow-hidden group shadow-2xl leading-none"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
            <div className="relative z-10 space-y-3 md:space-y-4">
              <div className="flex items-center gap-2 font-bold uppercase tracking-widest text-[8px] md:text-[10px] text-orange-400 opacity-60">Compliance Ready</div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="p-2.5 md:p-3 bg-orange-500/20 rounded-xl md:rounded-2xl text-orange-400 flex-shrink-0">
                  <PieChart size={20} className="md:w-[24px] md:h-[24px]" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-tighter">Manajemen Pajak</h3>
              </div>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-medium">Perhitungan **Pajak UMKM (Final/PPN)** yang terintegrasi di setiap struk, memudahkan pelaporan keuangan yang akuntabel dan legal.</p>
              <div className="flex gap-1.5 md:gap-2">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="h-4 md:h-6 flex-1 bg-white/5 rounded md:rounded-lg border border-white/10 flex items-end p-0.5">
                    <motion.div initial={{ height: 0 }} animate={{ height: `${20 + i * 15}%` }} className="w-full bg-orange-500/40 rounded-sm" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideWrapper>
  );
};
