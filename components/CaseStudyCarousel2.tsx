"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import data1 from "@/data/data1.json";

const CaseStudyStack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const data = data1.caseStudies.filter(c => c.description1.length > 0);
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  }, [data.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div className="relative w-full max-w-lg mx-auto h-[500px] flex items-center justify-center">
      <div
        className="relative w-full h-full flex items-center justify-center"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <AnimatePresence initial={false}>
          {/* We only render the current and the next 2 cards to optimize performance */}
          {[2, 1, 0].map((offset) => {
            const index = (currentIndex + offset) % data.length;
            const item = data[index];

            return (
              <motion.div
                key={item.slug}
                initial={false}
                animate={{
                  scale: 1 - offset * 0.05,
                  y: offset * -20,
                  zIndex: data.length - offset,
                  opacity: offset === 0 ? 1 : 0.6,
                }}
                exit={{
                  x: 300,
                  opacity: 0,
                  rotate: 15,
                  transition: { duration: 0.4 }
                }}
                className="bg absolute w-full p-8 rounded-3xl shadow-2xl border border-light flex flex-col items-center text-center"
                style={{  cursor: 'grab' }}
                whileTap={{ cursor: 'grabbing' }}
              >
                {/* Image */}
                <div className="w-full h-auto mb-6 rounded-xl overflow-hidden border-4 border-light shadow-lg">
                  <img
                    src={`/img/case-study/${item.slug}.png`}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <h4 className="uppercase mb-2">{item.Service}</h4>
                <h2 className="text-highlight">{item.title}</h2>
                <p className="mb-6 italic leading-relaxed">
                  "{item.description1}"
                </p>

                <a href={`/case-studies/${item.slug}`} className="mt-auto px-6 py-2 bg-accent rounded-full font-semibold shadow-sm hover:shadow-md transition-shadow">
                  Read full case study
                </a>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute -bottom-16 flex space-x-4">
        <button onClick={prevSlide} className="p-3 secondary rounded-full shadow-lg hover:scale-110 transition-transform"><ChevronLeft /></button>
        <button onClick={nextSlide} className="p-3 secondary rounded-full shadow-lg hover:scale-110 transition-transform"><ChevronRight /></button>
      </div>
    </div>
  );
};

export default CaseStudyStack;