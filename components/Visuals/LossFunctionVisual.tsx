
import React, { useState, useEffect } from 'react';

const LossFunctionVisual: React.FC<{ isAnimating: boolean }> = ({ isAnimating }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!isAnimating) return;
    const interval = setInterval(() => {
      setOffset(prev => (prev + 0.04) % (Math.PI * 2));
    }, 40);
    return () => clearInterval(interval);
  }, [isAnimating]);

  const targetX = 300;
  const targetY = 100;
  const predX = isAnimating ? 150 + Math.sin(offset) * 100 : 120;
  const predY = 100;
  
  const distance = Math.abs(targetX - predX);
  const lossValue = distance.toFixed(1);
  const red = Math.min(255, distance * 2);
  const green = Math.max(0, 255 - distance * 2);
  const colorSeverity = `rgb(${red}, ${green}, 100)`;

  return (
    <div className="relative w-full h-72 bg-slate-900 rounded-[2.5rem] overflow-hidden border-4 border-slate-800 flex items-center justify-center p-8 shadow-2xl">
      <svg viewBox="0 0 400 200" className="w-full h-full">
        <circle cx={targetX} cy={targetY} r="30" fill="#10b981" fillOpacity="0.1" className="animate-pulse" />
        <circle cx={targetX} cy={targetY} r="3" fill="#10b981" />
        
        <g className="transition-transform duration-300">
          <circle cx={predX} cy={predY} r="10" fill="#6366f1" stroke="white" strokeWidth="2" />
        </g>

        <line 
          x1={predX} y1={predY} 
          x2={targetX} y2={targetY} 
          stroke={colorSeverity} 
          strokeWidth="4" 
          strokeDasharray="6"
          opacity="0.8"
        />
        
        <g transform={`translate(${(predX + targetX) / 2}, ${predY - 20})`}>
          <rect x="-35" y="-12" width="70" height="24" rx="12" fill={colorSeverity} />
          <text textAnchor="middle" y="4" className="text-[10px] font-black fill-white">LOSS: {lossValue}</text>
        </g>
      </svg>

      <div className="absolute top-8 left-8">
          <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">Error Gradient</div>
          <div className="text-3xl font-black italic transition-colors duration-300" style={{ color: colorSeverity }}>
            {distance < 40 ? 'LOW' : distance < 100 ? 'MID' : 'HIGH'}
          </div>
      </div>
    </div>
  );
};

export default LossFunctionVisual;
