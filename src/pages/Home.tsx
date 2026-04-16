import { Shield, CheckCircle2, Zap, Trophy, Star, ChevronRight, MessageSquare, HelpCircle } from "lucide-react";
import CasinoTable from "../components/CasinoTable";
import CasinoQuiz from "../components/CasinoQuiz";
import { motion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-gold/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-green/5 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 lg:flex-[1.2] text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="badge-live"
              >
                Ranking Actualizado Hoy: Mayo 2026
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6"
              >
                Los Mejores <span className="text-brand-gold">Casinos Online</span> en España
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-brand-text-muted max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
              >
                Análisis experto de plataformas con licencia DGOJ. Comparamos bonos, rapidez de retiro y seguridad real.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap justify-center lg:justify-start gap-8 text-sm font-medium text-brand-text-muted"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-brand-gold" /> 🛡️ Licencia DGOJ
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold" /> ✅ Auditoría 2026
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-brand-gold" /> ⚡ Retiro Inmediato
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex-1 lg:flex-[0.8] w-full max-w-md"
            >
              <div className="bg-brand-card border border-brand-gold rounded-[1.5rem] p-8 relative shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                <div className="absolute -top-3 right-5 bg-brand-gold text-black px-3 py-1 rounded font-extrabold text-[10px] uppercase">
                  Elección del Editor
                </div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-32 h-14 bg-[#2D3748] rounded-lg flex items-center justify-center font-bold text-white text-4xl">
                    🟢
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-extrabold text-brand-gold">4.9/5</div>
                    <div className="text-[10px] text-brand-text-muted uppercase">Puntuación Expertos</div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 mb-6 text-center border border-white/5">
                  <div className="text-[10px] text-brand-text-muted uppercase mb-1">Bono de Bienvenida</div>
                  <div className="text-3xl font-extrabold text-white">100% hasta 200€</div>
                  <div className="text-[10px] text-brand-gold font-bold mt-2">Regalo: 50 Giros Gratis</div>
                </div>
                <Button className="w-full py-6 bg-brand-green hover:bg-brand-green/90 text-white font-extrabold text-lg rounded-xl shadow-lg shadow-brand-green/20">
                  RECLAMAR BONO →
                </Button>
                <p className="text-[10px] text-center mt-4 text-brand-text-muted">
                  +18 • Juega con responsabilidad • T&C Aplican
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Ranking Table */}
      <section className="container mx-auto px-4 -mt-16 relative z-10">
        <CasinoTable />
      </section>

      {/* Trust Signals / Features */}
      <section className="py-24 bg-brand-card/30 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4 text-center md:text-left">
              <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold mx-auto md:mx-0">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">100% Legal y Seguro</h3>
              <p className="text-brand-text-muted text-sm leading-relaxed">
                Solo recomendamos casinos que cuentan con la licencia oficial de la DGOJ (Dirección General de Ordenación del Juego). Tu seguridad es nuestra prioridad.
              </p>
            </div>
            <div className="space-y-4 text-center md:text-left">
              <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold mx-auto md:mx-0">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">Bonos Actualizados</h3>
              <p className="text-brand-text-muted text-sm leading-relaxed">
                Nuestro equipo revisa diariamente las promociones para ofrecerte siempre los mejores bonos de bienvenida y ofertas sin depósito disponibles.
              </p>
            </div>
            <div className="space-y-4 text-center md:text-left">
              <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold mx-auto md:mx-0">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">Retiros Rápidos</h3>
              <p className="text-brand-text-muted text-sm leading-relaxed">
                Priorizamos a los operadores que procesan tus ganancias en tiempo récord, especialmente aquellos que aceptan Bizum y PayPal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Widget */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">¿No sabes cuál elegir?</h2>
              <p className="text-brand-text-muted">Responde 3 preguntas y encuentra tu casino ideal en segundos.</p>
            </div>
            <CasinoQuiz />
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-24 border-t border-brand-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-invert prose-brand prose-sm md:prose-base">
            <h2 className="text-3xl font-display font-bold mb-8">Guía Completa: Cómo elegir el mejor casino online en España</h2>
            <p className="text-brand-text-muted mb-6">
              Encontrar el mejor casino online en España en 2026 no es tarea fácil. Con decenas de operadores compitiendo por tu atención, es fundamental saber qué buscar para garantizar una experiencia divertida, justa y, sobre todo, segura. En <strong>CasinosEspañaTop.es</strong>, hemos desarrollado una metodología propia para analizar cada sitio.
            </p>
            
            <h3 className="text-xl font-bold text-white mb-4">¿Qué analizamos en nuestras reviews?</h3>
            <ul className="space-y-4 text-brand-text-muted mb-8">
              <li>
                <strong className="text-white">Licencia DGOJ:</strong> El primer paso innegociable. Si un casino no tiene el sello de "Juego Seguro", no aparece en nuestra lista.
              </li>
              <li>
                <strong className="text-white">Variedad de Juegos:</strong> Buscamos operadores que ofrezcan más de 1.000 slots, ruleta en vivo con crupieres reales y mesas de blackjack de alta calidad.
              </li>
              <li>
                <strong className="text-white">Métodos de Pago:</strong> La presencia de Bizum y PayPal es un indicador de que el casino está adaptado al mercado español actual.
              </li>
              <li>
                <strong className="text-white">Atención al Cliente:</strong> Probamos el chat en vivo y el soporte telefónico para asegurar respuestas rápidas y en español.
              </li>
            </ul>

            <div className="glass p-8 rounded-2xl border-brand-gold/20 mb-12">
              <h4 className="text-brand-gold font-bold mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5" /> Consejo de Experto
              </h4>
              <p className="text-sm italic">
                "Nunca te dejes deslumbrar solo por la cifra del bono. Lee siempre los términos y condiciones (rollover). Un bono de 100€ con rollover 20x es mucho mejor que uno de 500€ con rollover 60x."
              </p>
            </div>

            <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-brand-gold" /> Preguntas Frecuentes (FAQ)
            </h3>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="glass border-brand-border rounded-xl px-6">
                <AccordionTrigger className="hover:no-underline font-bold py-6">¿Es legal jugar al casino online en España?</AccordionTrigger>
                <AccordionContent className="text-brand-text-muted pb-6">
                  Sí, siempre y cuando el casino tenga la licencia otorgada por la DGOJ. Todos los casinos que listamos en esta web son 100% legales y operan bajo la normativa española.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="glass border-brand-border rounded-xl px-6">
                <AccordionTrigger className="hover:no-underline font-bold py-6">¿Cuál es el casino que paga más rápido?</AccordionTrigger>
                <AccordionContent className="text-brand-text-muted pb-6">
                  Actualmente, Luckia y Bet365 son los más rápidos. Si utilizas métodos como Bizum o PayPal, puedes recibir tus ganancias en menos de 24 horas, e incluso de forma instantánea en algunos casos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="glass border-brand-border rounded-xl px-6">
                <AccordionTrigger className="hover:no-underline font-bold py-6">¿Puedo jugar desde mi móvil?</AccordionTrigger>
                <AccordionContent className="text-brand-text-muted pb-6">
                  Absolutamente. Todos los casinos modernos están optimizados para móviles, ya sea a través de su navegador o mediante apps nativas para iOS y Android.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="glass border-brand-border rounded-xl px-6">
                <AccordionTrigger className="hover:no-underline font-bold py-6">¿Qué es el rollover de un bono?</AccordionTrigger>
                <AccordionContent className="text-brand-text-muted pb-6">
                  El rollover es el número de veces que debes apostar el dinero del bono antes de poder retirar las ganancias asociadas. Por ejemplo, un bono de 10€ con rollover 30x requiere apostar 300€ en total.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
