import React from 'react';

const ForwardProp: React.FC<{ isAnimating: boolean }> = ({ isAnimating }) => {
  const particleCount = 10;
  const particles = Array.from({ length: particleCount }).map((_, i) => ({
    id: i,
    delay: i * 0.35,
    path: i % 2 === 0 ? 'top' : 'bottom'
  }));

  return (
    <div className="relative w-full h-60 bg-slate-950 rounded-[2.5rem] overflow-hidden flex items-center justify-around border-4 border-slate-900 shadow-xl">
      <div className="absolute inset-0 opacity-[0.1]" 
           style={{ 
             backgroundImage: 'radial-gradient(circle at center, #6366f1 1px, transparent 1px)', 
             backgroundSize: '20px 20px' 
           }} />
      
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <filter id="glow-heavy">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>
          <linearGradient id="flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
        
        <g stroke="rgba(255,255,255,0.05)" strokeWidth="2" strokeLinecap="round">
          <line x1="25%" y1="50%" x2="50%" y2="35%" />
          <line x1="25%" y1="50%" x2="50%" y2="65%" />
          <line x1="50%" y1="35%" x2="75%" y2="50%" />
          <line x1="50%" y1="65%" x2="75%" y2="50%" />
        </g>
        
        <g stroke="url(#flow-grad)" strokeWidth="1.5" filter="url(#glow-heavy)" 
           className={isAnimating ? 'opacity-40 transition-opacity duration-1000' : 'opacity-0'}>
          <line x1="25%" y1="50%" x2="50%" y2="35%" />
          <line x1="25%" y1="50%" x2="50%" y2="65%" />
          <line x1="50%" y1="35%" x2="75%" y2="50%" />
          <line x1="50%" y1="65%" x2="75%" y2="50%" />
        </g>
      </svg>

      <div className="z-10 flex flex-col items-center">
        <div className="text-[7px] font-black text-indigo-400 mb-2 tracking-[0.4em] uppercase opacity-60">Input</div>
        <div className="w-12 h-12 rounded-xl bg-indigo-600/90 border-2 border-indigo-400 flex items-center justify-center text-white shadow-lg">
          <span className="text-xl">🖼️</span>
        </div>
      </div>

      <div className="z-10 flex flex-col gap-10">
        <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-purple-500/50 flex items-center justify-center">
            <div className={`w-4 h-4 rounded-full bg-purple-500/20 ${isAnimating ? 'animate-ping' : ''}`}></div>
        </div>
        <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-purple-500/50 flex items-center justify-center">
            <div className={`w-4 h-4 rounded-full bg-purple-500/20 ${isAnimating ? 'animate-ping' : ''}`} style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      <div className="z-10 flex flex-col items-center">
        <div className="text-[7px] font-black text-emerald-400 mb-2 tracking-[0.4em] uppercase opacity-60">Output</div>
        <div className={`w-14 h-14 rounded-2xl transition-all duration-700 border-2 flex flex-col items-center justify-center text-white ${isAnimating ? 'bg-emerald-600 border-emerald-400 shadow-emerald-500/20' : 'bg-slate-800 border-slate-700'}`}>
          <span className="text-2xl">{isAnimating ? '💡' : '🌑'}</span>
        </div>
      </div>

      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#ffffff] z-20"
          style={{
            animation: `flow${p.path} 2s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
            animationDelay: `${p.delay}s`,
            animationPlayState: isAnimating ? 'running' : 'paused',
            left: '25%',
            top: '50%',
            opacity: isAnimating ? 1 : 0,
          }}
        />
      ))}

      <style>{`
        @keyframes flowtop {
          0% { left: 25%; top: 50%; opacity: 0; transform: scale(0.2); }
          15% { opacity: 1; transform: scale(1.2); }
          45% { left: 50%; top: 35%; transform: scale(1); }
          55% { left: 50%; top: 35%; }
          85% { opacity: 1; transform: scale(1.2); }
          100% { left: 75%; top: 50%; opacity: 0; transform: scale(0.2); }
        }
        @keyframes flowbottom {
          0% { left: 25%; top: 50%; opacity: 0; transform: scale(0.2); }
          15% { opacity: 1; transform: scale(1.2); }
          45% { left: 50%; top: 65%; transform: scale(1); }
          55% { left: 50%; top: 65%; }
          85% { opacity: 1; transform: scale(1.2); }
          100% { left: 75%; top: 50%; opacity: 0; transform: scale(0.2); }
        }
      `}</style>
    </div>
  );
};

export default ForwardProp;