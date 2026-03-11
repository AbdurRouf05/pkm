'use client';

import React from 'react';
import { SlideWrapper } from '../SlideWrapper';
import { motion } from 'framer-motion';
import { Database, TrendingDown, Coins } from 'lucide-react';

interface SlideProps {
  isActive?: boolean;
  direction?: number;
}

export const Slide6: React.FC<SlideProps> = ({ isActive = false, direction = 0 }) => {
  return (
    <SlideWrapper isActive={isActive} direction={direction}>
      <div className="space-y-6 md:space-y-8 w-full text-center md:text-left">
        <div className="space-y-1 md:space-y-3">
          <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary-foreground text-[10px] md:text-xs font-bold uppercase tracking-widest">Feature 02</span>
          <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-tight uppercase">Recipe-Intelligence</h2>
          <p className="text-base md:text-xl text-slate-400 font-medium tracking-tight">Manajemen Bahan Baku Presisi.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 md:gap-4">
          {[
            {
              icon: Database,
              label: "Auto-Deduction",
              text: "Jual 1 Porsi = Otomatis memotong stok Gram/Ml bahan mentah di gudang.",
              color: "text-blue-500",
              dot: "bg-blue-500"
            },
            {
              icon: Coins,
              label: "Real-time HPP",
              text: "Menghitung Harga Pokok Penjualan secara otomatis setiap terjadi transaksi.",
              color: "text-emerald-500",
              dot: "bg-emerald-500"
            },
            {
              icon: TrendingDown,
              label: "Zero Waste",
              text: "Mencegah kebocoran stok dengan pelacakan penggunaan bahan yang sangat akurat.",
              color: "text-orange-500",
              dot: "bg-orange-500"
            }
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="p-4 md:p-6 rounded-3xl md:rounded-[2rem] bg-slate-900/40 border border-white/10 shadow-xl shadow-black/40 text-center space-y-2 md:space-y-4 group hover:bg-slate-800 transition-all duration-500 backdrop-blur-3xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
              <div className="relative z-10 flex flex-col items-center leading-none">
                <div className="mx-auto w-8 h-8 md:w-12 md:h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors mb-2 md:mb-5">
                  <card.icon className={`${card.color} w-4 h-4 md:w-6 md:h-6 group-hover:text-primary transition-colors`} />
                </div>
                <h3 className="text-sm md:text-xl font-bold text-white uppercase tracking-tighter mb-1 md:mb-1.5 leading-tight">{card.label}</h3>
                <p className="text-slate-300 text-[11px] md:text-sm leading-relaxed font-medium">{card.text}</p>
                <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full mx-auto mt-2 ${card.dot} shadow-lg shadow-current/50`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
};
