// components/SearchBar.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { Term } from '@/lib/definitions';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Term[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      if (query.length < 2) {
        setResults([]);
        return;
      }
      setLoading(true);
      try {
        const res = await fetch(`/api/search?q=${query}`);
        const data = await res.json();
        setResults(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    const debounce = setTimeout(fetchResults, 300);
    return () => clearTimeout(debounce);
  }, [query]);

  return (
    <div className="relative w-full max-w-xl mx-auto z-50">
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000"></div>
        <div className="relative bg-slate-900 rounded-2xl border border-slate-800 flex items-center p-4 shadow-xl">
          <Search className="text-slate-400 w-5 h-5 mr-3" />
          <input
            type="text"
            className="bg-transparent w-full text-slate-100 placeholder-slate-500 focus:outline-none font-medium"
            placeholder="Ask Raiku (e.g., 'Determinism', 'Blockspace')"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button onClick={() => setQuery('')}>
              <X className="text-slate-500 hover:text-white w-4 h-4 transition" />
            </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 right-0 mt-4 bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden p-2"
          >
            {results.map((item) => (
              <div key={item.id} className="p-4 hover:bg-white/5 rounded-xl transition-colors cursor-default">
                <h4 className="text-cyan-400 font-bold text-sm uppercase tracking-wider mb-1">
                  {item.term}
                </h4>
                <p className="text-slate-200 text-sm mb-2">{item.definition}</p>
                <div className="bg-slate-800/50 p-2 rounded-lg border border-slate-700">
                  <span className="text-xs text-slate-400 font-mono">💡 Simply put: </span>
                  <span className="text-xs text-slate-300 italic">{item.analogy}</span>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
