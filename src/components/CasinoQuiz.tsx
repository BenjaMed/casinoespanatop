import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { CASINOS, Casino } from "../data/casinos";
import { ChevronRight, Sparkles, Target, Wallet, CreditCard, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

export default function CasinoQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<Casino | null>(null);

  const steps = [
    {
      id: "priority",
      question: "¿Qué es lo más importante para ti?",
      options: [
        { id: "bonus", label: "Un bono de bienvenida gigante", icon: <Trophy className="w-5 h-5" /> },
        { id: "withdraw", label: "Retiros instantáneos", icon: <Sparkles className="w-5 h-5" /> },
        { id: "games", label: "Muchos juegos y slots", icon: <Target className="w-5 h-5" /> },
      ]
    },
    {
      id: "deposit",
      question: "¿Cuánto sueles depositar?",
      options: [
        { id: "low", label: "Menos de 20€", icon: <Wallet className="w-5 h-5" /> },
        { id: "mid", label: "Entre 20€ y 100€", icon: <Wallet className="w-5 h-5" /> },
        { id: "high", label: "Más de 100€", icon: <Wallet className="w-5 h-5" /> },
      ]
    },
    {
      id: "payment",
      question: "¿Método de pago preferido?",
      options: [
        { id: "bizum", label: "Bizum", icon: <CreditCard className="w-5 h-5" /> },
        { id: "paypal", label: "PayPal", icon: <CreditCard className="w-5 h-5" /> },
        { id: "card", label: "Tarjeta / Otros", icon: <CreditCard className="w-5 h-5" /> },
      ]
    }
  ];

  const handleAnswer = (answerId: string) => {
    const newAnswers = { ...answers, [steps[step].id]: answerId };
    setAnswers(newAnswers);

    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      // Calculate result
      let bestMatch = CASINOS[0];
      if (newAnswers.priority === "withdraw") bestMatch = CASINOS.find(c => c.isFastWithdraw) || CASINOS[0];
      if (newAnswers.priority === "bonus") bestMatch = CASINOS.find(c => c.isBestBono) || CASINOS[0];
      if (newAnswers.payment === "bizum") bestMatch = CASINOS.find(c => c.features.bizum) || bestMatch;
      
      setResult(bestMatch);
      setStep(step + 1);
    }
  };

  return (
    <div className="glass rounded-3xl p-8 border-brand-gold/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Sparkles className="w-24 h-24 text-brand-gold" />
      </div>

      <AnimatePresence mode="wait">
        {step < steps.length ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <span className="text-brand-gold font-mono text-xs uppercase tracking-widest">Paso {step + 1} de {steps.length}</span>
              <h3 className="text-2xl font-display font-bold">{steps[step].question}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {steps[step].options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleAnswer(opt.id)}
                  className="glass-hover p-6 rounded-2xl border border-white/5 flex flex-col items-center gap-4 text-center group"
                >
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-black transition-all">
                    {opt.icon}
                  </div>
                  <span className="font-bold text-sm">{opt.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-8"
          >
            <div className="space-y-2">
              <div className="w-16 h-16 bg-brand-green/20 rounded-full flex items-center justify-center text-brand-green mx-auto mb-4">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-display font-bold">¡Encontramos tu casino ideal!</h3>
              <p className="text-brand-text-muted">Basado en tus preferencias, este es el mejor para ti:</p>
            </div>

            {result && (
              <div className="glass p-6 rounded-2xl border-brand-gold/30 max-w-md mx-auto">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-20 h-20 bg-[#2D3748] rounded-xl flex items-center justify-center border border-brand-border text-5xl">
                    {result.logo}
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-bold">{result.name}</h4>
                    <p className="text-brand-gold font-bold">{result.bonus}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <a 
                    href={result.affiliateUrl} 
                    target="_blank" 
                    rel="nofollow noopener sponsored"
                    className="w-full py-4 flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold/90 text-black font-extrabold rounded-xl shadow-lg shadow-brand-gold/20 transition-all transform hover:scale-[1.02]"
                  >
                    Reclamar Bono Ahora <ChevronRight className="w-4 h-4" />
                  </a>
                  <Button 
                    variant="ghost" 
                    className="text-brand-text-muted hover:text-brand-gold"
                    onClick={() => { setStep(0); setResult(null); }}
                  >
                    Repetir test
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
