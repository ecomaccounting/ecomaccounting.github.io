"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface BrandLogoProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  showText?: boolean;
  textBreakpoint?: "always" | "sm" | "md" | "lg" | "never";
  animate?: boolean;
  href?: string;
  priority?: boolean;
}

const sizeMap = {
  xs: { img: "h-6 w-6", text: "text-lg" },
  sm: { img: "h-7 w-7", text: "text-xl" },
  md: { img: "h-8 w-8", text: "text-2xl" },
  lg: { img: "h-10 w-10", text: "text-3xl" },
  xl: { img: "h-12 w-12", text: "text-4xl" },
  xxl: { img: "h-14 w-14", text: "text-5xl" },
};

const visibilityMap = {
  always: "inline-block",
  never: "hidden",
  sm: "hidden sm:inline-block",
  md: "hidden md:inline-block",
  lg: "hidden lg:inline-block",
};

export default function BrandLogo({
  size = "md",
  showText = true,
  textBreakpoint = "md",
  animate = true,
  href = "/",
  priority = true,
}: BrandLogoProps) {
  const [introSpin, setIntroSpin] = useState(false);
  const textVisibility = visibilityMap[textBreakpoint as keyof typeof visibilityMap] || "hidden md:inline-block";
  useEffect(() => {
    if (!animate) return;

    const seen = sessionStorage.getItem("brandLogoAnimated");
    if (!seen) {
      setIntroSpin(true);
      sessionStorage.setItem("brandLogoAnimated", "true");
      setTimeout(() => setIntroSpin(false), 700);
    }
  }, [animate]);

  // const textVisibility =
  //   textBreakpoint === "always"
  //     ? "inline-block"
  //     : textBreakpoint === "never"
  //       ? "hidden"
  //       : `hidden ${textBreakpoint}:inline-block`;

  return (
    <Link
      href={href}
      aria-label="Task360 home"
      className="flex items-center gap-1 shrink-0"
    >
      <Image
        src="/img/logo/task360-logo-s.png"
        width={40}
        height={40}
        alt="Task360 logo"
        priority={priority}
        className={`
          ${sizeMap[size].img}
          transition-transform duration-300 ease-out
          ${animate ? "hover:rotate-6 hover:scale-[1.03]" : ""}
          ${introSpin ? "rotate-[360deg]" : ""}
          dark:brightness-110 dark:contrast-125
          motion-reduce:transform-none
        `}
      />

      {showText && (
        <span className={`${textVisibility} ${sizeMap[size].text} font-semibold leading-none items-center`}>
          task360
        </span>
      )}
    </Link>
  );
}
