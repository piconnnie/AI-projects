
import React from 'react';

const EnsembleVisual: React.FC<{ isAnimating: boolean }> = ({ isAnimating }) => {
  return (
    <div className="relative w-full h-72 bg-slate-900 rounded-[2.5rem] overflow-hidden border-4 border-slate-800 flex flex-col items-center justify-center p-6">
      <div className="flex justify-around w-full mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-slate-800 border-2 border-slate-700 flex items-center justify-center relative">
              <span className="text-xl">🌲</span>
              {isAnimating && (
                <div className="absolute inset-0 bg-indigo-500/20 rounded-xl animate-pulse" />
              )}
            </div>
            <span className={`text-[8px] font-black uppercase tracking-widest ${isAnimating ? 'text-indigo-400' : 'text-slate-600'}`}>Tree {i}</span>
            <div className={`mt-2 text-xs transition-opacity duration-1000 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
              {i === 3 ? '❌' : '✅'}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-0.5 bg-slate-800 relative">
        {isAnimating && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-[shimmer_2s_infinite]" />
        )}
      </div>

      <div className="mt-8 flex flex-col items-center">
        <div className="w-20 h-10 rounded-full bg-indigo-600 flex items-center justify-center border-2 border-indigo-400 shadow-lg shadow-indigo-500/20">
          <span className="text-white font-black text-xs">MAJORITY</span>
        </div>
        <div className={`mt-4 text-2xl transition-all transform duration-700 ${isAnimating ? 'scale-125 opacity-100' : 'scale-50 opacity-0'}`}>
          ✅
        </div>
      </div>
      
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default EnsembleVisual;
