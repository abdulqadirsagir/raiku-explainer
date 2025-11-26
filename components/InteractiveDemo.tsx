// components/InteractiveDemo.tsx
'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function TrafficSim() {
  const [mode, setMode] = useState<'chaos' | 'raiku'>('chaos');
  const [dots, setDots] = useState<{ id: number; x: number; delay: number }[]>([]);

  useEffect(() => {
    // Generate random dots
    const newDots = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 90,
      delay: Math.random() * 2,
    }));
    setDots(newDots);
  }, []);

  return (
    <div className="w-full bg-slate-950 border border-slate-800 rounded-3xl p-6 overflow-hidden relative shadow-2xl">
      <div className="flex justify-between items-center mb-6 z-10 relative">
        <h3 className="text-slate-400 text-sm font-mono tracking-widest">TRAFFIC_SIMULATION</h3>
        <div className="flex gap-2 bg-slate-900 p-1 rounded-lg border border-slate-800">
          <button
            onClick={() => setMode('chaos')}
            className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${
              mode === 'chaos' ? 'bg-red-500/20 text-red-400' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            Standard
          </button>
          <button
            onClick={() => setMode('raiku')}
            className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${
              mode === 'raiku' ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            Raiku
          </button>
        </div>
      </div>

      <div className="h-64 relative border-t border-b border-slate-800/50">
        {/* Lanes */}
        <div className="absolute inset-0 flex justify-around opacity-10">
          <div className="w-px h-full bg-slate-500"></div>
          <div className="w-px h-full bg-slate-500"></div>
          <div className="w-px h-full bg-slate-500"></div>
        </div>

        {/* Traffic */}
        {dots.map((dot) => (
          <motion.div
            key={dot.id}
            initial={{ top: '-10%' }}
            animate={{ top: '110%' }}
            transition={{
              duration: mode === 'chaos' ? 1 + Math.random() : 2, // Chaos has random speeds, Raiku is uniform
              repeat: Infinity,
              ease: mode === 'chaos' ? "linear" : "easeInOut",
              delay: mode === 'chaos' ? dot.delay : (dot.id % 3) * 0.6, // Raiku is perfectly timed
            }}
            className={`absolute w-3 h-8 rounded-full ${
              mode === 'chaos' 
                ? 'bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]' 
                : 'bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]'
            }`}
            style={{
              left: mode === 'chaos' ? `${dot.x}%` : `${(dot.id % 3) * 33 + 15}%`, // Raiku organizes into lanes
            }}
          />
        ))}
        
        {/* Status Text */}
        <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur px-3 py-1 rounded border border-slate-700 text-xs font-mono">
           STATUS: {mode === 'chaos' ? <span className="text-red-400">HIGH_CONGESTION</span> : <span className="text-cyan-400">DETERMINISTIC_FLOW</span>}
        </div>
      </div>
    </div>
  );
}