'use client';

import React from 'react';
import { SlideWrapper } from '../SlideWrapper';
import { motion } from 'framer-motion';
import { Zap, Cpu, MousePointer2, FileText } from 'lucide-react';

interface SlideProps {
  isActive?: boolean;
  direction?: number;
}

export const Slide4: React.FC<SlideProps> = ({ isActive = false, direction = 0 }) => {
  return (
    <SlideWrapper isActive={isActive} direction={direction} className="text-white">
      <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground font-bold border border-primary/30"
          >
            <Zap size={18} className="fill-current" />
            PRESENTING THE SOLUTION
          </motion.div>
          
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
              The Business <span className="text-primary">System</span>
            </h2>
            <p className="text-2xl text-slate-300 leading-relaxed">
              Bukan sekadar kasir, tapi sistem operasi yang mengelola operasional secara cerdas dan mandiri.
            </p>
          </div>

          <div className="space-y-6 pt-4">
            {[
              { icon: Cpu, text: "Offline-First Resilience" },
              { icon: MousePointer2, text: "Recipe-Intelligence Engine" },
              { icon: FileText, text: "Real-time Accounting & P&L" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <item.icon size={20} />
                </div>
                <span className="text-xl font-medium text-slate-200 group-hover:text-white transition-colors">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", damping: 15 }}
          className="relative aspect-square rounded-[4rem] bg-slate-900/40 border border-white/10 flex items-center justify-center backdrop-blur-3xl overflow-hidden group shadow-2xl shadow-primary/20"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 group-hover:opacity-15 transition-opacity pointer-events-none" />
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="text-[12rem] font-black text-white/5 Select-none pointer-events-none"
          >
            K
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 bg-primary rounded-full blur-[100px] opacity-50" />
            <h3 className="text-5xl font-black lowercase tracking-tighter relative z-10">
              kalibra<span className="text-primary font-bold">os</span>
            </h3>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
};
