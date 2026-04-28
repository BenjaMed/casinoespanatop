import { Link } from "react-router-dom";
import { CASINOS } from "../data/casinos";
import { Shield, Gift, ChevronRight, CheckCircle2, Star, Trophy, Info, HelpCircle, Zap } from "lucide-react";
import CasinoTable from "../components/CasinoTable";
import { Button } from "../components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { motion } from "motion/react";
import SEO from "../components/SEO";

export default function NoDepositBonus() {
  // Filter casinos that explicitly mention "sin depósito" in their bonus or review
  const noDepositCasinos = CASINOS.filter(c => 
    c.bonus.toLowerCase().includes("sin depósito") || 
    c.review.welcomeBonus.toLowerCase().includes("sin depósito") ||
    c.name === "Casino Gran Madrid" ||
    c.name === "Sportium"
  );

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://casinostop.guru/"
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "Bonos Sin Depósito",
      "item": "https://casinostop.guru/bonos-sin-deposito"
    }]
  };

  return (
    <div className="pb-20">
      <SEO 
        title="Bonos Sin Depósito Casino Gratis 2026 | España"
        description="Consigue bonos gratis sin depósito para jugar al casino online. Listado de casinos legales en España que ofrecen saldo real o giros gratis solo por registrarte y verificar tu cuenta."
        canonical="https://casinostop.guru/bonos-sin-deposito"
        jsonLd={breadcrumbSchema}
      />
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-green/10 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="badge-live mb-6"
            >
              Actualizado: Mayo 2026
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold leading-tight mb-6">
              Bonos <span className="text-brand-green">Sin Depósito</span> España 2026
            </h1>
            <p className="text-xl text-brand-text-muted leading-relaxed mb-8">
              Descubre los casinos que te regalan saldo o giros gratis solo por verificar tu cuenta. Juega sin riesgo y gana dinero real en los operadores más seguros de CasinosTOP.
            </p>
          </div>
        </div>
      </section>

      {/* Ranking Table Section */}
      <section className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-display font-bold text-white">Casinos con Bonos Gratis por Registro</h2>
          <p className="text-brand-text-muted">Listado de operadores legales que ofrecen saldo gratuito tras la verificación de identidad.</p>
        </div>
        <div className="bg-brand-card/80 backdrop-blur-xl border border-brand-border rounded-3xl p-1 md:p-2 shadow-2xl">
          <CasinoTable />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-invert prose-brand">
            <h2 className="text-4xl font-display font-bold mb-8 text-white text-center">¿Qué son los bonos sin depósito y cómo funcionan?</h2>
            <p className="text-xl text-brand-text-muted text-center mb-16 leading-relaxed">
              Los bonos sin depósito son la "joya de la corona" para los nuevos jugadores. En CasinosTOP te explicamos cómo aprovecharlos legalmente en España para probar juegos sin arriesgar tu propio dinero.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose mb-20">
              <div className="glass p-8 rounded-3xl border-brand-border space-y-4">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold">
                  <Gift className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Saldo de Dinero Real</h3>
                <p className="text-sm text-brand-text-muted leading-relaxed">
                  El casino te asigna una pequeña cantidad (normalmente entre 5€ y 30€) para que apuestes en cualquier juego permitido. Es ideal para probar la ruleta o el blackjack.
                </p>
              </div>
              <div className="glass p-8 rounded-3xl border-brand-border space-y-4">
                <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center text-brand-green">
                  <Star className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Giros Gratis (Free Spins)</h3>
                <p className="text-sm text-brand-text-muted leading-relaxed">
                  Recibes un número de tiradas (ej. 10, 20 o 50) para una tragaperras específica. Lo que ganes con esos giros se convierte en saldo de bono sujeto a requisitos.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-display font-bold mb-8 text-white">Cómo conseguir un bono sin depósito legalmente</h2>
            <p className="text-brand-text-muted mb-6">
              Debido a la regulación española (Real Decreto 958/2020), el proceso para obtener estos bonos ha cambiado. Ya no se dan al instante de registrarse. Sigue estos pasos en CasinosTOP:
            </p>
            <div className="space-y-6 not-prose mb-16">
              {[
                { step: "1", title: "Registro", desc: "Crea tu cuenta en un casino con licencia DGOJ." },
                { step: "2", title: "Verificación KYC", desc: "Sube una foto de tu DNI/NIE por ambas caras. Es obligatorio por ley." },
                { step: "3", title: "Espera 30 Días", desc: "Debes ser usuario registrado durante al menos un mes para recibir promociones." },
                { step: "4", title: "Activación", desc: "Una vez verificado y pasado el plazo, el bono aparecerá en tu sección de promociones." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start glass p-6 rounded-2xl border-brand-border">
                  <div className="w-10 h-10 bg-brand-green text-brand-bg rounded-full flex items-center justify-center font-bold shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-brand-text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-brand-gold/5 border border-brand-gold/20 rounded-3xl p-8 my-16 not-prose">
              <h3 className="text-2xl font-bold mb-4 text-brand-gold flex items-center gap-2">
                <Info className="w-6 h-6" /> Límites de Ganancia (Max Cashout)
              </h3>
              <p className="text-brand-text-muted leading-relaxed">
                Es fundamental entender que los bonos sin depósito suelen tener un límite máximo de ganancias retirables. Por ejemplo, si el límite es de 100€ y ganas 500€ con el bono, solo podrás retirar 100€ tras cumplir el rollover. En CasinosTOP siempre recomendamos leer la letra pequeña.
              </p>
            </div>

            <h2 className="text-3xl font-display font-bold mb-8 text-white">Análisis de los Mejores Bonos Sin Depósito</h2>
            <div className="space-y-8 not-prose mb-20">
              {noDepositCasinos.map((casino) => (
                <div key={casino.id} className="glass p-8 rounded-3xl border-brand-border flex flex-col md:flex-row gap-8 items-center">
                  <div className="text-4xl">{casino.logo}</div>
                  <div className="flex-1 text-center md:text-left">
                    <h4 className="text-2xl font-bold mb-2">{casino.name}</h4>
                    <p className="text-brand-gold font-bold mb-4">{casino.bonus}</p>
                    <p className="text-sm text-brand-text-muted">{casino.review.summary}</p>
                  </div>
                  <div className="shrink-0 flex flex-col gap-3">
                    <Button
                      nativeButton={false}
                      className="bg-brand-gold hover:bg-brand-gold/90 text-black font-extrabold px-8 py-6 rounded-xl shadow-lg shadow-brand-gold/20 transition-all hover:scale-[1.02]"
                      render={
                        <a href={casino.affiliateUrl} target="_blank" rel="noopener noreferrer">Reclamar Bono</a>
                      }
                    />
                    <Link to={`/casino/${casino.slug}`} className="text-[10px] text-brand-text-muted hover:text-brand-gold transition-colors font-bold uppercase tracking-widest text-center">
                      Leer Reseña
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-display font-bold mb-8 text-white">Preguntas Frecuentes (FAQ)</h2>
            <div className="not-prose">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="glass px-6 rounded-2xl border-brand-border">
                  <AccordionTrigger className="text-left font-bold hover:no-underline py-6">
                    ¿Realmente puedo ganar dinero real sin depositar?
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-text-muted pb-6 leading-relaxed">
                    Sí, es posible. Sin embargo, debes cumplir con el rollover (requisito de apuesta) y tener en cuenta el límite máximo de retiro. Es dinero real, pero con condiciones de liberación.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="glass px-6 rounded-2xl border-brand-border">
                  <AccordionTrigger className="text-left font-bold hover:no-underline py-6">
                    ¿Por qué me piden el DNI para un bono gratis?
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-text-muted pb-6 leading-relaxed">
                    Es una exigencia legal de la DGOJ en España. Los casinos deben verificar que eres mayor de edad y que no estás en el registro de autoprohibidos antes de ofrecerte cualquier tipo de bono o promoción.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="glass px-6 rounded-2xl border-brand-border">
                  <AccordionTrigger className="text-left font-bold hover:no-underline py-6">
                    ¿Cuál es el mejor bono sin depósito actualmente?
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-text-muted pb-6 leading-relaxed">
                    Casino Gran Madrid y Sportium suelen liderar esta categoría con bonos de entre 10€ y 30€ gratuitos solo por verificar la cuenta. Consulta nuestra tabla comparativa para ver la oferta actual exacta.
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
