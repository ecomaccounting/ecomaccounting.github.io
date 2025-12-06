"use client";
import { useRef } from "react";
import clientData from "@/data/data.json";
import Image from "next/image";

export default function TopClients() {
  const containerRef = useRef<HTMLDivElement>(null);
  const clients = clientData.clients.slice(0,6);

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
    <div className="w-full py-14">
      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-4xl">
          Trusted by 500+ Fast-Growing Businesses & Founders
        </h2>
        <p className="mt-2 text-base md:text-lg">
          Helping businesses stay compliant, organized, and ready to scale
        </p>
      </div>

      {/* Scroll Container */}
      <div
        className="overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center gap-10 animate-scroll" ref={containerRef}>
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center w-40"
            >
              {/* FIX: Parent MUST be relative + fixed height */}
              <div className="relative w-28 h-20">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain transition-transform duration-300 hover:scale-110"
                  sizes="120px"
                />
              </div>

              <div className="mt-2 text-sm text-center">{client.name}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 45s linear infinite;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
