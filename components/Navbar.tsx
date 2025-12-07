"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { subNavData } from "@/data/subNavData.js";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavItem } from "@/data/types"

export default function Navbar() {
  const [active, setActive] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const topThree = subNavData.slice(0, 3);
  const headerHeight = 64;
  return (

    <nav className="bg-light ">
      <div className="container mx-auto flex justify-between items-center p-4 gap-3">
        {/* Logo / Firm Name */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 text-2xl tracking-wide">
            <Image
              src="/task360.svg"
              height={30}
              width={30}
              alt="Task360 Logo"
            />
            Task360
          </Link>
        </div>
        {/* Desktop */}
        <div className="hidden md:flex container mx-auto max-w-content px-6 gap-8 py-4 justify-end">
          {topThree.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActive(idx)}
              onMouseLeave={() => setActive(null)}
            >
              <Link href={item.link} className="font-medium tracking-tight whitespace-nowrap p-2">
                {item.title}
              </Link>


              <AnimatePresence>
                {active === idx && item.children && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={`fixed right-0 top-[${headerHeight}px] w-full p-10 md:px-20 bg-light 
                    grid grid-cols-1 md:grid-cols-3 gap-8 min-w-[650px] max-w-[850px] z-50 pt-6 justify-end`}
                  >
                    {item.children?.map((child: NavItem, cIdx) => (
                      <div key={cIdx}>
                        <Link href={child.link} className="text-lg mb-2 block">
                          {child.title}
                        </Link>

                        {child.children?.length ? (
                          <div className="flex flex-col gap-1 pl-1">
                            {child.children?.map((sub: NavItem, sIdx: number) => (
                              <Link
                                href={sub.link}
                                key={sIdx}
                                className="text-sm hover:opacity-70"
                              >
                                {sub.title}
                              </Link>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>


        {/* Mobile */}
        <div className="md:hidden flex justify-between items-center px-4 py-4">
          <button onClick={() => setMobileOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>


        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-light z-50 p-6 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="font-semibold text-lg">Menu</span>
                <button onClick={() => setMobileOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>


              <div className="flex flex-col gap-4">
                {subNavData.map((item, idx) => (
                  <div key={idx}>
                    <Link
                      href={item.link}
                      className="font-semibold block mb-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.title}
                    </Link>


                    {item.children && (
                      <div className="pl-4 flex flex-col gap-1">
                        {item.children.map((child: NavItem, cIdx) => (
                          <div key={cIdx}>
                            <Link
                              href={child.link}
                              className="font-medium block mb-1"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.title}
                            </Link>


                            {child.children && (
                              <div className="pl-3 flex flex-col gap-1">
                                {child.children.map((sub, sIdx) => (
                                  <Link
                                    href={sub.link}
                                    key={sIdx}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-sm opacity-80"
                                  >
                                    {sub.title}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>


      </div>


    </nav>
  );
}
