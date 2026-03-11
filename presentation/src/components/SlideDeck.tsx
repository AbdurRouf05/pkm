'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideDeckProps {
  slides: React.ReactNode[];
}

export const SlideDeck: React.FC<SlideDeckProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToNextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide, slides.length]);

  const goToPrevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        goToNextSlide();
      } else if (e.key === 'ArrowLeft') {
        goToPrevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPrevSlide]);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-background">
      {slides.map((slide, index) => (
        <React.Fragment key={index}>
          {React.cloneElement(slide as React.ReactElement<any>, {
            isActive: currentSlide === index,
            direction: direction
          })}
        </React.Fragment>
      ))}

      {/* Navigation Controls */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 flex gap-2 md:gap-4 z-50">
        <button
          onClick={goToPrevSlide}
          disabled={currentSlide === 0}
          className="p-2 md:p-3 rounded-full bg-white/20 backdrop-blur-xl border border-white/10 shadow-lg hover:bg-white/30 transition-all active:scale-95 disabled:opacity-20 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </button>
        <div className="flex items-center justify-center px-4 py-2 bg-white/20 backdrop-blur-xl border border-white/10 rounded-full shadow-lg font-bold text-xs md:text-sm text-white">
          {currentSlide + 1} / {slides.length}
        </div>
        <button
          onClick={goToNextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-2 md:p-3 rounded-full bg-white/20 backdrop-blur-xl border border-white/10 shadow-lg hover:bg-white/30 transition-all active:scale-95 disabled:opacity-20 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 h-1 bg-primary/20 w-full z-50">
        <div 
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </main>
  );
};
