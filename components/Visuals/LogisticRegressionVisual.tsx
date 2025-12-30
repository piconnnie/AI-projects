
import React from 'react';

const LogisticRegressionVisual: React.FC<{ isAnimating: boolean }> = ({ isAnimating }) => {
  const sigmoidPath = "M 50 170 C 150 170 250 30 350 30";

  return (
    <div className="relative w-full h-72 bg-white rounded-[2.5rem] overflow-hidden border-4 border-slate-50 flex items-center justify-center p-8">
      <svg viewBox="0 0 400 200" className="w-full h-full">
        <line x1="50" y1="180" x2="350" y2="180" stroke="#cbd5e1" strokeWidth="2" />
        <line x1="50" y1="20" x2="350" y2="20" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4" />
        
        <path
          d={sigmoidPath}
          fill="none"
          stroke="#6366f1"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {[50, 80, 110, 140, 260, 290, 320, 350].map((x, i) => (
          <circle
            key={i}
            cx={x}
            cy={x < 200 ? 170 : 30}
            r="5"
            fill={x < 200 ? "#f43f5e" : "#10b981"}
            fillOpacity="0.4"
          />
        ))}

        {isAnimating && (
          <g style={{
            offsetPath: `path('${sigmoidPath}')`,
            animation: 'slideProb 3s linear infinite'
          }}>
            <circle r="8" fill="#6366f1" stroke="white" strokeWidth="2" />
          </g>
        )}

        <text x="360" y="30" className="text-[10px] font-black fill-emerald-600">PROB: 1</text>
        <text x="360" y="180" className="text-[10px] font-black fill-rose-600">PROB: 0</text>
      </svg>
      <style>{`
        @keyframes slideProb {
          0% { offset-distance: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default LogisticRegressionVisual;
