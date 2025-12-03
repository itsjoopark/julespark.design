"use client";

import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

/**
 * Responsive section component with consistent padding
 */
export default function Section({
  children,
  className = "",
  id,
  fullWidth = false,
}: SectionProps) {
  const containerClasses = fullWidth
    ? "w-full"
    : "w-full mx-auto px-5 sm:px-10 lg:px-20 max-w-[1440px]";

  return (
    <section id={id} className={`py-12 sm:py-16 lg:py-24 ${className}`}>
      <div className={containerClasses}>{children}</div>
    </section>
  );
}

