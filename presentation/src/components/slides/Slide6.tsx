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
      <div className="space-y-12 w-full text-center md:text-left">
        <div className="space-y-4">
          <span className="px-4 py-1 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-bold uppercase tracking-widest">Feature 02</span>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">Recipe-Intelligence</h2>
          <p className="text-2xl text-slate-400">Manajemen Bahan Baku Presisi.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
              className="p-10 rounded-[3rem] bg-slate-900/40 border border-white/10 shadow-xl shadow-black/40 text-center space-y-6 group hover:bg-slate-800 transition-all duration-500 backdrop-blur-3xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
              <div className="relative z-10">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <card.icon className={`${card.color} w-8 h-8 group-hover:text-primary transition-colors`} />
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">{card.label}</h3>
                <p className="text-slate-300 text-lg leading-relaxed font-medium">{card.text}</p>
                <div className={`w-3 h-3 rounded-full mx-auto mt-4 ${card.dot} shadow-lg shadow-current/50`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
};
