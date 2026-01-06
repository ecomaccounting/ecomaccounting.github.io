"use client";
import { useRef } from "react";
import data from "@/data/data1.json" 

export default function TestimonialsTicker() {
const testimonials = data.clients.filter(t=>t.home && t.shortFeedback.length>10);
  const containerRef = useRef<HTMLDivElement>(null);

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
    <div className="w-full  py-14">
      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-4xl ">
          Real Feedback. Real Results
        </h2>
        <p className="mt-2 text-base md:text-lg">
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
              className="min-w-[300px] max-w-xs bg-accent  rounded-xl shadow-sm p-5 flex flex-col justify-between ticket-card whitespace-normal"
            >
              <div className="italic whitespace-normal break-words">
                “{item.shortFeedback}”
              </div>

              <div className="mt-4 whitespace-normal">
                <div className="font-semibold ">{item.name}</div>
                <div className="text-xs">{item.title}</div>
                
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
