"use client";

import Link from "next/link";

interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  return (
    <header
      className={`w-full py-6 lg:py-8 ${className}`}
    >
      <div className="w-full mx-auto px-5 sm:px-10 lg:px-20 max-w-[1440px]">
        <nav className="flex items-center justify-between">
          {/* Logo / Name */}
          <Link 
            href="/" 
            className="text-lg lg:text-xl font-medium hover:opacity-70 transition-opacity"
          >
            Jules Park
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link 
              href="/work" 
              className="text-sm hover:opacity-70 transition-opacity"
            >
              Work
            </Link>
            <Link 
              href="/about" 
              className="text-sm hover:opacity-70 transition-opacity"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-sm hover:opacity-70 transition-opacity"
            >
              Contact
            </Link>
          </div>

          {/* Tablet Navigation */}
          <div className="hidden sm:flex lg:hidden items-center gap-6">
            <Link 
              href="/work" 
              className="text-sm hover:opacity-70 transition-opacity"
            >
              Work
            </Link>
            <Link 
              href="/about" 
              className="text-sm hover:opacity-70 transition-opacity"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-sm hover:opacity-70 transition-opacity"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden p-2 -mr-2 hover:opacity-70 transition-opacity"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}

