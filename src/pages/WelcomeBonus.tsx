import { CASINOS } from "../data/casinos";
import { Shield, Zap, Gift, ChevronRight, CheckCircle2, Star, Trophy, Info, HelpCircle } from "lucide-react";
import CasinoTable from "../components/CasinoTable";
import { Button } from "../components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { motion } from "motion/react";

export default function WelcomeBonus() {
  const top5 = CASINOS.slice(0, 5);

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-gold/10 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="badge-live mb-6"
            >
              Guía Actualizada 2026
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold leading-tight mb-6">
              Los 15 Mejores <span className="text-brand-gold">Bonos de Bienvenida</span> de España
            </h1>
            <p className="text-xl text-brand-text-muted leading-relaxed mb-8">
              Guía definitiva para jugar con dinero real en CasinosTOP. Analizamos seguridad, bonos, pagos y juegos para que elijas solo entre lo mejor del mercado regulado.
            </p>
          </div>
        </div>
      </section>

      {/* Ranking Table Section */}
      <section className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-display font-bold text-white">Ranking Oficial 2026: Tabla Comparativa Top 15</h2>
          <p className="text-brand-text-muted">Analizamos y clasificamos los mejores bonos basándonos en rollover, validez y transparencia.</p>
        </div>
        <div className="bg-brand-card/80 backdrop-blur-xl border border-brand-border rounded-3xl p-1 md:p-2 shadow-2xl">
          <CasinoTable />
        </div>
        <p className="text-[10px] text-brand-text-muted mt-4 text-center italic">
          * Los términos y condiciones se aplican a todas las ofertas de bonos. Mayores de 18 años. Juega con responsabilidad.
        </p>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-brand-card/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">Nuestra Metodología: Transparencia Total</h2>
            <p className="text-brand-text-muted text-lg">
              No nos casamos con nadie. En CasinosTOP, nuestro equipo de expertos evalúa cada bono probando los depósitos, los juegos y, lo más importante, la facilidad para liberar las ganancias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Seguridad", desc: "Casinos 100% legales con licencia DGOJ." },
              { icon: Gift, title: "Bonos Reales", desc: "Verificamos que las condiciones sean justas." },
              { icon: Zap, title: "Pagos Rápidos", desc: "Probamos la velocidad de retiro de las ganancias." },
              { icon: HelpCircle, title: "Soporte 24/7", desc: "Atención al cliente real y en español." }
            ].map((item, i) => (
              <div key={i} className="glass p-8 rounded-3xl border-brand-border text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold mx-auto mb-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-brand-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Analysis Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold mb-6 text-center">Análisis al Detalle: Top 5 Bonos</h2>
            <p className="text-brand-text-muted text-center text-lg">Desgranamos lo bueno y lo no tan bueno de los líderes del mercado en CasinosTOP.</p>
          </div>

          <div className="space-y-16">
            {top5.map((casino, index) => (
              <div key={casino.id} className="glass rounded-[2.5rem] border-brand-border overflow-hidden">
                <div className="p-8 md:p-12">
                  <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Info */}
                    <div className="flex-1 space-y-8">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-brand-gold text-brand-bg rounded-2xl flex items-center justify-center text-3xl font-black">
                          {index + 1}
                        </div>
                        <div>
                          <div className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-1">
                            {index === 0 ? "MEJOR CASINO 2026" : index === 1 ? "TOP MÓVIL" : "RECOMENDADO"}
                          </div>
                          <h3 className="text-4xl font-display font-bold">{casino.name}</h3>
                        </div>
                        <div className="ml-auto text-center">
                          <div className="text-3xl font-black text-white">{casino.score}</div>
                          <div className="text-[10px] text-brand-text-muted uppercase tracking-tighter">Puntuación</div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                            <Trophy className="w-5 h-5 text-brand-gold" /> Plataforma y Juegos
                          </h4>
                          <p className="text-brand-text-muted leading-relaxed">{casino.review.games}</p>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                            <Gift className="w-5 h-5 text-brand-gold" /> Bonos y Promociones
                          </h4>
                          <p className="text-brand-text-muted leading-relaxed">{casino.review.welcomeBonus}</p>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-brand-gold" /> Pagos y Móvil
                          </h4>
                          <p className="text-brand-text-muted leading-relaxed">{casino.review.payments}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Verdict */}
                    <div className="lg:w-[400px] space-y-8">
                      <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
                        <h4 className="text-xl font-bold mb-6">Veredicto del Analista</h4>
                        <ul className="space-y-4 mb-8">
                          {casino.pros.map((pro, i) => (
                            <li key={i} className="flex gap-3 text-sm text-brand-text-muted">
                              <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" /> {pro}
                            </li>
                          ))}
                          {casino.cons.map((con, i) => (
                            <li key={i} className="flex gap-3 text-sm text-brand-text-muted opacity-60">
                              <Info className="w-5 h-5 text-red-400 shrink-0" /> {con}
                            </li>
                          ))}
                        </ul>

                        <div className="space-y-4 pt-6 border-t border-white/10">
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-brand-text-muted uppercase">Oferta</span>
                            <span className="text-brand-gold font-bold">{casino.bonus}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-brand-text-muted uppercase">Rollover</span>
                            <span className="text-white font-bold">{casino.rollover}</span>
                          </div>
                          <Button className="w-full py-8 text-lg bg-brand-gold hover:bg-brand-gold/90 text-black font-extrabold rounded-xl shadow-lg shadow-brand-gold/20 transition-all hover:scale-[1.02]" asChild>
                            <a href={casino.affiliateUrl} target="_blank" rel="noopener noreferrer">
                              Jugar Ahora <ChevronRight className="ml-2 w-5 h-5" />
                            </a>
                          </Button>
                          <p className="text-[10px] text-center text-brand-text-muted">+18 | Juega con responsabilidad</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Content Section */}
      <section className="py-24 bg-brand-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-invert prose-brand">
            <h2 className="text-4xl font-display font-bold mb-8 text-white text-center">Explicamos los Tipos de Bonos</h2>
            <p className="text-xl text-brand-text-muted text-center mb-16">
              Entiende cada tipo de promoción para sacar el máximo partido en CasinosTOP. Recuerda: un bono "grande" con requisitos abusivos vale menos que uno pequeño con condiciones justas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose mb-20">
              {[
                { title: "Bono de Bienvenida", desc: "Primera bonificación al registrarte. Suele ser la más generosa y puede incluir un porcentaje sobre tu depósito inicial más tiradas gratis.", amount: "100%-200% hasta 500€", rollover: "x25 - x35", tip: "Lee siempre qué juegos contribuyen al 100%." },
                { title: "Tiradas Gratis (Free Spins)", desc: "Giros gratuitos en tragaperras específicas. Pueden venir con el bono de bienvenida o como promoción independiente.", amount: "20-200 giros", rollover: "x30 - x40", tip: "Fíjate en el valor por giro (normalmente 0.10€-0.20€)." },
                { title: "Cashback (Reembolso)", desc: "Recuperas un porcentaje de tus pérdidas netas semanales o mensuales. La mejor opción para jugadores regulares.", amount: "5%-15% de pérdidas", rollover: "x0 - x1", tip: "Es el bono más justo porque suele tener requisitos mínimos." },
                { title: "Bono de Recarga", desc: "Bonificaciones en depósitos posteriores al primero. Recompensan la fidelidad con porcentajes menores pero constantes.", amount: "25%-50% hasta 100€", rollover: "x25 - x35", tip: "Aprovéchalas si juegas regularmente los fines de semana." }
              ].map((item, i) => (
                <div key={i} className="glass p-8 rounded-3xl border-brand-border space-y-4">
                  <h4 className="text-2xl font-bold text-brand-gold">{item.title}</h4>
                  <p className="text-sm text-brand-text-muted leading-relaxed">{item.desc}</p>
                  <div className="space-y-2 pt-4 border-t border-white/5">
                    <div className="flex justify-between text-xs">
                      <span className="text-brand-text-muted uppercase">Importe Típico:</span>
                      <span className="text-white font-bold">{item.amount}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-brand-text-muted uppercase">Rollover Habitual:</span>
                      <span className="text-white font-bold">{item.rollover}</span>
                    </div>
                  </div>
                  <div className="bg-brand-gold/5 p-4 rounded-xl border border-brand-gold/10 text-xs text-brand-gold italic">
                    💡 Consejo: {item.tip}
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-display font-bold mb-8 text-white">📊 Tabla Resumen: ¿Qué Bono te Conviene?</h2>
            <div className="overflow-x-auto mb-16">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-brand-border">
                    <th className="py-4 px-4 text-brand-gold font-bold uppercase tracking-widest text-xs">Si buscas...</th>
                    <th className="py-4 px-4 text-brand-gold font-bold uppercase tracking-widest text-xs">Mejor opción</th>
                    <th className="py-4 px-4 text-brand-gold font-bold uppercase tracking-widest text-xs">Por qué</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 text-white">Probar sin riesgo</td>
                    <td className="py-4 px-4 text-brand-text-muted">Bono sin depósito</td>
                    <td className="py-4 px-4 text-brand-text-muted">No arriesgas tu dinero propio</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 text-white">Máximo saldo inicial</td>
                    <td className="py-4 px-4 text-brand-text-muted">Bono de bienvenida</td>
                    <td className="py-4 px-4 text-brand-text-muted">Mayor porcentaje y tope de bono</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 text-white">Condiciones justas</td>
                    <td className="py-4 px-4 text-brand-text-muted">Cashback / Sin Rollover</td>
                    <td className="py-4 px-4 text-brand-text-muted">Requisitos de apuesta bajos o nulos</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-display font-bold mb-8 text-white">Preguntas Frecuentes sobre Bonos</h2>
            <div className="not-prose">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="glass px-6 rounded-2xl border-brand-border">
                  <AccordionTrigger className="text-left font-bold hover:no-underline py-6">
                    ¿Qué es el rollover o requisito de apuesta?
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-text-muted pb-6 leading-relaxed">
                    Es la cantidad de veces que debes apostar el valor del bono (y a veces el depósito) antes de poder retirar las ganancias generadas. Por ejemplo, un bono de 10€ con rollover x30 significa que debes realizar apuestas por valor de 300€ antes de cobrar.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="glass px-6 rounded-2xl border-brand-border">
                  <AccordionTrigger className="text-left font-bold hover:no-underline py-6">
                    ¿Puedo retirar el dinero del bono inmediatamente?
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-text-muted pb-6 leading-relaxed">
                    No. El dinero del bono se considera "dinero de juego" hasta que se cumplen los requisitos de apuesta. Una vez completado el rollover, el saldo se convierte en dinero real retirable.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="glass px-6 rounded-2xl border-brand-border">
                  <AccordionTrigger className="text-left font-bold hover:no-underline py-6">
                    ¿Todos los juegos cuentan igual para el bono?
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-text-muted pb-6 leading-relaxed">
                    No. Normalmente las tragaperras contribuyen al 100%, pero juegos como la Ruleta o el Blackjack suelen contribuir mucho menos (entre un 5% y un 20%) debido a su baja ventaja de la casa.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
