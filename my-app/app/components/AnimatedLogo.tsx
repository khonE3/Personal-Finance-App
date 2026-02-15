
import React from 'react';

const AnimatedLogo = () => {
  return (
    <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
      {/* Outer pulsing shine */}
      <div className="absolute inset-0 bg-indigo-500/20 dark:bg-pink-500/20 rounded-full blur-xl animate-pulse"></div>
      
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full drop-shadow-lg"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lotusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" className="stop-indigo-600 dark:stop-indigo-400" stopColor="currentColor" />
            <stop offset="100%" className="stop-pink-500 dark:stop-pink-400" stopColor="currentColor" />
          </linearGradient>
        </defs>
        
        {/* Rotating Outer Petals */}
        <g className="origin-center animate-[spin_10s_linear_infinite]">
            {[0, 60, 120, 180, 240, 300].map((rotation, i) => (
                <path
                    key={`outer-${i}`}
                    d="M50 15 C60 30 65 40 50 50 C35 40 40 30 50 15"
                    fill="url(#lotusGradient)"
                    className="opacity-80"
                    transform={`rotate(${rotation} 50 50)`}
                />
            ))}
        </g>
        
        {/* Inner Blooming Petals */}
        <g className="origin-center animate-[pulse_3s_ease-in-out_infinite]">
             {[30, 90, 150, 210, 270, 330].map((rotation, i) => (
                <path
                    key={`inner-${i}`}
                    d="M50 25 C55 35 58 42 50 50 C42 42 45 35 50 25"
                    fill="url(#lotusGradient)"
                    className="opacity-90"
                    transform={`rotate(${rotation} 50 50)`}
                />
            ))}
        </g>
        
        {/* Core */}
        <circle cx="50" cy="50" r="6" className="fill-white dark:fill-slate-900" />
        <circle cx="50" cy="50" r="4" className="fill-indigo-500 dark:fill-pink-400 animate-ping opacity-75" />
      </svg>
    </div>
  );
};

export default AnimatedLogo;
