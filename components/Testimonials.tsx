"use client";
import { useRef } from "react";
import { FaStar } from "react-icons/fa";
import testimonialsData from "@/data/testimonials.json" 

export default function TestimonialsTicker() {
  const containerRef = useRef<HTMLDivElement>(null);
const testimonials = testimonialsData.testimonials;
  const handleMouseEnter = () => {
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <div className="w-full bg-gray-50 py-14">
      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Real Feedback. Real Results
        </h2>
        <p className="text-gray-600 mt-2 text-base md:text-lg">
          See why businesses rely on us for GST, accounting, and tax excellence.
        </p>
      </div>

      <div
        className="overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex gap-6 animate-scroll" ref={containerRef}>
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-xs bg-white border border-gray-200 rounded-xl shadow-sm p-5 flex flex-col justify-between ticket-card whitespace-normal"
            >
              <div className="text-gray-700 text-sm italic whitespace-normal break-words">
                “{item.feedback}”
              </div>

              <div className="mt-4 whitespace-normal">
                <div className="font-semibold text-gray-900">{item.name}</div>
                <div className="text-xs text-gray-500">{item.title}</div>

                <div className="flex mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={`h-4 w-4 ${
                        i < item.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          display: inline-flex;
          white-space: nowrap;
          animation: scroll 180s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        /* Ticket punch-hole effect */
        .ticket-card {
          position: relative;
        }
        .ticket-card:before,
        .ticket-card:after {
          content: "";
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 16px;
          height: 16px;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 50%;
        }
        .ticket-card:before {
          left: -10px;
        }
        .ticket-card:after {
          right: -10px;
        }
      `}</style>
    </div>
  );
}
