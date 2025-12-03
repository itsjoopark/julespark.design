"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import MenuIcon from "./MenuIcon";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 h-[50px] px-5 py-[15px] flex items-center">
        <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Logo />
          </Link>

          {/* Desktop/Tablet Navigation - centered absolutely */}
          <nav className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center gap-[86px] font-normal text-xs text-black">
              <Link href="#work" className="hover:opacity-70 transition-opacity">
                Work
              </Link>
              <Link href="#about" className="hover:opacity-70 transition-opacity">
                About
              </Link>
              <Link href="/resume" className="hover:opacity-70 transition-opacity">
                Resume
              </Link>
            </div>
          </nav>

          {/* Say hello button - Desktop/Tablet */}
          <a
            href="mailto:hello@julespark.design"
            className="hidden sm:flex items-center justify-center px-[10px] py-[8px] bg-black text-white text-xs rounded-[20px] border border-black hover:opacity-90 transition-opacity shrink-0"
          >
            Say hello
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden ml-auto p-0 bg-transparent border-none cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="fixed top-[58px] left-0 right-0 z-40 sm:hidden">
          <div className="w-full max-w-[440px] mx-auto flex flex-col items-center gap-[25px] p-[10px]">
            <Link
              href="#work"
              onClick={() => setIsMenuOpen(false)}
              className="font-normal text-xs text-black hover:opacity-70 transition-opacity"
            >
              Work
            </Link>
            <Link
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="font-normal text-xs text-black hover:opacity-70 transition-opacity"
            >
              About
            </Link>
            <Link
              href="/resume"
              onClick={() => setIsMenuOpen(false)}
              className="font-normal text-xs text-black hover:opacity-70 transition-opacity"
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
