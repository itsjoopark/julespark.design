"use client";

import { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  className?: string;
  cols?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  gap?: {
    mobile?: string;
    tablet?: string;
    desktop?: string;
  };
}

/**
 * Responsive grid component
 * Default: 1 col mobile, 2 cols tablet, 3 cols desktop
 */
export default function Grid({
  children,
  className = "",
  cols = { mobile: 1, tablet: 2, desktop: 3 },
  gap = { mobile: "gap-6", tablet: "gap-8", desktop: "gap-10" },
}: GridProps) {
  const getGridCols = () => {
    const mobileCol = `grid-cols-${cols.mobile || 1}`;
    const tabletCol = `sm:grid-cols-${cols.tablet || 2}`;
    const desktopCol = `lg:grid-cols-${cols.desktop || 3}`;
    return `${mobileCol} ${tabletCol} ${desktopCol}`;
  };

  const getGap = () => {
    return `${gap.mobile} sm:${gap.tablet} lg:${gap.desktop}`;
  };

  return (
    <div className={`grid ${getGridCols()} ${getGap()} ${className}`}>
      {children}
    </div>
  );
}

