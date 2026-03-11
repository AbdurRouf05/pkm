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
      <div className="space-y-6 md:space-y-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 md:gap-4 border-b border-white/10 pb-4 md:pb-6">
          <div className="space-y-1 md:space-y-3">
            <span className="px-3 py-1 rounded-full bg-primary/20 text-primary-foreground text-[10px] md:text-xs font-bold uppercase tracking-widest leading-none">Feature 01</span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase tracking-tighter">Offline-First</h2>
          </div>
          <p className="text-base md:text-xl font-medium text-slate-400 max-w-sm italic tracking-tight">Internet Mati? Tidak Masalah.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center leading-none">
          <div className="space-y-4 md:space-y-6">
            <div className="flex gap-3 md:gap-4 items-start group">
              <div className="mt-1 p-2 md:p-2.5 rounded-xl bg-red-100 text-red-600 flex-shrink-0 group-hover:scale-110 transition-transform">
                <WifiOff className="w-4 h-4 md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-0.5 tracking-tight uppercase">100% Operational</h3>
                <p className="text-xs md:text-base text-slate-300 font-medium leading-relaxed">Kasir tetap bisa melayani transaksi sepenuhnya meski tanpa koneksi internet.</p>
              </div>
            </div>

            <div className="flex gap-3 md:gap-4 items-start group">
              <div className="mt-1 p-2 md:p-2.5 rounded-xl bg-green-100 text-green-600 flex-shrink-0 group-hover:scale-110 transition-transform">
                <RefreshCw className="w-4 h-4 md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-0.5 tracking-tight uppercase">Auto-Sync</h3>
                <p className="text-xs md:text-base text-slate-300 font-medium leading-relaxed">Data tersimpan aman di browser (Dexie.js) dan sinkron otomatis saat internet online.</p>
              </div>
            </div>
          </div>

          <div className="relative p-6 md:p-8 rounded-3xl md:rounded-[3rem] bg-slate-900/40 border border-white/10 hidden md:flex items-center justify-center overflow-hidden backdrop-blur-3xl group shadow-2xl">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
             
             <div className="flex flex-col items-center gap-4 md:gap-6 relative z-10">
                <motion.div 
                  animate={{ 
                    opacity: [1, 0.4, 1],
                    scale: [1, 0.95, 1]
                  }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="p-5 md:p-6 rounded-full bg-slate-800 shadow-2xl shadow-red-500/20 leading-none"
                >
                  <WifiOff className="w-8 h-8 md:w-12 md:h-12 text-red-500" />
                </motion.div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 md:w-14 h-1 md:h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ x: [-56, 56] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                      className="w-10 md:w-14 h-full bg-primary"
                    />
                  </div>
                  <Wifi className="w-4 h-4 md:w-5 md:h-5 text-slate-300" />
                </div>

                <p className="text-[10px] md:text-xs text-center font-bold text-slate-400 uppercase tracking-widest bg-white/5 px-4 py-1.5 rounded-full border border-white/10 italic">Local Persistence Active</p>
             </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};
