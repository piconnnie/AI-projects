import React from 'react';

const LinearRegression: React.FC<{ isAnimating: boolean }> = ({ isAnimating }) => {
  const points = [
    { x: 50, y: 150 }, { x: 80, y: 130 }, { x: 120, y: 140 },
    { x: 160, y: 100 }, { x: 200, y: 110 }, { x: 240, y: 70 },
    { x: 280, y: 85 }, { x: 320, y: 50 }, { x: 350, y: 30 }
  ];

  return (
    <div className="relative w-full h-56 bg-white rounded-xl overflow-hidden border border-slate-100 flex items-center justify-center p-4">
      <svg className="w-full h-full" viewBox="0 0 400 200">
        <line x1="20" y1="180" x2="380" y2="180" stroke="#cbd5e1" strokeWidth="2" />
        <line x1="20" y1="20" x2="20" y2="180" stroke="#cbd5e1" strokeWidth="2" />

        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="3" fill="#6366f1" className="opacity-40" />
        ))}

        <line
          x1="20" y1="180" x2="380" y2="20"
          stroke="#f43f5e"
          strokeWidth="3"
          strokeLinecap="round"
          style={{
            transformOrigin: '20px 180px',
            animation: isAnimating ? 'regress 4s ease-in-out infinite' : 'none',
            opacity: isAnimating ? 1 : 0.3
          }}
        />
      </svg>
      
      <style>{`
        @keyframes regress {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-30deg); }
        }
      `}</style>
    </div>
  );
};

export default LinearRegression;