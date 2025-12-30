
import React from 'react';

const TrainTestVisual: React.FC<{ isAnimating: boolean }> = ({ isAnimating }) => {
  const dataPoints = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    x: (i % 10) * 35 + 20,
    y: Math.floor(i / 10) * 35 + 30,
    isTest: i >= 40 // Last 10 points are test
  }));

  return (
    <div className="relative w-full h-72 bg-slate-50 rounded-[2.5rem] overflow-hidden border-4 border-slate-100 flex flex-col items-center justify-center p-8">
      <div className="absolute top-4 w-full flex justify-between px-12">
        <span className="text-[10px] font-black text-indigo-500 uppercase">Training Data (80%)</span>
        <span className="text-[10px] font-black text-rose-500 uppercase">Testing Data (20%)</span>
      </div>
      
      <svg viewBox="0 0 400 200" className="w-full h-full">
        {dataPoints.map((p) => (
          <circle 
            key={p.id}
            cx={p.x}
            cy={p.y}
            r="6"
            fill={!isAnimating ? '#94a3b8' : (p.isTest ? '#f43f5e' : '#6366f1')}
            className="transition-colors duration-1000"
          />
        ))}

        {/* The Split Line */}
        {isAnimating && (
            <line 
                x1="330" y1="10" x2="330" y2="190" 
                stroke="#cbd5e1" strokeWidth="4" strokeDasharray="8" 
                className="animate-[appear_0.5s_ease-out]"
            />
        )}
        
        {/* Icons */}
        {isAnimating && (
            <g className="animate-[pop_0.5s_0.5s_both]">
                <text x="160" y="110" fontSize="40" textAnchor="middle" opacity="0.2">📚</text>
                <text x="365" y="110" fontSize="40" textAnchor="middle" opacity="0.2">🎓</text>
            </g>
        )}
      </svg>
    </div>
  );
};

export default TrainTestVisual;
