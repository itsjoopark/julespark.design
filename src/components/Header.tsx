"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import MenuIcon from "./MenuIcon";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation Bar - Responsive across all breakpoints */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f0efea]">
        {/* Desktop (1440px) */}
        <div className="hidden lg:flex w-full max-w-[1440px] mx-auto px-[50px] pt-[30px] pb-[10px] items-start gap-[10px]">
          <Link href="/" className="shrink-0">
            <Logo className="w-[60px] h-[49px]" />
          </Link>

          <div className="flex flex-1 items-center self-stretch py-[10px]">
            <nav className="flex-1 flex items-center justify-center">
              <div className="flex items-center gap-[86px] font-normal text-2xl text-black">
                <Link href="#work" className="hover:opacity-70 transition-opacity whitespace-nowrap">
                  Work
                </Link>
                <Link href="#about" className="hover:opacity-70 transition-opacity whitespace-nowrap">
                  About
                </Link>
                <Link href="/resume" className="hover:opacity-70 transition-opacity whitespace-nowrap">
                  Resume
                </Link>
              </div>
            </nav>
          </div>

          <a
            href="mailto:hello@julespark.design"
            className="flex items-center justify-center w-[98px] h-[49px] px-[10px] py-[8px] bg-black text-white text-xs rounded-[20px] border border-black hover:opacity-90 transition-opacity shrink-0"
          >
            Say hello
          </a>
        </div>

        {/* Tablet (640-989px) */}
        <div className="hidden sm:flex lg:hidden w-full max-w-[990px] mx-auto px-[50px] pt-[30px] pb-[10px] items-start gap-[10px]">
          <Link href="/" className="shrink-0">
            <Logo className="w-[60px] h-[49px]" />
          </Link>

          <div className="flex flex-1 items-center self-stretch py-[10px]">
            <nav className="flex-1 flex items-center justify-center">
              <div className="flex items-center gap-[86px] font-normal text-2xl text-black">
                <Link href="#work" className="hover:opacity-70 transition-opacity whitespace-nowrap">
                  Work
                </Link>
                <Link href="#about" className="hover:opacity-70 transition-opacity whitespace-nowrap">
                  About
                </Link>
                <Link href="/resume" className="hover:opacity-70 transition-opacity whitespace-nowrap">
                  Resume
                </Link>
              </div>
            </nav>
          </div>

          <a
            href="mailto:hello@julespark.design"
            className="flex items-center justify-center w-[98px] h-[49px] px-[10px] py-[8px] bg-black text-white text-xs rounded-[20px] border border-black hover:opacity-90 transition-opacity shrink-0"
          >
            Say hello
          </a>
        </div>

        {/* Mobile (<640px) */}
        <div className="sm:hidden w-full max-w-[440px] mx-auto px-[50px] pt-[30px] pb-[10px] flex items-start gap-[10px] relative">
          <Link href="/" className="shrink-0">
            <Logo className="w-[60px] h-[49px]" />
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="absolute right-[19px] top-[15px] p-0 bg-transparent border-none cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <MenuIcon className="w-[20px] h-[20px]" />
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="fixed top-[89px] left-0 right-0 z-40 sm:hidden bg-[#f0efea]">
          <div className="w-full max-w-[440px] mx-auto flex flex-col items-center gap-[25px] p-[10px]">
            <Link
              href="#work"
              onClick={() => setIsMenuOpen(false)}
              className="font-normal text-2xl text-black hover:opacity-70 transition-opacity"
            >
              Work
            </Link>
            <Link
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="font-normal text-2xl text-black hover:opacity-70 transition-opacity"
            >
              About
            </Link>
            <Link
              href="/resume"
              onClick={() => setIsMenuOpen(false)}
              className="font-normal text-2xl text-black hover:opacity-70 transition-opacity"
            >
              Resume
            </Link>
            <a
              href="mailto:hello@julespark.design"
              className="flex items-center justify-center px-[10px] py-[8px] bg-black text-white text-xs rounded-[20px] border border-black hover:opacity-90 transition-opacity"
            >
              Say hello
            </a>
          </div>
        </div>
      )}
    </>
  );
}
