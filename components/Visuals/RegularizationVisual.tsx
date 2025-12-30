
import React from 'react';

const RegularizationVisual: React.FC<{ isAnimating: boolean }> = ({ isAnimating }) => {
  const bars = [
    { label: 'Feature A', val: 90, color: '#6366f1' },
    { label: 'Feature B', val: 75, color: '#8b5cf6' },
    { label: 'Feature C', val: 40, color: '#ec4899' },
    { label: 'Feature D', val: 15, color: '#f43f5e' }
  ];

  return (
    <div className="relative w-full h-72 bg-slate-900 rounded-[2.5rem] overflow-hidden border-4 border-slate-800 p-8 flex flex-col justify-end">
      <div className="absolute top-8 left-8">
        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Complexity Punishment</div>
        <div className={`text-2xl font-black transition-colors ${isAnimating ? 'text-rose-500' : 'text-slate-400'}`}>
          {isAnimating ? 'Regulating...' : 'Overfitting'}
        </div>
      </div>

      <div className="flex items-end justify-around gap-4 h-32">
        {bars.map((bar, i) => (
          <div key={i} className="flex flex-col items-center flex-1 max-w-[50px] gap-2">
            <div className="w-full relative bg-slate-800 rounded-t-lg overflow-hidden h-32 flex flex-col justify-end">
                <div 
                  className="w-full transition-all duration-1000 ease-in-out"
                  style={{ 
                    height: isAnimating ? `${bar.val * 0.4}%` : `${bar.val}%`,
                    background: bar.color,
                    boxShadow: `0 0 20px ${bar.color}44`
                  }}
                />
            </div>
            <span className="text-[8px] font-bold text-slate-500 uppercase">{bar.label}</span>
          </div>
        ))}
      </div>
      
      {isAnimating && (
        <div className="absolute inset-0 pointer-events-none border-4 border-rose-500/20 animate-pulse rounded-[2.5rem]" />
      )}
    </div>
  );
};

export default RegularizationVisual;
