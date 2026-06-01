import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  showText = true,
  size = "md",
}) => {
  const iconSizes = {
    sm: "h-8 w-8",
    md: "h-11 w-11",
    lg: "h-16 w-16",
  };

  return (
    <div className={`flex items-center gap-3 ${className} select-none`}>
      {/* Dynamic Geometric Logo Shape (Alonzo AI stylized 'A' Origami Vector) */}
      <svg
        id="alonzo-logo-svg"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${iconSizes[size]} transform transition-transform hover:scale-105 duration-300`}
      >
        <defs>
          <linearGradient id="leftBarGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#991b1b" /> {/* Deep Crimson */}
            <stop offset="40%" stopColor="#dc2626" /> {/* Red */}
            <stop offset="100%" stopColor="#ea580c" /> {/* Deep Orange */}
          </linearGradient>
          <linearGradient id="rightBarGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ea580c" /> {/* Orange */}
            <stop offset="60%" stopColor="#f97316" /> {/* Bright Orange */}
            <stop offset="100%" stopColor="#facc15" /> {/* Yellow */}
          </linearGradient>
          <linearGradient id="crossBarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b91c1c" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Abstract Triangle 'A' Origami Structure */}
        {/* Left main thick stroke (gradient crimson -> deep orange) */}
        <path
          d="M 50 10 L 15 85 L 30 85 L 50 40 Z"
          fill="url(#leftBarGrad)"
        />

        {/* Right main thick stroke (gradient orange -> bright yellow) with offset cut */}
        <path
          d="M 50 10 L 58 26 L 46 54 L 64 85 L 80 85 Z"
          fill="url(#rightBarGrad)"
        />

        {/* Dynamic connection crossbar forming the base of 'A' */}
        <path
          d="M 28 80 L 66 80 L 61 70 L 33 70 Z"
          fill="url(#crossBarGrad)"
          opacity="0.9"
        />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className="font-serif tracking-[0.25em] text-slate-100 text-lg font-bold leading-tight uppercase">
            Alonzo AI
          </span>
          <span className="font-sans text-[10px] tracking-[0.18em] text-orange-400 font-medium uppercase min-w-[130px]">
            Bespoke AI Solutions
          </span>
        </div>
      )}
    </div>
  );
};
