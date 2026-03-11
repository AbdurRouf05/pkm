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
      <div className="space-y-12 w-full max-w-5xl mx-auto">
        <div className="text-center space-y-4">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="inline-block"
          >
            <Banknote className="w-16 h-16 text-primary mb-2 shadow-2xl" />
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">Akuntansi & Pajak</h2>
          <p className="text-2xl font-medium text-slate-400 tracking-tight">Transparansi Laba Rugi Otomatis Berbasis Data Real-time.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-10 rounded-[3.5rem] bg-slate-900/40 border border-white/10 backdrop-blur-3xl relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-emerald-500/20 rounded-2xl text-emerald-400">
                  <Calculator size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">Laba Rugi (P&L)</h3>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed">Sistem menghitung otomatis selisih **Omzet** dan **Beban Bahan Baku (HPP)** secara akurat tanpa perlu input manual di akhir bulan.</p>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: '75%' }} transition={{ duration: 1.5 }} className="h-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-10 rounded-[3.5rem] bg-slate-900/40 border border-white/10 backdrop-blur-3xl relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-orange-500/20 rounded-2xl text-orange-400">
                  <PieChart size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">Manajemen Pajak</h3>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed">Perhitungan **Pajak UMKM (Final/PPN)** yang terintegrasi di setiap struk, memudahkan pelaporan keuangan yang akuntabel dan legal.</p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="h-8 flex-1 bg-white/5 rounded-lg border border-white/10 flex items-end p-1">
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
