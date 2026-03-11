import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { StarBackground } from './StarBackground';

interface SlideWrapperProps {
  children: React.ReactNode;
  className?: string;
  isActive: boolean;
  direction: number;
}

export const SlideWrapper: React.FC<SlideWrapperProps> = ({ 
  children, 
  className, 
  isActive,
  direction 
}) => {
  const variants = {
    initial: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
    }),
    active: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring' as const,
        damping: 25,
        stiffness: 120,
        duration: 0.6,
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 1.05,
      transition: {
        duration: 0.4,
      },
    }),
  };

  return (
    <AnimatePresence mode="wait" custom={direction}>
      {isActive && (
        <motion.div
          custom={direction}
          variants={variants}
          initial="initial"
          animate="active"
          exit="exit"
          className={cn(
            "fixed inset-0 flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden",
            "bg-slate-900 text-white",
            className
          )}
        >
          <StarBackground />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="w-full max-w-6xl mx-auto h-full flex flex-col justify-center relative z-10">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
