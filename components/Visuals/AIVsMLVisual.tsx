
import React from 'react';

const AIVsMLVisual: React.FC<{ isAnimating: boolean }> = ({ isAnimating }) => {
  return (
    <div className="relative w-full h-72 bg-white rounded-[2.5rem] overflow-hidden border-4 border-slate-50 flex items-center justify-center p-8">
      <svg viewBox="0 0 400 300" className="w-full h-full">
        {/* AI Circle */}
        <circle 
            cx="200" cy="150" r="140" 
            fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" 
            className={`transition-all duration-1000 ${isAnimating ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
        />
        <text x="200" y="40" textAnchor="middle" className="text-xs font-black fill-indigo-400 uppercase tracking-widest">Artificial Intelligence</text>

        {/* ML Circle */}
        <circle 
            cx="200" cy="170" r="90" 
            fill="#c7d2fe" stroke="#4f46e5" strokeWidth="2" 
            className={`transition-all duration-1000 delay-300 ${isAnimating ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
        />
        <text x="200" y="110" textAnchor="middle" className="text-xs font-black fill-indigo-600 uppercase tracking-widest">Machine Learning</text>

        {/* DL Circle */}
        <circle 
            cx="200" cy="190" r="40" 
            fill="#4f46e5" stroke="#312e81" strokeWidth="2" 
            className={`transition-all duration-1000 delay-700 ${isAnimating ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
        />
        <text x="200" y="194" textAnchor="middle" className="text-[10px] font-black fill-white uppercase tracking-widest">Deep Learning</text>
        
        {/* Labels for what they are */}
        {isAnimating && (
            <g className="animate-[fadeIn_2s_delay-1s_forwards] opacity-0">
                <text x="60" y="150" className="text-[8px] fill-slate-500">The Broad Science</text>
                <text x="340" y="150" textAnchor="end" className="text-[8px] fill-slate-500">Learning Patterns</text>
                <text x="200" y="250" textAnchor="middle" className="text-[8px] fill-slate-500">Neural Networks</text>
            </g>
        )}
      </svg>
    </div>
  );
};

export default AIVsMLVisual;
