"use client";

import clsx from "clsx";
import { AppIconMap, CONSTELLATION_ICONS, ICON_POSITIONS } from "@/lib/appIcons";
import { ServiceItem } from "@/data/types";


interface ServiceHeroProps {
    variant: "parent" | "child";
    service: ServiceItem;    
    className?: string;
}

export function ServiceHero({
    variant,
    service,    
    className
}: ServiceHeroProps) {
    let Icon = AppIconMap[service.icon];    
    Icon = Icon?? AppIconMap["Rocket"];    
    const instanceSeed = service.name.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
    return (
        <section
            className={clsx(
                "relative isolate w-full h-full overflow-hidden rounded-3xl",
                "border border-[var(--border)]",
                className
            )}
        >
            {/* ===== HALO ===== */}
            <div className="absolute inset-0 -z-10">
                <div
                    className={clsx(
                        "absolute left-1/2 top-1/2",
                        "h-[120vmin] w-[120vmin]",
                        "-translate-x-1/2 -translate-y-1/2",
                        "rounded-full blur-3xl",
                        "bg-[var(--accent-soft)]",
                        "animate-halo-breathe",
                        "opacity-90"
                    )}
                ></div>
            </div>

            {/* ===== ICON CONSTELLATION ===== */}
            <div
                className="absolute inset-0 transition-transform duration-300 ease-out"
                style={{ transform: `translateY(10px)` }}
            >

                <IconConstellation
                    opacity={0.25}
                    instanceSeed={instanceSeed}
                />
            </div>

            {/* ===== CONTENT ===== */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
                <div className="mb-4 flex h-24 w-24 items-center justify-center">                    
                    <Icon className="h-16 w-16 " />
                </div>


                <h1 className="mb-2 text-xl md:text-2xl font-semibold">
                    {service.name}
                </h1>


                {variant === "parent" && service.shortDescription && (
                    <p
                        className={clsx(
                            "max-w-xl text-sm md:text-base",
                        )}
                    >
                        {service.shortDescription}
                    </p>
                )}
            </div>
        </section>
    );
}

function IconConstellation({
    opacity = 0.18,
    instanceSeed = 0
}: {
    opacity?: number;
    instanceSeed?: number;
}) {
    return (
        <div
            className="absolute inset-0 pointer-events-none"
            style={{ opacity }}
        >
            {ICON_POSITIONS.map((pos, i) => {

                const combinedSeed = instanceSeed + i;

                const iconName = pickRandom(CONSTELLATION_ICONS, combinedSeed);
                //iconName = iconName ?? "Rocket";
                const Icon = AppIconMap[iconName];

                const rotate = (seeded(i + 11) - 0.5) * 30; // ±15°
                const scale = 0.85 + seeded(i + 21) * 0.6; // 0.85 → 1.45
                const iconOpacity = 0.45 + seeded(i + 31) * 0.4;

                return (
                    <Icon
                        key={i}
                        className="absolute"
                        style={{
                            left: `${pos.x}%`,
                            top: `${pos.y}%`,
                            width: `${40 * scale}px`,
                            height: `${40 * scale}px`,
                            transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                            opacity: iconOpacity
                        }}
                        strokeWidth={1.3}
                    />
                );
            })}
        </div>
    );
}



function seeded(seed: number) {
    // A slightly more chaotic distribution
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
}

function pickRandom(arr: readonly string[], seed: number) {
    return arr[Math.floor(seeded(seed) * arr.length)];
}