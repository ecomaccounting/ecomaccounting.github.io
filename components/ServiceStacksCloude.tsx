"use client";

import { useState } from "react";
import servicesData from "@/data/servicesData.json";
import Link from "next/link";
import Image from "next/image";
import * as LucideIcons from "lucide-react"; // import all icons dynamically
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ServiceStacks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sections = servicesData.services.filter(srv => srv.parentId === "");

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % sections.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + sections.length) % sections.length);
  };

  const activeService = sections[activeIndex];
  //const IconComp = iconMap[activeService.icon as keyof typeof iconMap];
  const IconComp = activeService.icon
    ? (LucideIcons[activeService.icon as keyof typeof LucideIcons] as React.ComponentType<React.SVGProps<SVGSVGElement>>)
    : null;



  return (
    <section id="services" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4 bg-gradient-to-r">
            Our Services
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Comprehensive solutions designed for startups and growing businesses
          </p>
        </div>

        {/* Main Carousel Card */}
        <div className="relative">
          <div className="bg-light rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left: Image */}
              <div className="relative w-full aspect-[3/2] md:rounded-l-2xl rounded-2xl  overflow-hidden shadow-xl">
                <Image
                  src={`/img/services/${activeService.id}.png`}
                  alt={activeService.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* <div className="relative h-64 md:h-auto">
                <Image
                  src={`/img/services/${activeService.id}.png`}
                  alt={activeService.name}
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 ">
                  <div className="flex items-center gap-3 mb-2">
                    {IconComp && <IconComp className="w-8 h-8" />}
                    <h3 className="text-4xl font-bold">{activeService.name}</h3>
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="p-4 md:px-10 flex flex-col justify-start">
                <p className="text-lg mb-8 leading-relaxed">
                  {activeService.shortDescription}
                </p>

                {/* Services List */}
                <div className="space-y-4">
                  {
                    servicesData.services
                      .filter(srv => srv.parentId === activeService.id)
                      .slice(0, 3)
                      .map((child, idx) => {
                        //const ChildIcon = iconMap[child.icon as keyof typeof iconMap];
                        const ChildIcon = child.icon
                          ? (LucideIcons[child.icon as keyof typeof LucideIcons] as React.ComponentType<React.SVGProps<SVGSVGElement>>)
                          : null;
                        return (

                          <div className="flex items-center gap-3" key={idx}>
                            {ChildIcon && (
                              <div className="mt-1 p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                                <ChildIcon className="w-5 h-5 text-blue-600" />
                              </div>
                            )}
                            <Link href={`/services/${child.id}`}>
                              <h4 className="text-lg mb-1 group-hover:text-blue-600 transition-colors">
                                {child.name}
                              </h4>
                            </Link>

                          </div>

                        );
                      })}
                </div>

                {/* CTA Button */}
                <Link href={`/services/${activeService.id}`}>
                  <button className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                    Explore {activeService.name}
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3  rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-110"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3  rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-110"
            aria-label="Next service"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-8">
          {sections.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex
                ? 'w-8 bg-blue-600'
                : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              aria-label={`Go to service ${idx + 1}`}
            />
          ))}
        </div>

        {/* Quick Nav Pills */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {sections.map((service, idx) => {
            //const Icon = iconMap[service.icon as keyof typeof iconMap];
            const Icon = service.icon
              ? (LucideIcons[service.icon as keyof typeof LucideIcons] as React.ComponentType<React.SVGProps<SVGSVGElement>>)
              : null;
            return (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${idx === activeIndex
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:shadow-md hover:scale-105'
                  }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {service.name}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
