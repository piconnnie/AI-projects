
import React, { useState } from 'react';

const DecisionTreeVisual: React.FC<{ isAnimating: boolean }> = ({ isAnimating }) => {
  const [activeNode, setActiveNode] = useState(0);

  // Nodes: 0 (Root), 1 (Left), 2 (Right), 3, 4, 5, 6 (Leaves)
  React.useEffect(() => {
    if (!isAnimating) return;
    const interval = setInterval(() => {
      setActiveNode(prev => (prev + 1) % 7);
    }, 1000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  const Node = ({ id, x, y, label, color }: any) => (
    <g transform={`translate(${x}, ${y})`}>
      <circle
        r="20"
        fill={activeNode === id ? color : '#f1f5f9'}
        stroke={activeNode === id ? 'white' : '#cbd5e1'}
        strokeWidth="2"
        className="transition-all duration-300"
      />
      <text y="35" textAnchor="middle" className={`text-[8px] font-black uppercase ${activeNode === id ? 'fill-slate-800' : 'fill-slate-400'}`}>
        {label}
      </text>
    </g>
  );

  return (
    <div className="relative w-full h-72 bg-white rounded-[2.5rem] overflow-hidden border-4 border-slate-50 flex items-center justify-center p-8">
      <svg viewBox="0 0 400 240" className="w-full h-full">
        {/* Connections */}
        <g stroke="#e2e8f0" strokeWidth="2">
          <line x1="200" y1="40" x2="100" y2="100" />
          <line x1="200" y1="40" x2="300" y2="100" />
          <line x1="100" y1="100" x2="50" y2="180" />
          <line x1="100" y1="100" x2="150" y2="180" />
          <line x1="300" y1="100" x2="250" y2="180" />
          <line x1="300" y1="100" x2="350" y2="180" />
        </g>

        {/* Nodes */}
        <Node id={0} x={200} y={40} label="Is it an animal?" color="#6366f1" />
        
        <Node id={1} x={100} y={100} label="Does it bark?" color="#8b5cf6" />
        <Node id={2} x={300} y={100} label="Can it fly?" color="#ec4899" />
        
        <Node id={3} x={50} y={180} label="🐶 Dog" color="#10b981" />
        <Node id={4} x={150} y={180} label="🐱 Cat" color="#f59e0b" />
        <Node id={5} x={250} y={180} label="🦅 Eagle" color="#3b82f6" />
        <Node id={6} x={350} y={180} label="🐍 Snake" color="#ef4444" />
      </svg>
      
      {!isAnimating && (
        <div className="absolute inset-0 bg-slate-900/5 flex items-center justify-center pointer-events-none backdrop-blur-[1px]">
          <p className="text-slate-800 font-bold bg-white/90 px-4 py-2 rounded-full border border-slate-200 shadow-md">⏸ Tree View</p>
        </div>
      )}
    </div>
  );
};

export default DecisionTreeVisual;
