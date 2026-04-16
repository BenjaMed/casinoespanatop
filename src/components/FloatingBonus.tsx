import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Trophy, ChevronRight } from "lucide-react";
import { CASINOS } from "../data/casinos";

export default function FloatingBonus() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isClosed) setIsVisible(true);
    }, 15000); // Show after 15s

    return () => clearTimeout(timer);
  }, [isClosed]);

  if (isClosed) return null;

  const topCasino = CASINOS[0];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          className="fixed bottom-24 right-4 z-40 w-80 hidden md:block"
        >
          <div className="glass p-6 rounded-2xl border-brand-gold/30 shadow-2xl relative overflow-hidden">
            <button 
              onClick={() => { setIsVisible(false); setIsClosed(true); }}
              className="absolute top-2 right-2 p-1 text-brand-text-muted hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#2D3748] rounded-lg flex items-center justify-center border border-brand-border text-2xl">
                {topCasino.logo}
              </div>
              <div>
                <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">Oferta del Día</span>
                <h4 className="font-bold text-sm">Bono Exclusivo {topCasino.name}</h4>
              </div>
            </div>

            <div className="bg-brand-gold/10 rounded-xl p-3 mb-4 border border-brand-gold/20">
              <p className="text-brand-gold font-bold text-lg text-center">{topCasino.bonus}</p>
            </div>

            <a 
              href={topCasino.affiliateUrl} 
              target="_blank" 
              rel="nofollow noopener sponsored"
              className="btn-gold w-full py-3 flex items-center justify-center gap-2 text-sm"
            >
              Reclamar Ahora <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
