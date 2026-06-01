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
    sm: "h-8",
    md: "h-11",
    lg: "h-16",
  };

  return (
    <div className={`flex items-center gap-3.5 ${className} select-none`}>
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
        <span className="font-serif tracking-[0.16em] text-slate-900 dark:text-slate-100 text-lg font-bold leading-none uppercase transition-colors">
          Alonzo AI
        </span>
        <span className="font-serif text-[10px] tracking-[0.06em] text-orange-600 dark:text-orange-400 font-semibold transition-colors mt-1">
          Bespoke AI Solutions
        </span>
      </div>
    </div>
  );
};
