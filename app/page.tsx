// app/page.tsx
'use client';

import { motion } from 'framer-motion';
import SearchBar from '@/components/SearchBar';
import { TrafficSim } from '@/components/InteractiveDemo';
import { ArrowRight, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-cyan-500/30">
      
      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-violet-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-900/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full max-w-4xl"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-bold tracking-widest uppercase">
            Raiku Protocol
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
            Certainty in a <br /> Chaotic World.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Blockchain transactions shouldn't be a gamble. Raiku brings 
            <span className="text-cyan-400 font-semibold"> deterministic execution </span> 
            to Solana, guaranteeing your place in the block without the bidding wars.
          </p>
          
          {/* SEARCH BAR */}
          <div className="mb-20">
            <SearchBar />
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 opacity-50"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-slate-400 to-transparent"></div>
        </motion.div>
      </section>

      {/* EXPLAINER SECTION */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Determinism?</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Imagine trying to catch a train, but you don't know if it will stop, 
              and 500 people are shoving you to get in the door. That is how most 
              blockchains work today.
            </p>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              <strong className="text-white">Deterministic Execution</strong> is a reserved seat. 
              You buy the ticket, you know exactly when the train leaves, and your seat is empty waiting for you.
            </p>
            
            <ul className="space-y-4">
              {[
                "No Random Failure", 
                "Guaranteed Timing", 
                "Protected from MEV Bots"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="text-cyan-400 w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
             {/* The Simulation Component */}
             <TrafficSim />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS CARDS */}
      <section className="relative z-10 py-32 px-6 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How Raiku Works</h2>
            <p className="text-slate-400">Simple architecture. Powerful guarantees.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-yellow-400" />,
                title: "1. Reserve",
                desc: "You request a specific slot in a future block. Raiku issues a digital proof of reservation."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-cyan-400" />,
                title: "2. Schedule",
                desc: "Raiku coordinates with the validator leader to clear the lane for your transaction."
              },
              {
                icon: <CheckCircle2 className="w-8 h-8 text-green-400" />,
                title: "3. Execute",
                desc: "Your transaction lands exactly where you paid for it to land. Zero jitter."
              }
            ].map((card, i) => (
              <div key={i} className="bg-slate-950 p-8 rounded-3xl border border-slate-800 hover:border-cyan-500/50 transition-colors group">
                <div className="mb-6 bg-slate-900 w-fit p-4 rounded-2xl group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <footer className="relative z-10 py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Ready for Certainty?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://raiku.com" target="_blank" className="bg-white text-slate-950 px-8 py-3 rounded-full font-bold hover:bg-cyan-50 transition flex items-center justify-center gap-2">
            Visit Raiku.com <ArrowRight className="w-4 h-4" />
          </a>
          <a href="https://twitter.com/raikucom" target="_blank" className="border border-slate-700 bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition">
            Follow Updates
          </a>
        </div>
        <p className="mt-12 text-slate-600 text-sm">© 2024 Raiku. All systems deterministic.</p>
      </footer>

    </main>
  );
}
