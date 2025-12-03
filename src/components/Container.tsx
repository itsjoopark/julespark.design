"use client";

import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  fullWidth?: boolean;
}

/**
 * Responsive container component
 * Breakpoints:
 * - Mobile: < 640px (440px design width)
 * - Tablet: 640px - 989px (990px design width)
 * - Desktop: >= 990px (1440px design width)
 */
export default function Container({
  children,
  className = "",
  as: Component = "div",
  fullWidth = false,
}: ContainerProps) {
  const baseClasses = fullWidth
    ? "w-full"
    : "w-full mx-auto px-5 sm:px-10 lg:px-20 max-w-[1440px]";

  return (
    <Component className={`${baseClasses} ${className}`}>
      {children}
    </Component>
  );
}

