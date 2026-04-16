import { useState } from "react";
import { CASINOS, Casino } from "../data/casinos";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "./ui/dialog";
import { Button } from "./ui/button";
import { X, Check, Minus, Scale, ChevronRight } from "lucide-react";
import { Badge } from "./ui/badge";

export default function CasinoComparator() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleCasino = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(i => i !== id));
    } else if (selectedIds.length < 3) {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const selectedCasinos = CASINOS.filter(c => selectedIds.includes(c.id));

  return (
    <div className="fixed bottom-24 left-4 z-40">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button 
            className={`rounded-full h-14 px-6 shadow-2xl transition-all ${
              selectedIds.length > 0 ? "bg-brand-gold text-black scale-100" : "bg-brand-card text-brand-text-muted scale-90 opacity-50"
            }`}
          >
            <Scale className="w-5 h-5 mr-2" />
            Comparar {selectedIds.length > 0 && `(${selectedIds.length})`}
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-5xl bg-brand-bg border-brand-border text-white overflow-hidden">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display font-bold">Comparador de Casinos</DialogTitle>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <div className="hidden md:block space-y-8 pt-24">
              <div className="h-20 flex items-center text-xs font-bold uppercase text-brand-text-muted tracking-widest">Bono</div>
              <div className="h-12 flex items-center text-xs font-bold uppercase text-brand-text-muted tracking-widest">Rollover</div>
              <div className="h-12 flex items-center text-xs font-bold uppercase text-brand-text-muted tracking-widest">Depósito Mín</div>
              <div className="h-12 flex items-center text-xs font-bold uppercase text-brand-text-muted tracking-widest">Bizum</div>
              <div className="h-12 flex items-center text-xs font-bold uppercase text-brand-text-muted tracking-widest">PayPal</div>
              <div className="h-12 flex items-center text-xs font-bold uppercase text-brand-text-muted tracking-widest">App Móvil</div>
            </div>

            {selectedCasinos.length > 0 ? (
              selectedCasinos.map((casino) => (
                <div key={casino.id} className="space-y-8 text-center">
                  <div className="h-24 flex flex-col items-center justify-center gap-2">
                    <div className="w-16 h-16 bg-[#2D3748] rounded-xl flex items-center justify-center border border-brand-border text-4xl">
                      {casino.logo}
                    </div>
                    <span className="font-bold text-sm">{casino.name}</span>
                  </div>
                  
                  <div className="h-20 flex flex-col items-center justify-center">
                    <span className="text-brand-gold font-bold text-sm">{casino.bonus}</span>
                  </div>
                  
                  <div className="h-12 flex items-center justify-center">
                    <Badge variant="outline" className="border-brand-border">{casino.rollover}</Badge>
                  </div>

                  <div className="h-12 flex items-center justify-center font-bold">
                    {casino.minDeposit}
                  </div>

                  <div className="h-12 flex items-center justify-center">
                    {casino.features.bizum ? <Check className="text-brand-green" /> : <Minus className="text-brand-text-muted" />}
                  </div>

                  <div className="h-12 flex items-center justify-center">
                    {casino.features.paypal ? <Check className="text-brand-green" /> : <Minus className="text-brand-text-muted" />}
                  </div>

                  <div className="h-12 flex items-center justify-center">
                    {casino.features.mobileApp ? <Check className="text-brand-green" /> : <Minus className="text-brand-text-muted" />}
                  </div>

                  <div className="pt-4">
                    <a 
                      href={casino.affiliateUrl} 
                      target="_blank" 
                      rel="nofollow noopener sponsored"
                      className="btn-primary py-2 px-4 text-xs w-full flex items-center justify-center gap-2"
                    >
                      Jugar <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 flex flex-col items-center justify-center py-20 text-brand-text-muted gap-4">
                <Scale className="w-12 h-12 opacity-20" />
                <p>Selecciona hasta 3 casinos para comparar</p>
              </div>
            )}
          </div>

          <div className="mt-8 border-t border-brand-border pt-6">
            <h4 className="text-sm font-bold mb-4 uppercase tracking-widest text-brand-text-muted">Seleccionar Casinos:</h4>
            <div className="flex flex-wrap gap-2">
              {CASINOS.map((casino) => (
                <button
                  key={casino.id}
                  onClick={() => toggleCasino(casino.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all border ${
                    selectedIds.includes(casino.id)
                      ? "bg-brand-gold text-black border-brand-gold"
                      : "bg-brand-card text-brand-text-muted border-brand-border hover:border-brand-gold/50"
                  }`}
                >
                  {casino.name}
                </button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
