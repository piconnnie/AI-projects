
import React from 'react';

const GradientDescent: React.FC<{ isAnimating: boolean }> = ({ isAnimating }) => {
  // A clearer U-shaped valley path
  const motionPath = "M 40 40 C 40 160, 200 240, 200 180 C 200 240, 360 160, 360 40";
  // The path the ball actually takes (one side of the valley to the bottom)
  const learningPath = "M 60 45 C 80 180, 200 200, 200 180";
  
  return (
    <div className="relative w-full h-72 bg-slate-50 rounded-[3rem] overflow-hidden border-4 border-slate-100 shadow-inner group">
      {/* 3D-ish Grid Overlay for 'Landscape' feel */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 400 200">
        {Array.from({ length: 10 }).map((_, i) => (
          <path 
            key={i}
            d={`M 0 ${20 * i} Q 200 ${200 + i * 10} 400 ${20 * i}`} 
            fill="none" 
            stroke="#6366f1" 
            strokeWidth="1" 
          />
        ))}
      </svg>

      <svg className="w-full h-full p-8" viewBox="0 0 400 200">
        {/* The Main Loss Valley */}
        <path 
          d="M 40 40 C 80 220, 320 220, 360 40" 
          fill="none" 
          stroke="#cbd5e1" 
          strokeWidth="8" 
          strokeLinecap="round" 
          strokeOpacity="0.5"
        />

        {/* Step Markers (The 'Walking' Analogy) */}
        <g className={isAnimating ? 'opacity-100' : 'opacity-20 transition-opacity'}>
          {[0.1, 0.25, 0.45, 0.7, 0.95].map((dist, i) => (
            <circle 
              key={i} 
              r="3" 
              fill="#6366f1" 
              className={isAnimating ? 'animate-pulse' : ''}
              style={{
                offsetPath: `path('M 60 45 C 80 220, 200 220, 200 185')`,
                offsetDistance: `${dist * 100}%`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </g>
        
        {/* The Goal / Local Minimum */}
        <g transform="translate(200, 185)">
            <circle r="25" fill="#10b981" fillOpacity="0.1" className={isAnimating ? "animate-ping" : ""} />
            <circle r="6" fill="#10b981" />
            <text y="20" textAnchor="middle" className="text-[8px] font-black fill-emerald-600 uppercase tracking-tighter">Perfect Guess</text>
        </g>

        {/* The Ball (The Model's Current State) */}
        {isAnimating ? (
          <g style={{
              offsetPath: `path('M 60 45 C 80 220, 200 220, 200 185')`,
              animation: 'descentSteps 4s cubic-bezier(0.45, 0, 0.55, 1) infinite',
          }}>
             {/* Velocity Tail */}
             <line x1="-15" y1="0" x2="0" y2="0" stroke="#6366f1" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.3" />
             <circle r="12" fill="#6366f1" stroke="white" strokeWidth="3" className="shadow-xl" />
             <path d="M -4 -2 L 4 -2 M -4 2 L 4 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
          </g>
        ) : (
          <g transform="translate(60, 45)">
            <circle r="12" fill="#94a3b8" stroke="white" strokeWidth="3" />
            <text y="-20" textAnchor="middle" className="text-[8px] font-black fill-slate-400 uppercase tracking-widest">High Error</text>
          </g>
        )}
      </svg>
      
      {/* Slope Indicators */}
      <div className="absolute top-6 left-8 flex flex-col gap-1">
          <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Terrain: Steep (High Gradient)</div>
          {isAnimating && (
            <div className="flex items-center gap-2 bg-indigo-600 text-white px-3 py-1 rounded-full shadow-lg scale-90 origin-left">
               <span className="text-xs">🏃‍♂️</span>
               <div className="text-[9px] font-black uppercase tracking-widest">Finding the path...</div>
            </div>
          )}
      </div>

      <div className="absolute bottom-6 right-8 text-right">
          <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Terrain: Flat (Goal Reached)</div>
      </div>

      <style>{`
        @keyframes descentSteps {
          0% { offset-distance: 0%; transform: scale(1); }
          20% { offset-distance: 25%; transform: scale(1.1); }
          40% { offset-distance: 50%; transform: scale(1.05); }
          60% { offset-distance: 75%; transform: scale(1); }
          85%, 100% { offset-distance: 100%; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default GradientDescent;
