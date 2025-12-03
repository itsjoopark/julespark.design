"use client";

import Link from "next/link";

interface FooterProps {
  className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`w-full py-8 lg:py-12 border-t border-foreground/10 ${className}`}
    >
      <div className="w-full mx-auto px-5 sm:px-10 lg:px-20 max-w-[1440px]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-foreground/60">
            © {currentYear} Jules Park. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              Twitter
            </Link>
            <Link
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              Dribbble
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

