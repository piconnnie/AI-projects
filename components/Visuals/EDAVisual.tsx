
import React from 'react';

const EDAVisual: React.FC<{ isAnimating: boolean }> = ({ isAnimating }) => {
  // Simple histogram data
  const bars = [10, 25, 45, 80, 50, 30, 15, 5];
  
  return (
    <div className="relative w-full h-72 bg-white rounded-[2.5rem] overflow-hidden border-4 border-slate-50 flex items-center justify-center p-8">
      <svg viewBox="0 0 400 200" className="w-full h-full">
        {/* Scatter Plot representation on left */}
        <g transform="translate(0, 0)">
            <text x="60" y="20" className="text-[8px] font-bold fill-slate-400 uppercase">Distribution</text>
            {/* Histogram Bars */}
            {bars.map((h, i) => (
                <rect 
                    key={i}
                    x={20 + i * 15}
                    y={150 - h}
                    width="10"
                    height={h}
                    fill={isAnimating ? "#6366f1" : "#cbd5e1"}
                    className="transition-all duration-500"
                    style={{ transitionDelay: `${i * 100}ms` }}
                />
            ))}
            <line x1="10" y1="150" x2="150" y2="150" stroke="#94a3b8" strokeWidth="2" />
        </g>

        {/* Outlier Detection on right */}
        <g transform="translate(200, 0)">
            <text x="60" y="20" className="text-[8px] font-bold fill-slate-400 uppercase">Outlier Detection</text>
            <line x1="20" y1="150" x2="180" y2="150" stroke="#94a3b8" strokeWidth="2" />
            <line x1="20" y1="20" x2="20" y2="150" stroke="#94a3b8" strokeWidth="2" />
            
            {/* Normal points */}
            {[...Array(15)].map((_, i) => (
                <circle 
                    key={i}
                    cx={30 + Math.random() * 100}
                    cy={140 - Math.random() * 100}
                    r="4"
                    fill="#cbd5e1"
                />
            ))}

            {/* The Outlier */}
            <circle 
                cx="160" cy="40" r="6" 
                fill={isAnimating ? "#f43f5e" : "#cbd5e1"} 
                className={isAnimating ? "animate-ping" : ""}
            />
            <circle cx="160" cy="40" r="6" fill={isAnimating ? "#f43f5e" : "#cbd5e1"} />
            
            {isAnimating && (
                <text x="160" y="25" textAnchor="middle" className="text-[8px] font-black fill-rose-500 uppercase animate-bounce">Weird!</text>
            )}
        </g>
        
        {/* Divider */}
        <line x1="180" y1="20" x2="180" y2="180" stroke="#f1f5f9" strokeWidth="2" strokeDasharray="4" />
      </svg>
    </div>
  );
};

export default EDAVisual;
