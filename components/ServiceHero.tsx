import { ServiceItem } from "@/data/types";
import * as LucideIcons from "lucide-react";
import { FileText } from "lucide-react";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

type ServiceHeroVariant = "primary" | "compact";

interface ServiceHeroProps {
    service: ServiceItem;
    variant?: ServiceHeroVariant;
    className?: string;
}

export default function ServiceHero({
    service,
    variant = "primary",
    className,
}: ServiceHeroProps) {
    const isPrimary = variant === "primary";

    const Icon =
        service.icon &&
        (LucideIcons[service.icon as keyof typeof LucideIcons] as React.ComponentType<
            React.SVGProps<SVGSVGElement>
        >);

    return (
        <section
            className={cn(
                "relative overflow-hidden rounded-3xl",
                "flex items-center justify-center text-center w-full",
                isPrimary
                    ? "min-h-[520px] md:min-h-[600px] "
                    : "min-h-[380px]",
                className
            )}
        >
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/img/services/service-hero.png')",
                }}
                aria-hidden
            />

            

            {/* Overlay – intentionally LIGHT, image must show */}
            <div className="absolute inset-0 aria-hidden" />            

            {/* Content */}
            <div
                className="relative z-10 max-w-3xl py-16">
                <Link href={`/services/${service.id}`} className="group block">
                    {/* Icon */}
                    <div
                        className="mb-6 flex justify-center">
                        <div className="w-30 h-30 rounded-xl bg-blue-100 flex items-center justify-center transition-colors group-hover:bg-blue-600">
                            {Icon ? (
                                <Icon className="w-20 h-20 text-blue-600 group-hover:text-white transition-colors" />
                            ) : (
                                <FileText className="w-20 h-20 text-blue-600" />
                            )}
                        </div>
                    </div>

                    {/* Title */}
                    <h1
                        className={cn(
                            "leading-tight",
                            isPrimary ? "text-3xl md:text-4xl" : "text-2xl"
                        )}
                    >
                        {service.name}
                    </h1>

                    {/* Description only for primary */}
                    {isPrimary && service.shortDescription && (
                        <p className="mt-4 text-lg max-w-2xl mx-auto">
                            {service.shortDescription}
                        </p>
                    )}
                </Link>
            </div>
        </section>
    );
}
