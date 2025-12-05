"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const words = [" books", " taxes", " compliance"];
export default function HeroBanner() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setIndex(i => (i + 1) % words.length), 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full">
            <div className="w-full">
                <Image
                    src="/img/hero/hero-bg.jpg"
                    alt="Hero"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                    priority
                />
            </div>

            <div className="px-6 py-10 text-left max-w-2xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                    <span>
                        Focus on growing your online business while we handle your&nbsp;{" "}
                    </span>

                    <span className="align-baseline w-[10ch] relative">
                        {words.map((w, i) => (
                            <span
                                key={i}
                                className={`
          absolute left-0 top-0
          transition-opacity duration-500
          ${i === index ? "opacity-100" : "opacity-0"}
        `}
                            >
                                {w}.
                            </span>
                        ))}
                    </span>
                </h1>
                <p className="mt-4 text-lg md:text-xl ">
                    Specialized services for Amazon, Flipkart, and other marketplace sellers.
                </p>
            </div>
        </section>


    );
}
