import { useState, useMemo } from "react";
import { CASINOS, Casino } from "../data/casinos";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "./ui/table";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Star, 
  ChevronRight, 
  Zap, 
  Smartphone, 
  CreditCard, 
  Info,
  ArrowUpDown
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function CasinoTable() {
  const [filter, setFilter] = useState<string>("all");
  const [sortConfig, setSortConfig] = useState<{ key: keyof Casino | 'score'; direction: 'asc' | 'desc' }>({ key: 'score', direction: 'desc' });

  const filteredCasinos = useMemo(() => {
    let result = [...CASINOS];
    
    if (filter === "bizum") result = result.filter(c => c.features.bizum);
    if (filter === "paypal") result = result.filter(c => c.features.paypal);
    if (filter === "app") result = result.filter(c => c.features.mobileApp);
    if (filter === "fast") result = result.filter(c => c.isFastWithdraw);

    result.sort((a, b) => {
      const aValue = a[sortConfig.key as keyof Casino];
      const bValue = b[sortConfig.key as keyof Casino];
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
      }
      return 0;
    });

    return result;
  }, [filter, sortConfig]);

  const toggleSort = (key: keyof Casino | 'score') => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'desc' ? 'asc' : 'desc'
    }));
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {[
          { id: "all", label: "Todos" },
          { id: "bizum", label: "Con Bizum", icon: <CreditCard className="w-3 h-3" /> },
          { id: "paypal", label: "Con PayPal", icon: <CreditCard className="w-3 h-3" /> },
          { id: "app", label: "App Móvil", icon: <Smartphone className="w-3 h-3" /> },
          { id: "fast", label: "Retiro Rápido", icon: <Zap className="w-3 h-3" /> },
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 border ${
              filter === f.id 
                ? "bg-brand-gold text-black border-brand-gold" 
                : "bg-brand-card text-brand-text-muted border-brand-border hover:border-brand-gold/50"
            }`}
          >
            {f.icon} {f.label}
          </button>
        ))}
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block glass rounded-2xl overflow-hidden border border-brand-border">
        <Table>
          <TableHeader className="bg-white/5">
            <TableRow className="border-brand-border hover:bg-transparent">
              <TableHead className="w-12 text-center font-impact text-brand-text-muted">#</TableHead>
              <TableHead className="w-48">Casino</TableHead>
              <TableHead className="uppercase text-[10px] font-bold tracking-widest">Bonos y Ventajas</TableHead>
              <TableHead className="uppercase text-[10px] font-bold tracking-widest">Métodos</TableHead>
              <TableHead className="cursor-pointer hover:text-brand-gold transition-colors uppercase text-[10px] font-bold tracking-widest" onClick={() => toggleSort('score')}>
                Score
              </TableHead>
              <TableHead className="text-right uppercase text-[10px] font-bold tracking-widest">Acción</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCasinos.map((casino, index) => (
              <TableRow key={casino.id} className="border-brand-border hover:bg-white/5 transition-colors group">
                <TableCell className="text-center font-impact text-2xl text-brand-text-muted/50 group-hover:text-brand-gold transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-10 bg-[#2D3748] rounded flex items-center justify-center border border-brand-border group-hover:border-brand-gold/50 transition-all overflow-hidden text-2xl">
                      {casino.logo}
                    </div>
                    <span className="font-bold text-sm">{casino.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-brand-green/10 text-brand-green rounded text-[10px] font-bold uppercase tracking-wider">⚡ Retiros en 1h</span>
                      <span className="text-xs text-brand-text-muted">{casino.bonus}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-[10px] text-brand-text-muted font-medium">
                    {casino.features.bizum && "Bizum, "}
                    {casino.features.paypal && "PayPal, "}
                    Visa, Mastercard
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-extrabold text-brand-gold text-lg">{casino.score}</div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex flex-col items-end gap-2">
                    <a 
                      href={casino.affiliateUrl} 
                      target="_blank" 
                      rel="nofollow noopener sponsored"
                      className="text-xs py-2 px-4 bg-brand-gold hover:bg-brand-gold/90 text-black font-extrabold rounded transition-all shadow-md shadow-brand-gold/10"
                    >
                      Jugar Ahora
                    </a>
                    <Link to={`/casino/${casino.slug}`} className="text-[9px] text-brand-text-muted hover:text-brand-gold transition-colors uppercase font-bold tracking-tighter">
                      Leer Review
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-4">
        {filteredCasinos.map((casino, index) => (
          <div key={casino.id} className="glass rounded-2xl p-4 border border-brand-border relative overflow-hidden">
            {casino.isRecommended && (
              <div className="absolute top-0 right-0 bg-brand-green text-white text-[8px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-widest">
                Recomendado
              </div>
            )}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 text-brand-text-muted/30 font-impact text-3xl">
                {index + 1}
              </div>
              <div className="w-16 h-16 bg-[#2D3748] rounded-xl flex items-center justify-center border border-brand-border text-4xl">
                {casino.logo}
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">{casino.name}</h3>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-brand-gold text-brand-gold" />
                  <span className="font-impact text-lg">{casino.score}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                <span className="block text-[10px] text-brand-text-muted uppercase font-bold mb-1">Bono</span>
                <span className="text-brand-gold font-bold text-sm">{casino.bonus}</span>
              </div>
              <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                <span className="block text-[10px] text-brand-text-muted uppercase font-bold mb-1">Rollover</span>
                <span className="text-white font-mono text-sm">{casino.rollover}</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a 
                href={casino.affiliateUrl} 
                target="_blank" 
                rel="nofollow noopener sponsored"
                className="w-full py-4 text-center flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold/90 text-black font-extrabold rounded-xl shadow-lg shadow-brand-gold/20 transition-all font-display text-lg"
              >
                Jugar Ahora <ChevronRight className="w-5 h-5" />
              </a>
              <Link to={`/casino/${casino.slug}`} className="btn-outline w-full py-3 text-center text-sm">
                Leer Review Completa
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
