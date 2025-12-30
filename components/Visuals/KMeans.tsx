import React from 'react';

const KMeans: React.FC<{ isAnimating: boolean }> = ({ isAnimating }) => {
  const points = [
    { x: 60, y: 60, group: 1 }, { x: 80, y: 50, group: 1 }, { x: 70, y: 80, group: 1 },
    { x: 300, y: 150, group: 2 }, { x: 320, y: 130, group: 2 }, { x: 340, y: 160, group: 2 },
    { x: 150, y: 160, group: 3 }, { x: 180, y: 140, group: 3 }, { x: 160, y: 180, group: 3 }
  ];

  return (
    <div className="relative w-full h-56 bg-slate-50 rounded-xl overflow-hidden border border-slate-100 flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 400 200">
        {points.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="5"
            fill={!isAnimating ? '#cbd5e1' : (p.group === 1 ? '#fbbf24' : p.group === 2 ? '#10b981' : '#6366f1')}
            className="transition-colors duration-700"
          />
        ))}

        {[1, 2, 3].map((id) => (
          <g key={id} style={{
            transform: `translate(${id === 1 ? 80 : id === 2 ? 310 : 160}px, ${id === 1 ? 60 : id === 2 ? 140 : 160}px)`,
            animation: isAnimating ? `centroidMove${id} 5s ease-in-out infinite` : 'none'
          }}>
            <rect x="-6" y="-6" width="12" height="12" fill={id === 1 ? '#fbbf24' : id === 2 ? '#10b981' : '#6366f1'} stroke="white" strokeWidth="2" rx="3" />
          </g>
        ))}
      </svg>
      
      <style>{`
        @keyframes centroidMove1 { 0%, 100% { transform: translate(80px, 60px); } 50% { transform: translate(110px, 100px); } }
        @keyframes centroidMove2 { 0%, 100% { transform: translate(310px, 140px); } 50% { transform: translate(270px, 110px); } }
        @keyframes centroidMove3 { 0%, 100% { transform: translate(160px, 160px); } 50% { transform: translate(190px, 180px); } }
      `}</style>
    </div>
  );
};

export default KMeans;