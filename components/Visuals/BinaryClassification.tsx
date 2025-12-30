
import React, { useState, useEffect } from 'react';

const BinaryClassification: React.FC<{ isAnimating: boolean }> = ({ isAnimating }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!isAnimating) return;
    const interval = setInterval(() => {
      setOffset(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, [isAnimating]);

  const bluePoints = [
    { x: 50, y: 50 }, { x: 80, y: 40 }, { x: 40, y: 90 }, { x: 100, y: 60 }, { x: 70, y: 110 }
  ];
  const redPoints = [
    { x: 300, y: 150 }, { x: 340, y: 180 }, { x: 280, y: 120 }, { x: 350, y: 100 }, { x: 250, y: 170 }
  ];

  const lineY1 = 20;
  const lineY2 = 180;
  const lineX = 180 + Math.sin(offset / 10) * 20;

  return (
    <div className="relative w-full h-64 bg-white rounded-xl overflow-hidden border-2 border-slate-100 flex items-center justify-center">
      <svg className="w-full h-full p-8" viewBox="0 0 400 200">
        {/* Background Areas */}
        <rect x="0" y="0" width={lineX} height="200" fill="#eff6ff" className="transition-all duration-300" />
        <rect x={lineX} y="0" width={400 - lineX} height="200" fill="#fff1f2" className="transition-all duration-300" />

        {/* Boundary Line */}
        <line
          x1={lineX} y1={lineY1} x2={lineX} y2={lineY2}
          stroke="#64748b"
          strokeWidth="4"
          strokeDasharray="8"
          className="transition-all duration-300"
        />

        {/* Points */}
        {bluePoints.map((p, i) => (
          <circle key={`b-${i}`} cx={p.x} cy={p.y} r="8" fill="#3b82f6" className="shadow-sm" />
        ))}
        {redPoints.map((p, i) => (
          <circle key={`r-${i}`} cx={p.x} cy={p.y} r="8" fill="#f43f5e" className="shadow-sm" />
        ))}

        <text x={lineX - 10} y="15" textAnchor="end" className="text-[10px] font-bold fill-blue-600">CLASS A</text>
        <text x={lineX + 10} y="15" textAnchor="start" className="text-[10px] font-bold fill-rose-600">CLASS B</text>
      </svg>

      {!isAnimating && (
        <div className="absolute inset-0 bg-slate-900/5 flex items-center justify-center pointer-events-none backdrop-blur-[1px]">
          <p className="text-slate-800 font-bold bg-white/90 px-4 py-2 rounded-full border border-slate-200 shadow-md">⏸ Paused</p>
        </div>
      )}
    </div>
  );
};

export default BinaryClassification;
