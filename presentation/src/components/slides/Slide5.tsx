'use client';

import React from 'react';
import { SlideWrapper } from '../SlideWrapper';
import { motion } from 'framer-motion';
import { Wifi, WifiOff, RefreshCw } from 'lucide-react';

interface SlideProps {
  isActive?: boolean;
  direction?: number;
}

export const Slide5: React.FC<SlideProps> = ({ isActive = false, direction = 0 }) => {
  return (
    <SlideWrapper isActive={isActive} direction={direction}>
      <div className="space-y-12 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 pb-8">
          <div className="space-y-4">
            <span className="px-4 py-1 rounded-full bg-primary/20 text-primary-foreground text-sm font-bold uppercase tracking-widest">Feature 01</span>
            <h2 className="text-5xl md:text-6xl font-black text-white">Offline-First</h2>
          </div>
          <p className="text-2xl font-medium text-slate-400 max-w-md">Internet Mati? Tidak Masalah.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="mt-1 p-3 rounded-2xl bg-red-100 text-red-600">
                <WifiOff size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">100% Operational</h3>
                <p className="text-lg text-slate-300">Kasir tetap bisa melayani transaksi sepenuhnya meski tanpa koneksi internet.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="mt-1 p-3 rounded-2xl bg-green-100 text-green-600">
                <RefreshCw size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Auto-Sync</h3>
                <p className="text-lg text-slate-300">Data tersimpan aman di browser (Dexie.js) dan sinkron otomatis saat internet online.</p>
              </div>
            </div>
          </div>

          <div className="relative p-12 rounded-[4rem] bg-slate-900/40 border border-white/10 flex items-center justify-center overflow-hidden backdrop-blur-3xl group shadow-2xl">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl" />
             
             <div className="flex flex-col items-center gap-8 relative z-10">
                <motion.div 
                  animate={{ 
                    opacity: [1, 0.3, 1],
                    scale: [1, 0.9, 1]
                  }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="p-8 rounded-full bg-slate-800 shadow-2xl shadow-red-500/20"
                >
                  <WifiOff size={64} className="text-red-500" />
                </motion.div>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ x: [-64, 64] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                      className="w-16 h-full bg-primary"
                    />
                  </div>
                  <Wifi size={24} className="text-slate-300" />
                </div>

                <p className="text-center font-bold text-slate-400 uppercase tracking-tighter">Local Persistence Active</p>
             </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};
