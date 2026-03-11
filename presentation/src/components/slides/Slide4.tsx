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
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
        <div className="space-y-4 md:space-y-6 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-1.5 rounded-full bg-primary/20 text-primary-foreground font-bold border border-primary/30 text-[10px] md:text-xs tracking-widest"
          >
            <Zap size={14} className="md:w-[16px] md:h-[16px] fill-current" />
            PRESENTING THE SOLUTION
          </motion.div>
          
          <div className="space-y-2 md:space-y-3">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-tight uppercase">
              The Business <span className="text-primary italic">System</span>
            </h2>
            <p className="text-base md:text-xl text-slate-300 leading-relaxed font-medium max-w-lg">
              Bukan sekadar kasir, tapi sistem operasi yang mengelola operasional secara cerdas dan mandiri.
            </p>
          </div>

          <div className="space-y-3 md:space-y-4 pt-2 flex flex-col items-center lg:items-start">
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
                className="flex items-center gap-3 md:gap-4 group w-full max-w-sm justify-center lg:justify-start"
              >
                <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
                  <item.icon className="w-3.5 h-3.5 md:w-4.5 md:h-4.5" />
                </div>
                <span className="text-sm md:text-lg font-medium text-slate-200 group-hover:text-white transition-colors tracking-tight">
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
          className="relative aspect-square w-full max-w-[250px] md:max-w-xs lg:max-w-md rounded-3xl md:rounded-[3rem] bg-slate-900/40 border border-white/10 hidden md:flex items-center justify-center backdrop-blur-3xl overflow-hidden group shadow-2xl shadow-primary/20 mx-auto leading-none"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 group-hover:opacity-15 transition-opacity pointer-events-none" />
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="text-[6rem] md:text-[10rem] font-black text-white/5 Select-none pointer-events-none"
          >
            K
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 md:w-48 bg-primary rounded-full blur-[80px] opacity-40" />
            <h3 className="text-2xl md:text-4xl font-black lowercase tracking-tighter relative z-10 leading-none">
              kalibra<span className="text-primary font-bold">os</span>
            </h3>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
};
