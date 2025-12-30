
import React, { useState, useEffect } from 'react';

const KNNVisual: React.FC<{ isAnimating: boolean }> = ({ isAnimating }) => {
  const [phase, setPhase] = useState(0);
  
  const points = [
    { x: 50, y: 50, type: 'A' }, { x: 80, y: 70, type: 'A' }, { x: 40, y: 100, type: 'A' },
    { x: 320, y: 140, type: 'B' }, { x: 350, y: 110, type: 'B' }, { x: 290, y: 170, type: 'B' }
  ];

  const queryPoint = { x: 180, y: 110 };

  useEffect(() => {
    if (!isAnimating) return;
    const interval = setInterval(() => {
      setPhase(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <div className="relative w-full h-72 bg-white rounded-[2.5rem] overflow-hidden border-4 border-slate-50 flex items-center justify-center p-8">
      <svg viewBox="0 0 400 200" className="w-full h-full">
        {points.map((p, i) => {
          const dist = Math.sqrt(Math.pow(p.x - queryPoint.x, 2) + Math.pow(p.y - queryPoint.y, 2));
          const isActive = isAnimating && dist < 150;

          return (
            <g key={i}>
              {isActive && (
                <line 
                  x1={queryPoint.x} y1={queryPoint.y} x2={p.x} y2={p.y} 
                  stroke={p.type === 'A' ? '#6366f1' : '#f43f5e'} 
                  strokeWidth="1" 
                  strokeDasharray="4"
                  className="animate-[dash_2s_linear_infinite]"
                />
              )}
              <circle cx={p.x} cy={p.y} r="8" fill={p.type === 'A' ? '#6366f1' : '#f43f5e'} />
            </g>
          );
        })}

        <circle cx={queryPoint.x} cy={queryPoint.y} r="10" fill="white" stroke="#94a3b8" strokeWidth="3" />
        <text x={queryPoint.x} y={queryPoint.y + 25} textAnchor="middle" className="text-[10px] font-black fill-slate-500 uppercase tracking-widest">Query Point</text>
        
        {isAnimating && (
          <circle cx={queryPoint.x} cy={queryPoint.y} r="150" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="8">
             <animate attributeName="r" values="0;150" dur="4s" repeatCount="indefinite" />
          </circle>
        )}
      </svg>
    </div>
  );
};

export default KNNVisual;
