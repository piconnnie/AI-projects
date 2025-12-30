
import React, { useState, useEffect } from 'react';

const LLMVisual: React.FC<{ isAnimating: boolean }> = ({ isAnimating }) => {
  const [step, setStep] = useState(0);
  
  useEffect(() => {
    if (!isAnimating) {
        setStep(0);
        return;
    }
    const interval = setInterval(() => {
      setStep(prev => (prev + 1) % 4);
    }, 1500);
    return () => clearInterval(interval);
  }, [isAnimating]);

  const prompt = "The sky is";
  const predictions = [
    { word: "blue", prob: 85, color: "bg-indigo-500" },
    { word: "cloudy", prob: 10, color: "bg-slate-400" },
    { word: "falling", prob: 5, color: "bg-rose-400" },
  ];

  return (
    <div className="relative w-full h-72 bg-slate-900 rounded-[2.5rem] overflow-hidden border-4 border-slate-800 flex flex-col p-8 shadow-2xl">
      <div className="mb-6">
        <span className="text-slate-400 font-mono text-sm">PROMPT:</span>
        <div className="text-2xl font-black text-white mt-1">
            {prompt} <span className="text-indigo-400 animate-pulse">{step >= 1 ? "blue" : "..."}</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-end gap-3">
        <div className="flex justify-between text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">
            <span>Next Token Candidates</span>
            <span>Probability</span>
        </div>
        
        {predictions.map((p, i) => (
            <div key={i} className="relative h-8 w-full bg-slate-800 rounded-lg overflow-hidden flex items-center px-3 group">
                <div 
                    className={`absolute inset-0 ${p.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                />
                <div 
                    className={`absolute left-0 top-0 bottom-0 ${p.color} transition-all duration-1000 ease-out`}
                    style={{ width: isAnimating ? `${p.prob}%` : '0%' }}
                />
                <div className="relative z-10 flex justify-between w-full">
                    <span className="font-mono font-bold text-slate-200">{p.word}</span>
                    <span className="font-mono font-bold text-slate-400">{p.prob}%</span>
                </div>
            </div>
        ))}
      </div>

      {step >= 1 && isAnimating && (
        <div className="absolute top-8 right-8 text-4xl animate-bounce">
            🔵
        </div>
      )}
    </div>
  );
};

export default LLMVisual;
