
import React, { useState, useEffect } from 'react';

const TokenizationVisual: React.FC<{ isAnimating: boolean }> = ({ isAnimating }) => {
  const [view, setView] = useState<'text' | 'tokens' | 'ids'>('text');
  
  useEffect(() => {
    if (!isAnimating) {
        setView('text');
        return;
    }
    const interval = setInterval(() => {
        setView(current => {
            if (current === 'text') return 'tokens';
            if (current === 'tokens') return 'ids';
            return 'text';
        });
    }, 2000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  const sentence = "Generative AI is amazing";
  const tokens = [
    { text: "Generative", id: 18452, color: "bg-rose-200 text-rose-800" },
    { text: " AI", id: 9552, color: "bg-blue-200 text-blue-800" },
    { text: " is", id: 318, color: "bg-emerald-200 text-emerald-800" },
    { text: " amazing", id: 6821, color: "bg-amber-200 text-amber-800" }
  ];

  return (
    <div className="relative w-full h-72 bg-slate-900 rounded-[2.5rem] overflow-hidden border-4 border-slate-800 flex flex-col items-center justify-center p-8 shadow-2xl">
        <div className="absolute top-6 left-6 text-[10px] font-black text-slate-500 uppercase tracking-widest">
            {view === 'text' ? 'Raw Input' : view === 'tokens' ? 'Token Chunks' : 'Numerical IDs'}
        </div>

        <div className="flex gap-2 flex-wrap justify-center items-center h-24">
            {view === 'text' && (
                <span className="text-3xl font-black text-white tracking-wide animate-enter">
                    {sentence}
                </span>
            )}
            
            {view === 'tokens' && tokens.map((t, i) => (
                <div 
                    key={i} 
                    className={`px-3 py-2 rounded-lg font-bold text-lg shadow-lg transform transition-all duration-500 scale-100 ${t.color}`}
                >
                    {t.text}
                </div>
            ))}

            {view === 'ids' && tokens.map((t, i) => (
                <div 
                    key={i} 
                    className={`px-3 py-2 rounded-lg font-mono font-bold text-lg shadow-lg border-2 border-slate-700 text-slate-300 bg-slate-800 transform transition-all duration-500`}
                >
                    {t.id}
                </div>
            ))}
        </div>
        
        <div className="mt-8 flex gap-2">
            <div className={`w-3 h-3 rounded-full transition-colors ${view === 'text' ? 'bg-indigo-500' : 'bg-slate-700'}`} />
            <div className={`w-3 h-3 rounded-full transition-colors ${view === 'tokens' ? 'bg-indigo-500' : 'bg-slate-700'}`} />
            <div className={`w-3 h-3 rounded-full transition-colors ${view === 'ids' ? 'bg-indigo-500' : 'bg-slate-700'}`} />
        </div>
        
        <div className="mt-2 text-[10px] font-black text-slate-500 uppercase tracking-widest">
            {isAnimating ? 'Processing Pipeline...' : 'Static View'}
        </div>
    </div>
  );
};

export default TokenizationVisual;
