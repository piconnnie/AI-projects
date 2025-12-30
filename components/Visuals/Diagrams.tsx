
import React from 'react';

const Diagrams: React.FC<{ id: string }> = ({ id }) => {
  switch (id) {
    case 'featurization':
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full p-8">
          <text x="20" y="40" className="text-[10px] font-black fill-slate-400">RAW DATA</text>
          <rect x="20" y="50" width="80" height="120" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
          <text x="30" y="80" className="text-[8px] fill-slate-400">"2023-10-12"</text>
          <text x="30" y="110" className="text-[8px] fill-slate-400">"Warm sunny day"</text>
          
          <path d="M 110 110 L 150 110" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow)" />
          
          <rect x="160" y="50" width="100" height="120" rx="12" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
          <text x="210" y="40" textAnchor="middle" className="text-[10px] font-black fill-indigo-500">ENGINEERING</text>
          <circle cx="210" cy="110" r="20" fill="#6366f1" fillOpacity="0.1" />
          <text x="210" y="115" textAnchor="middle" className="text-xl">⚙️</text>
          
          <path d="M 270 110 L 310 110" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow)" />
          
          <rect x="320" y="50" width="60" height="120" rx="8" fill="#f0fdf4" stroke="#10b981" strokeWidth="2" />
          <text x="350" y="80" textAnchor="middle" className="text-[8px] font-bold fill-emerald-600">IsWeekend: 1</text>
          <text x="350" y="110" textAnchor="middle" className="text-[8px] font-bold fill-emerald-600">Temp: 72</text>
          
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#6366f1" />
            </marker>
          </defs>
        </svg>
      );
    case 'multi-collinearity':
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full p-8">
          <circle cx="150" cy="120" r="60" fill="#6366f1" fillOpacity="0.2" stroke="#6366f1" strokeWidth="2" />
          <circle cx="250" cy="120" r="60" fill="#a855f7" fillOpacity="0.2" stroke="#a855f7" strokeWidth="2" />
          <text x="150" y="110" textAnchor="middle" className="text-[10px] font-black fill-indigo-600">AGE</text>
          <text x="250" y="110" textAnchor="middle" className="text-[10px] font-black fill-purple-600">YEAR</text>
          <text x="200" y="140" textAnchor="middle" className="text-[12px] font-black fill-slate-800">REDUNDANT INFO</text>
        </svg>
      );
    case 'ensemble-basics':
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full p-8">
           {[60, 130, 200, 270, 340].map((x, i) => (
             <g key={i} transform={`translate(${x}, 60)`}>
               <path d="M 0 0 L -15 30 M 0 0 L 15 30" stroke="#cbd5e1" strokeWidth="2" />
               <circle r="10" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
               <text y="45" textAnchor="middle" className="text-[8px] font-bold fill-slate-400">Tree {i+1}</text>
             </g>
           ))}
           <path d="M 50 120 L 350 120" stroke="#6366f1" strokeWidth="2" strokeDasharray="4" />
           <rect x="150" y="150" width="100" height="40" rx="8" fill="#6366f1" />
           <text x="200" y="175" textAnchor="middle" className="text-white font-black text-xs">VOTING</text>
        </svg>
      );
    case 'svm':
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full p-8">
          <circle cx="80" cy="60" r="10" fill="#3b82f6" />
          <circle cx="120" cy="40" r="10" fill="#3b82f6" />
          <circle cx="60" cy="90" r="10" fill="#3b82f6" />
          
          <circle cx="280" cy="160" r="10" fill="#f43f5e" />
          <circle cx="320" cy="140" r="10" fill="#f43f5e" />
          <circle cx="340" cy="180" r="10" fill="#f43f5e" />
          
          <rect x="0" y="100" width="400" height="40" fill="#6366f1" fillOpacity="0.1" transform="rotate(-20, 200, 120)" />
          <line x1="0" y1="120" x2="400" y2="120" stroke="#6366f1" strokeWidth="4" strokeDasharray="8" transform="rotate(-20, 200, 120)" />
          <text x="200" y="190" textAnchor="middle" className="text-[10px] font-black fill-indigo-500 uppercase tracking-widest">Maximum Margin Divider</text>
        </svg>
      );
    case 'gain-lift':
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full p-8">
          <line x1="50" y1="180" x2="350" y2="180" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="50" y1="30" x2="50" y2="180" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="50" y1="180" x2="350" y2="30" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4" />
          <path d="M 50 180 Q 100 50 350 30" fill="none" stroke="#6366f1" strokeWidth="4" />
          <text x="350" y="195" textAnchor="end" className="text-[8px] fill-slate-400">Total Sample</text>
          <text x="45" y="30" textAnchor="end" className="text-[8px] fill-slate-400">Total Response</text>
          <text x="120" y="70" className="text-[10px] font-black fill-indigo-600">Model Gain Curve</text>
        </svg>
      );
    default:
      return (
        <div className="flex flex-col items-center justify-center h-full text-slate-300">
          <span className="text-6xl mb-4">🎨</span>
          <p className="font-black uppercase tracking-widest text-[10px]">Static Concept Diagram: {id}</p>
        </div>
      );
  }
};

export default Diagrams;
