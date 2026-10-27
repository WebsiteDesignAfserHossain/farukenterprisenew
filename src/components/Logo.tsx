import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  lightMode?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  lightMode = false,
}) => {
  const sizeMap = {
    sm: { icon: 32, textClass: 'text-base', subTextClass: 'text-[9px]' },
    md: { icon: 42, textClass: 'text-lg', subTextClass: 'text-[10px]' },
    lg: { icon: 54, textClass: 'text-2xl', subTextClass: 'text-xs' },
    xl: { icon: 68, textClass: 'text-3xl', subTextClass: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Geometric FE Logo matching Page 1 */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <svg
          width={currentSize.icon}
          height={currentSize.icon}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm transition-transform duration-300 hover:scale-105"
        >
          {/* Background shield/hex or pure mark */}
          <rect width="100" height="100" rx="14" fill="#063820" />
          {/* Stylized 'F' bar - dark forest green / deep teal */}
          <path
            d="M 22 18 L 44 18 C 45 18 46 19 46 20 L 46 80 C 46 81.5 44.5 82 43 82 L 25 82 C 23.5 82 22 81 22 79.5 Z"
            fill="#105733"
          />
          {/* Top 'E' horizontal bar - vibrant emerald */}
          <path
            d="M 38 18 L 78 18 C 79.5 18 81 19.5 81 21 L 81 31 C 81 32.5 79.5 34 78 34 L 46 34 L 46 18 Z"
            fill="#16A34A"
          />
          {/* Middle 'E' horizontal bar with angled leaf accent */}
          <path
            d="M 46 44 L 72 44 C 73.5 44 75 45.5 75 47 L 75 56 C 75 57.5 73.5 59 72 59 L 46 59 Z"
            fill="#22C55E"
          />
          {/* Bottom 'E' horizontal bar */}
          <path
            d="M 38 66 L 78 66 C 79.5 66 81 67.5 81 69 L 81 79 C 81 80.5 79.5 82 78 82 L 44 82 L 44 66 Z"
            fill="#15803D"
          />
          {/* Leaf notch accent */}
          <path
            d="M 52 44 Q 60 38 68 44 Q 60 50 52 44 Z"
            fill="#86EFAC"
            opacity="0.85"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-black tracking-wider uppercase font-sans leading-none ${
              lightMode ? 'text-white' : 'text-emerald-950'
            } ${currentSize.textClass}`}
          >
            FARUK
          </span>
          <span
            className={`font-bold tracking-widest uppercase font-sans mt-0.5 leading-none ${
              lightMode ? 'text-emerald-300' : 'text-emerald-700'
            } ${currentSize.subTextClass}`}
          >
            ENTERPRISE
          </span>
        </div>
      )}
    </div>
  );
};
