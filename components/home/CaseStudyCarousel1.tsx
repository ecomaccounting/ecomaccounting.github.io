"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // install lucide-react or use SVGs
import { motion, AnimatePresence } from "framer-motion";
import data1 from "@/data/data1.json";
import Image from "next/image"

const CaseStudyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const data = data1.caseStudies.filter(c=> c.description.length>0);
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  }, [data.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  // Auto-scroll logic (3-5 seconds)
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div
        className="relative overflow-hidden rounded-2xl shadow-xl"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}            
            className="flex flex-col md:flex-row items-center  min-h-[400px]">            
            <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">              
              <Image
                src={`/img/case-study/${data[currentIndex].slug}.png`}
                alt={data[currentIndex].title}
                className="rounded-lg object-cover max-h-72 w-auto shadow-md"
                width={400}
                height={400}
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-4 md:pl-10 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-highlight">
                {data[currentIndex].Service}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mt-2 leading-tight">
                {data[currentIndex].title}
              </h3>
              <p className="mt-4 text-lg leading-relaxed">
                {data[currentIndex].description}
              </p>
              <a
                href={`/case-studies/${data[currentIndex].slug}/`}
                className="inline-block mt-6 font-semibold transition-colors"
              >
                Read full case study →
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
        

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-[var(--bg)]]/50 rounded-full shadow-md transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[var(--bg)]]/50 rounded-full shadow-md transition-all"
        >
          <ChevronRight className="w-6 h-6 " />
        </button>

        {/* Progress Indicators */}
        {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {data.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 highlight' : 'w-2 bg-accent'}`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default CaseStudyCarousel;