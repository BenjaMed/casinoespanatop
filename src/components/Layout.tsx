import { Outlet, Link } from "react-router-dom";
import { Shield, Menu, X, ChevronRight, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";
import FloatingBonus from "./FloatingBonus";
import CasinoComparator from "./CasinoComparator";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0A0E1A]/80 backdrop-blur-md border-b border-brand-border">
        <div className="container mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="text-2xl font-extrabold tracking-tighter">
              <span className="text-brand-gold">CASINOS</span>
              <span className="text-white">ESPAÑATOP</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-xs font-bold uppercase tracking-widest text-brand-gold">Home</Link>
            <Link to="/bonos-casino" className="text-xs font-bold uppercase tracking-widest text-brand-text-muted hover:text-brand-gold transition-colors">Bonos</Link>
            <Link to="/mejores-casinos-online" className="text-xs font-bold uppercase tracking-widest text-brand-text-muted hover:text-brand-gold transition-colors">Pagos</Link>
            <Link to="/blog" className="text-xs font-bold uppercase tracking-widest text-brand-text-muted hover:text-brand-gold transition-colors">Blog</Link>
            <Link to="/guias" className="text-xs font-bold uppercase tracking-widest text-brand-text-muted hover:text-brand-gold transition-colors">Guías</Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-bg pt-24 px-4 md:hidden"
          >
            <nav className="flex flex-col gap-6 text-center">
              <Link 
                to="/mejores-casinos-online" 
                className="text-2xl font-display font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                Casinos Online
              </Link>
              <Link 
                to="/bonos-casino" 
                className="text-2xl font-display font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                Mejores Bonos
              </Link>
              <Link 
                to="/juego-responsable" 
                className="text-2xl font-display font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                Juego Responsable
              </Link>
              <Button className="btn-gold w-full py-6 text-xl">
                Ver Ranking Top 15
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <FloatingBonus />
      <CasinoComparator />

      {/* Sticky CTA Bar */}
      <AnimatePresence>
        {showSticky && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-brand-card/95 backdrop-blur-lg border-t border-brand-gold/30 p-4 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]"
          >
            <div className="container mx-auto flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex w-12 h-12 bg-[#2D3748] rounded-lg items-center justify-center border border-brand-border text-2xl">
                  🟢
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-brand-gold">🏆 #1 HOY: Bet365</span>
                    <span className="hidden sm:inline-block px-2 py-0.5 bg-brand-green/20 text-brand-green text-[10px] font-bold rounded uppercase">Recomendado</span>
                  </div>
                  <p className="text-xs text-brand-text-muted">Bono exclusivo: 100% hasta 100€</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href="https://www.bet365.com/olp/open-account?affiliate=365_029746" 
                  target="_blank" 
                  rel="nofollow noopener sponsored"
                  className="btn-gold px-4 sm:px-8 py-2 sm:py-3 flex items-center gap-2 text-sm sm:text-base"
                >
                  Reclamar Bono <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-brand-border py-8">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-white rounded flex items-center justify-center text-[10px] font-extrabold text-black">
              +18
            </div>
            <div className="w-10 h-10 bg-white rounded flex items-center justify-center text-[10px] font-extrabold text-black">
              DGOJ
            </div>
            <div className="w-10 h-10 bg-white rounded flex items-center justify-center text-[10px] font-extrabold text-black">
              SEGURO
            </div>
            <div className="w-10 h-10 bg-white rounded flex items-center justify-center text-[10px] font-extrabold text-black">
              RGIAJ
            </div>
          </div>
          
          <div className="text-[10px] text-brand-text-muted text-center md:text-right max-w-md uppercase tracking-widest leading-relaxed">
            Este sitio contiene enlaces de afiliación. Las reseñas son independientes. El juego es para mayores de 18 años. Ayuda a la ludopatía: 900 333 888. © 2026 CasinosEspañaTop.
          </div>
        </div>
      </footer>
    </div>
  );
}
