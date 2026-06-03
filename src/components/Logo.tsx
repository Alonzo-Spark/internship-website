import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = "md",
}) => {
  const heights = {
    sm: "h-[36px]", // slightly increased from 32px (h-8)
    md: "h-[48px]", // slightly increased from 44px (h-11)
    lg: "h-[72px]", // slightly increased from 64px (h-16)
  };

  const titleSizes = {
    sm: "text-[15px]",
    md: "text-[19px]", // slightly increased from text-lg (18px)
    lg: "text-[26px]", // slightly increased from text-2xl (24px)
  };

  const subtitleSizes = {
    sm: "text-[9px]",
    md: "text-[11px]", // slightly increased from text-[10px]
    lg: "text-[13px]", // slightly increased from text-xs/sm
  };

  const gaps = {
    sm: "gap-2.5",
    md: "gap-3.5",
    lg: "gap-4.5",
  };

  return (
    <div className={`flex items-center ${gaps[size]} ${className} select-none`}>
      {/* 
        High-Fidelity standalone brand icon cropped from your uploaded logo image.
        The transparent background is isolated and the original red-orange colors are 
        identical and pixel-perfect in both dark and light modes.
      */}
      <img
        src="/logo-icon.png"
        alt="Alonzo AI Brand Icon"
        className={`${heights[size]} w-auto object-contain hover:scale-105 transition-transform duration-300`}
      />

      {/* Brand typography positioned elegantly to the right of the icon */}
      <div className="flex flex-col">
        <span className={`font-serif tracking-[0.16em] text-slate-100 ${titleSizes[size]} font-bold leading-none uppercase transition-colors`}>
          Alonzo AI
        </span>
        <span className={`font-serif ${subtitleSizes[size]} tracking-[0.06em] text-orange-400 [.light_&]:text-orange-600 font-semibold transition-colors mt-1`}>
          Bespoke AI Solutions
        </span>
      </div>
    </div>
  );
};
