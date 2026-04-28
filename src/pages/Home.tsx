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
                Ranking Actualizado: {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
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
                <Button className="w-full py-6 bg-brand-gold hover:bg-brand-gold/90 text-black font-extrabold text-lg rounded-xl shadow-lg shadow-brand-gold/20">
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
      <section id="ranking" className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-brand-card/80 backdrop-blur-xl border border-brand-border rounded-3xl p-1 md:p-2 shadow-2xl">
          <CasinoTable />
        </div>
      </section>

      {/* SEO Content: Detailed Guide */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-invert prose-brand">
            <h2 className="text-4xl font-display font-extrabold mb-8 text-white">Cómo Elegir los Mejores Casinos Online en España (Guía 2026)</h2>
            <p className="text-lg text-brand-text-muted leading-relaxed mb-6">
              Encontrar el mejor casino online en España no es tarea fácil. Con la regulación de la DGOJ (Dirección General de Ordenación del Juego), el mercado español es uno de los más seguros del mundo, pero también uno de los más competitivos. En CasinosTOP, analizamos cada operador bajo criterios estrictos de seguridad, variedad de juegos y rapidez de pagos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 not-prose">
              <div className="glass p-6 rounded-2xl border-brand-border">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-brand-gold">
                  <Shield className="w-5 h-5" /> Seguridad Certificada
                </h3>
                <p className="text-sm text-brand-text-muted">
                  Solo listamos casinos con licencia .es. Verificamos el cifrado SSL de 256 bits y la auditoría de RNG (Generador de Números Aleatorios) para garantizar juegos justos.
                </p>
              </div>
              <div className="glass p-6 rounded-2xl border-brand-border">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-brand-gold">
                  <Zap className="w-5 h-5" /> Pagos en Tiempo Récord
                </h3>
                <p className="text-sm text-brand-text-muted">
                  Sabemos que quieres tu dinero rápido. Probamos personalmente los retiros con Bizum y PayPal para asegurar que recibas tus ganancias en menos de 24 horas.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6">¿Qué hace que un casino sea el "Mejor" en España?</h3>
            <p className="text-brand-text-muted mb-6">
              Para que un casino ocupe los primeros puestos de nuestro ranking, debe sobresalir en cuatro pilares fundamentales:
            </p>
            <ul className="space-y-4 text-brand-text-muted mb-12 list-none p-0">
              <li className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0" />
                <span><strong>Catálogo de Juegos:</strong> Más de 1.000 slots, ruleta en vivo con crupieres reales y mesas de blackjack con límites variados.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0" />
                <span><strong>Atención al Cliente:</strong> Soporte 24/7 en castellano a través de chat en vivo, teléfono gratuito y respuesta rápida por email.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0" />
                <span><strong>Compatibilidad Móvil:</strong> Una app nativa fluida o una versión web perfectamente optimizada para iOS y Android.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0" />
                <span><strong>Transparencia en Bonos:</strong> Términos y condiciones claros, sin letras pequeñas y con requisitos de apuesta (rollover) realistas.</span>
              </li>
            </ul>



            <h2 className="text-3xl font-display font-bold mt-16 mb-8">Mejores Métodos de Pago en Casinos Españoles</h2>
            <p className="text-brand-text-muted mb-8">
              La comodidad al depositar y retirar es clave. Estos son los métodos más populares y seguros que encontrarás en los casinos de nuestro top:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 not-prose mb-16">
              <div className="glass p-4 rounded-xl text-center">
                <div className="font-bold text-brand-green mb-1">Bizum</div>
                <div className="text-[10px] text-brand-text-muted">Instantáneo</div>
              </div>
              <div className="glass p-4 rounded-xl text-center">
                <div className="font-bold text-blue-400 mb-1">PayPal</div>
                <div className="text-[10px] text-brand-text-muted">{"< 24 horas"}</div>
              </div>
              <div className="glass p-4 rounded-xl text-center">
                <div className="font-bold text-orange-400 mb-1">Mastercard</div>
                <div className="text-[10px] text-brand-text-muted">1-3 días</div>
              </div>
              <div className="glass p-4 rounded-xl text-center">
                <div className="font-bold text-white mb-1">Apple Pay</div>
                <div className="text-[10px] text-brand-text-muted">Instantáneo</div>
              </div>
            </div>

            {/* Quiz Widget */}
            <div className="not-prose my-24">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">¿No sabes cuál elegir?</h2>
                <p className="text-brand-text-muted">Responde 3 preguntas y encuentra tu casino ideal en segundos.</p>
              </div>
              <CasinoQuiz />
            </div>

            <h2 className="text-3xl font-display font-bold mt-16 mb-8">Análisis Detallado de los Operadores Líderes en España</h2>
            <p className="text-brand-text-muted mb-6">
              Para ayudarte a decidir, hemos preparado un análisis pormenorizado de los que consideramos los mejores casinos online en España en este momento. Cada uno destaca en un área específica, permitiéndote elegir según tus preferencias personales.
            </p>

            <div className="space-y-12 my-16">
              <div className="glass p-10 rounded-[2rem] border-brand-border">
                <h3 className="text-2xl font-bold text-white mb-4">1. Luckia: El Orgullo Nacional</h3>
                <p className="text-brand-text-muted mb-4">
                  Luckia no es solo un casino; es una institución en el juego español. Con sede en Galicia, este operador ha sabido trasladar su éxito de los locales físicos al mundo digital con una maestría envidiable. Lo que más nos gusta de Luckia es su cercanía. Su soporte es impecable y sus promociones están diseñadas pensando exclusivamente en el público español.
                </p>
                <p className="text-brand-text-muted">
                  Su sección de casino en vivo es, posiblemente, la mejor del país, con mesas exclusivas y crupieres que crean un ambiente de club privado inigualable. Además, su integración con Bizum es perfecta, permitiendo depósitos en segundos.
                </p>
                <div className="mt-8">
                  <Button
                    nativeButton={false}
                    className="w-full md:w-auto px-12 py-6 text-lg bg-brand-gold hover:bg-brand-gold/90 text-black font-extrabold rounded-xl shadow-lg shadow-brand-gold/20"
                    render={
                      <a
                        href="https://www.luckia.es/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visitar Luckia <ChevronRight className="ml-2 w-5 h-5" />
                      </a>
                    }
                  />
                </div>
              </div>

              <div className="glass p-10 rounded-[2rem] border-brand-border">
                <h3 className="text-2xl font-bold text-white mb-4">2. Bet365: La Potencia Global</h3>
                <p className="text-brand-text-muted mb-4">
                  Aunque muchos conocen a Bet365 por las apuestas deportivas, su casino es una auténtica joya oculta. Utilizan principalmente software de Playtech, lo que garantiza acceso a las slots de superhéroes y botes progresivos más grandes del mercado.
                </p>
                <p className="text-brand-text-muted">
                  La app de Bet365 es un prodigio de la ingeniería: rápida, segura y con una estabilidad que pocos competidores pueden igualar. Si buscas un sitio donde todo funcione a la primera, este es tu casino.
                </p>
                <div className="mt-8">
                  <Button
                    nativeButton={false}
                    className="w-full md:w-auto px-12 py-6 text-lg bg-brand-gold hover:bg-brand-gold/90 text-black font-extrabold rounded-xl shadow-lg shadow-brand-gold/20"
                    render={
                      <a
                        href="https://www.bet365.es/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Jugar en Bet365 <ChevronRight className="ml-2 w-5 h-5" />
                      </a>
                    }
                  />
                </div>
              </div>

              <div className="glass p-10 rounded-[2rem] border-brand-border">
                <h3 className="text-2xl font-bold text-white mb-4">3. 888casino: Innovación y Exclusividad</h3>
                <p className="text-brand-text-muted mb-4">
                  888casino destaca por ofrecer juegos propios que no encontrarás en ningún otro lugar. Su sección "888 Originals" incluye slots con mecánicas únicas y botes diarios que caen sí o sí antes de medianoche.
                </p>
                <p className="text-brand-text-muted">
                  Su interfaz oscura y elegante encaja perfectamente con nuestra filosofía de diseño. Es un casino que se siente premium desde el primer clic, ideal para jugadores que buscan algo diferente a la oferta estándar.
                </p>
                <div className="mt-8">
                  <Button
                    nativeButton={false}
                    className="w-full md:w-auto px-12 py-6 text-lg bg-brand-gold hover:bg-brand-gold/90 text-black font-extrabold rounded-xl shadow-lg shadow-brand-gold/20"
                    render={
                      <a
                        href="https://www.888casino.es/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ir a 888casino <ChevronRight className="ml-2 w-5 h-5" />
                      </a>
                    }
                  />
                </div>
              </div>

              <div className="glass p-10 rounded-[2rem] border-brand-border">
                <h3 className="text-2xl font-bold text-white mb-4">4. LeoVegas: El Rey del Móvil</h3>
                <p className="text-brand-text-muted mb-4">
                  LeoVegas nació con el móvil en mente y se nota. No es que su web se adapte al móvil; es que parece diseñada para ser una extensión de tu mano. Su catálogo de slots es infinito, colaborando con casi todos los proveedores con licencia en España.
                </p>
                <p className="text-brand-text-muted">
                  Su programa de fidelidad es uno de los más generosos, premiando la constancia con bonos de dinero real y giros gratis sin complicaciones.
                </p>
                <div className="mt-8">
                  <Button
                    nativeButton={false}
                    className="w-full md:w-auto px-12 py-6 text-lg bg-brand-gold hover:bg-brand-gold/90 text-black font-extrabold rounded-xl shadow-lg shadow-brand-gold/20"
                    render={
                      <a
                        href="https://www.leovegas.es/es-es/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Probar LeoVegas <ChevronRight className="ml-2 w-5 h-5" />
                      </a>
                    }
                  />
                </div>
              </div>

              <div className="glass p-10 rounded-[2rem] border-brand-border">
                <h3 className="text-2xl font-bold text-white mb-4">5. Casino Gran Madrid: Tradición Digitalizada</h3>
                <p className="text-brand-text-muted mb-4">
                  Pocos nombres imponen tanto respeto como el Casino Gran Madrid. Su versión online mantiene ese aura de exclusividad. Destacan sus mesas de ruleta retransmitidas en directo desde el propio casino de Torrelodones, permitiéndote apostar junto a los jugadores que están allí físicamente.
                </p>
                <p className="text-brand-text-muted">
                  Es la opción preferida para los "high rollers" o jugadores que apuestan fuerte, gracias a sus límites de mesa flexibles y su atención VIP personalizada.
                </p>
                <div className="mt-8">
                  <Button
                    nativeButton={false}
                    className="w-full md:w-auto px-12 py-6 text-lg bg-brand-gold hover:bg-brand-gold/90 text-black font-extrabold rounded-xl shadow-lg shadow-brand-gold/20"
                    render={
                      <a
                        href="https://www.casinogranmadridonline.es/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Casino Gran Madrid <ChevronRight className="ml-2 w-5 h-5" />
                      </a>
                    }
                  />
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-display font-bold mt-16 mb-8">Historia y Evolución del Juego Online en España</h2>
            <p className="text-brand-text-muted mb-6">
              La industria de los mejores casinos online en España ha recorrido un largo camino desde sus inicios. Antes de 2011, el mercado operaba en una zona gris legal, donde los jugadores españoles accedían a sitios internacionales sin una protección clara del estado. Todo cambió con la aprobación de la Ley 13/2011 de Regulación del Juego, que sentó las bases de lo que hoy conocemos como un mercado seguro y regulado.
            </p>
            <p className="text-brand-text-muted mb-6">
              Desde entonces, la Dirección General de Ordenación del Juego (DGOJ) ha sido el faro que guía la industria, otorgando licencias solo a aquellos operadores que demuestran solvencia técnica, económica y un compromiso inquebrantable con el juego responsable. En 2026, España se posiciona como un referente mundial en regulación, equilibrando la libertad de mercado con la protección máxima al consumidor.
            </p>

            <h2 className="text-3xl font-display font-bold mt-16 mb-8">Nuestra Metodología: ¿Cómo Elegimos los Mejores Casinos?</h2>
            <p className="text-brand-text-muted mb-6">
              No nos tomamos a la ligera la recomendación de un casino. Para que un sitio aparezca en nuestro ranking de los mejores casinos online en España, debe superar una auditoría exhaustiva que dura semanas. Estos son los puntos clave de nuestro análisis:
            </p>
            <div className="space-y-8 my-12">
              <div className="glass p-8 rounded-3xl border-brand-border">
                <h4 className="text-xl font-bold text-white mb-4">1. Seguridad y Licencia Vigente</h4>
                <p className="text-sm text-brand-text-muted">
                  Verificamos que el operador posea todas las licencias singulares (para slots, ruleta, blackjack, etc.) y la licencia general. Además, comprobamos que el dominio sea .es y que cuente con certificados de seguridad de terceros como eCOGRA o iTech Labs.
                </p>
              </div>
              <div className="glass p-8 rounded-3xl border-brand-border">
                <h4 className="text-xl font-bold text-white mb-4">2. Calidad y Variedad del Software</h4>
                <p className="text-sm text-brand-text-muted">
                  Un buen casino no es nada sin buenos juegos. Analizamos la presencia de proveedores líderes como NetEnt, Playtech, Microgaming y Evolution Gaming. También valoramos positivamente a los casinos que apuestan por proveedores locales como MGA Games.
                </p>
              </div>
              <div className="glass p-8 rounded-3xl border-brand-border">
                <h4 className="text-xl font-bold text-white mb-4">3. Experiencia de Usuario (UX/UI)</h4>
                <p className="text-sm text-brand-text-muted">
                  Navegamos por el sitio tanto en escritorio como en móvil. Buscamos interfaces limpias, tiempos de carga rápidos y una categorización lógica de los juegos que permita al usuario encontrar su título favorito en segundos.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-display font-bold mt-16 mb-8">Los Juegos Más Populares en los Casinos Online de España</h2>
            <p className="text-brand-text-muted mb-6">
              La diversidad es la sal de la vida, y en los casinos españoles, la oferta es abrumadora. Aquí te detallamos qué puedes esperar de las categorías principales:
            </p>
            
            <h3 className="text-2xl font-bold mt-12 mb-6">Tragaperras Online (Slots)</h3>
            <p className="text-brand-text-muted mb-6">
              Son las reinas indiscutibles. Desde las clásicas máquinas de frutas de 3 rodillos hasta las modernas videoslots con miles de líneas de pago (Megaways) y gráficos en 3D dignos de una película de Hollywood. En España, las slots con temática de "Spanish Celebrities" de MGA son un éxito rotundo, uniendo la cultura popular con la emoción del azar.
            </p>
            
            <div className="not-prose my-12 glass p-8 rounded-3xl border-brand-gold/20 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-xl font-bold mb-2">🎰 ¿Buscas las mejores slots?</h4>
                <p className="text-sm text-brand-text-muted">LeoVegas tiene el catálogo más extenso de España.</p>
              </div>
              <Button
                nativeButton={false}
                className="bg-brand-gold hover:bg-brand-gold/90 text-black font-extrabold px-8 py-6 rounded-xl shadow-lg shadow-brand-gold/20"
                render={
                  <a
                    href="https://www.leovegas.es/es-es/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Jugar Ahora
                  </a>
                }
              />
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6">Ruleta en Vivo: La Experiencia Real</h3>
            <p className="text-brand-text-muted mb-6">
              Gracias a la tecnología de streaming en alta definición, puedes sentarte en una mesa de ruleta real con crupieres que hablan español. La interacción por chat y la posibilidad de ver la bola girar en tiempo real eliminan cualquier duda sobre la transparencia del juego y elevan la adrenalina al máximo.
            </p>

            <h3 className="text-2xl font-bold mt-12 mb-6">Blackjack y Juegos de Mesa</h3>
            <p className="text-brand-text-muted mb-6">
              El juego de los 21 sigue siendo el favorito de los estrategas. Los mejores casinos ofrecen variantes como el Blackjack Americano, Europeo, Multihand y versiones con apuestas laterales que multiplican las posibilidades de victoria.
            </p>

            <h2 className="text-3xl font-display font-bold mt-16 mb-8">Proveedores de Software: El Motor del Casino</h2>
            <p className="text-brand-text-muted mb-6">
              Detrás de cada gran juego hay un gran desarrollador. Conocer quién fabrica los juegos te ayudará a identificar la calidad de un casino:
            </p>
            <ul className="space-y-4 text-brand-text-muted mb-12 list-none p-0">
              <li className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-gold flex-shrink-0" />
                <span><strong>NetEnt:</strong> Famosos por títulos legendarios como Starburst y Gonzo's Quest. Innovación pura.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-gold flex-shrink-0" />
                <span><strong>Playtech:</strong> Líderes en slots con botes progresivos y ruletas premium.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-gold flex-shrink-0" />
                <span><strong>Evolution:</strong> Los reyes absolutos del casino en vivo. Su Ruleta Relámpago ha revolucionado el sector.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-display font-bold mt-16 mb-8">Seguridad y Protección al Jugador: Un Compromiso Real</h2>
            <p className="text-brand-text-muted mb-6">
              Jugar en los mejores casinos online en España significa jugar bajo el amparo de la ley. La DGOJ obliga a los operadores a implementar sistemas de protección que incluyen:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 not-prose">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h5 className="font-bold mb-2">Autoexclusión</h5>
                <p className="text-xs text-brand-text-muted">Acceso directo al Registro General de Interdicciones de Acceso al Juego (RGIAJ).</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h5 className="font-bold mb-2">Límites de Depósito</h5>
                <p className="text-xs text-brand-text-muted">Configuración de límites diarios, semanales y mensuales obligatorios por defecto.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h5 className="font-bold mb-2">Test de Autoevaluación</h5>
                <p className="text-xs text-brand-text-muted">Herramientas para que el jugador identifique comportamientos de riesgo a tiempo.</p>
              </div>
            </div>

            <h2 className="text-3xl font-display font-bold mt-16 mb-8">El Auge de los Casinos Móviles en 2026</h2>
            <p className="text-brand-text-muted mb-6">
              Hoy en día, más del 80% de las apuestas en España se realizan desde dispositivos móviles. Los mejores casinos han pasado de tener una web adaptable a desarrollar aplicaciones nativas que aprovechan la biometría (FaceID, TouchID) para inicios de sesión seguros y depósitos instantáneos. La experiencia es tan fluida que ya no hay diferencia entre jugar en un PC o en un smartphone de gama media.
            </p>

            <h2 className="text-3xl font-display font-bold mt-16 mb-8">Atención al Cliente: El Factor Humano</h2>
            <p className="text-brand-text-muted mb-6">
              Incluso en los mejores sitios pueden surgir dudas. Valoramos enormemente que un casino ofrezca soporte en castellano a través de múltiples canales. El chat en vivo es el estándar, pero la presencia de un teléfono gratuito y una sección de ayuda bien documentada son señales de un operador que respeta a sus usuarios.
            </p>

            <h2 className="text-3xl font-display font-bold mt-16 mb-8">Guía de Slots por Temática: Encuentra tu Estilo</h2>
            <p className="text-brand-text-muted mb-6">
              El mundo de las tragaperras es tan vasto que a veces es difícil elegir. En los mejores casinos online en España, las slots se dividen en categorías que atraen a diferentes tipos de jugadores:
            </p>
            <ul className="space-y-4 text-brand-text-muted mb-12 list-none p-0">
              <li><strong>Mitología y Aventura:</strong> Títulos como *Age of the Gods* o *Book of Ra* te transportan a mundos antiguos llenos de tesoros.</li>
              <li><strong>Cine y TV:</strong> Slots basadas en series como *Narcos* o películas como *Gladiator*.</li>
              <li><strong>Clásicas de Bar:</strong> Para los nostálgicos, MGA ofrece versiones digitales de las máquinas de toda la vida con sus avances y retenciones.</li>
              <li><strong>Fantasía y Magia:</strong> Hadas, magos y dragones en juegos con mecánicas de cascada y multiplicadores infinitos.</li>
            </ul>

            <h2 className="text-3xl font-display font-bold mt-16 mb-8">Estrategias y Consejos para Jugadores Inteligentes</h2>
            <p className="text-brand-text-muted mb-6">
              Aunque el casino es un juego de azar, existen formas de optimizar tu experiencia. Aquí te dejamos algunos consejos de nuestros expertos:
            </p>
            <div className="glass p-8 rounded-3xl border-brand-border my-12">
              <h4 className="text-xl font-bold text-white mb-4">Entiende el RTP (Retorno al Jugador)</h4>
              <p className="text-sm text-brand-text-muted mb-4">
                El RTP es el porcentaje teórico que el juego devuelve a los jugadores a largo plazo. Busca siempre juegos con un RTP superior al 96%.
              </p>
              <h4 className="text-xl font-bold text-white mb-4">Gestiona tu Bankroll</h4>
                <p className="text-sm text-brand-text-muted">
                  Nunca apuestes dinero que necesites para tus gastos básicos. Divide tu presupuesto en sesiones y retírate cuando alcances tu límite de pérdida o ganancia.
                </p>
            </div>

            <h2 className="text-3xl font-display font-bold mt-16 mb-8">Glosario de Términos: Habla como un Profesional</h2>
            <p className="text-brand-text-muted mb-6">
              Para moverte con soltura por los mejores casinos online en España, debes conocer estos términos:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-2">
                <span className="text-brand-gold font-bold">Volatilidad:</span>
                <p className="text-xs text-brand-text-muted">Frecuencia y cuantía de los premios. Alta volatilidad significa premios grandes pero poco frecuentes.</p>
              </div>
              <div className="space-y-2">
                <span className="text-brand-gold font-bold">RNG (Generador de Números Aleatorios):</span>
                <p className="text-xs text-brand-text-muted">El algoritmo que garantiza que cada giro o mano sea totalmente aleatorio e impredecible.</p>
              </div>
              <div className="space-y-2">
                <span className="text-brand-gold font-bold">Jackpot Progresivo:</span>
                <p className="text-xs text-brand-text-muted">Un bote que crece con cada apuesta realizada por los jugadores hasta que alguien se lo lleva.</p>
              </div>
              <div className="space-y-2">
                <span className="text-brand-gold font-bold">Wild (Comodín):</span>
                <p className="text-xs text-brand-text-muted">Símbolo que sustituye a otros para formar combinaciones ganadoras.</p>
              </div>
            </div>

            <h2 className="text-3xl font-display font-bold mt-16 mb-8">¿Por qué elegir un Casino con Licencia DGOJ?</h2>
            <p className="text-brand-text-muted mb-6">
              Muchos jugadores se preguntan si vale la pena jugar en un casino .es frente a uno internacional .com. La respuesta corta es: SÍ. Estas son las ventajas:
            </p>
            <ul className="space-y-4 text-brand-text-muted mb-12 list-none p-0">
              <li className="flex gap-3">
                <Shield className="w-6 h-6 text-brand-green flex-shrink-0" />
                <span><strong>Protección Legal:</strong> En caso de disputa, puedes recurrir a las autoridades españolas.</span>
              </li>
              <li className="flex gap-3">
                <Shield className="w-6 h-6 text-brand-green flex-shrink-0" />
                <span><strong>Fondos Seguros:</strong> Los casinos deben tener cuentas separadas para los fondos de los jugadores.</span>
              </li>
              <li className="flex gap-3">
                <Shield className="w-6 h-6 text-brand-green flex-shrink-0" />
                <span><span><strong>Juego Justo:</strong> Los sistemas son auditados periódicamente para evitar fraudes.</span></span>
              </li>
            </ul>

            <div className="not-prose my-12 glass p-8 rounded-3xl border-brand-green/20 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-xl font-bold mb-2">🛡️ Juega Seguro en Luckia</h4>
                <p className="text-sm text-brand-text-muted">Operador 100% español con licencia DGOJ garantizada.</p>
              </div>
              <Button
                nativeButton={false}
                className="bg-brand-gold hover:bg-brand-gold/90 text-black font-extrabold px-8 py-6 rounded-xl shadow-lg shadow-brand-gold/20"
                render={
                  <a href="https://www.luckia.es/" target="_blank" rel="noopener noreferrer">
                    Entrar a Luckia
                  </a>
                }
              />
            </div>

            <h2 className="text-3xl font-display font-bold mt-16 mb-8">La Revolución de la Inteligencia Artificial en el Casino</h2>
            <p className="text-brand-text-muted mb-6">
              En 2026, la IA no solo sirve para recomendarte juegos. Los mejores casinos online en España utilizan algoritmos avanzados para detectar patrones de juego compulsivo antes de que se conviertan en un problema, enviando alertas personalizadas al usuario. También mejora la seguridad, detectando intentos de fraude o suplantación de identidad en milisegundos.
            </p>

            <h2 className="text-3xl font-display font-bold mt-16 mb-8">Cómo Identificar un Casino Ilegal: Señales de Alerta</h2>
            <p className="text-brand-text-muted mb-6">
              Evita caer en trampas. Un casino ilegal suele presentar estas características:
            </p>
            <div className="bg-red-500/10 border border-red-500/20 rounded-3xl p-8 my-12">
              <ul className="space-y-4 text-sm text-brand-text-muted list-disc pl-6">
                <li>No tiene el logotipo de "Juego Seguro" ni de la DGOJ.</li>
                <li>Ofrece bonos de bienvenida exagerados a nuevos usuarios (ilegal en España).</li>
                <li>La URL no termina en .es.</li>
                <li>No solicita verificación de identidad para retirar fondos.</li>
                <li>Los términos y condiciones están mal traducidos o son ambiguos.</li>
              </ul>
            </div>

            <h2 className="text-3xl font-display font-bold mt-16 mb-8">El Papel de los Afiliados: Transparencia Total</h2>
            <p className="text-brand-text-muted mb-6">
              En CasinosTOP, somos transparentes. Recibimos una comisión por cada jugador que se registra a través de nuestros enlaces. Sin embargo, esto no influye en nuestras valoraciones. Nuestra prioridad es tu seguridad; si un casino es malo, lo diremos. Nuestra reputación es nuestro activo más valioso.
            </p>

            <h2 className="text-3xl font-display font-bold mt-16 mb-8">Evolución de los Gráficos y Sonido: Una Inmersión Total</h2>
            <p className="text-brand-text-muted mb-6">
              Hemos pasado de slots pixeladas a experiencias cinematográficas. El sonido envolvente y las animaciones en alta definición hacen que jugar desde casa sea una experiencia sensorial completa. Los proveedores compiten por crear el juego más visualmente impactante, lo que beneficia directamente al jugador.
            </p>

            <h2 className="text-3xl font-display font-bold mt-16 mb-8">Torneos de Casino: Compite contra Otros</h2>
            <p className="text-brand-text-muted mb-6">
              Muchos de los mejores casinos online en España organizan torneos de slots o blackjack. En ellos, no solo juegas contra la casa, sino que compites por escalar posiciones en un ranking y ganar premios adicionales como dinero en efectivo o viajes. Es una forma excelente de añadir un componente social al juego online.
            </p>

            <h2 className="text-3xl font-display font-bold mt-16 mb-8">Juego en Realidad Virtual: El Futuro ya está aquí</h2>
            <p className="text-brand-text-muted mb-12">
              Aunque todavía es incipiente, algunos casinos ya están experimentando con salas de Realidad Virtual. Imagina caminar por un casino digital, interactuar con otros avatares y sentarte en una mesa de póker sin moverte de tu sofá. 2026 marcará el despegue definitivo de esta tecnología en el mercado español.
            </p>

            <h2 className="text-3xl font-display font-bold mt-16 mb-8">Conclusión: Tu Próxima Aventura Comienza Aquí</h2>
            <p className="text-brand-text-muted mb-6">
              Elegir uno de los mejores casinos online en España es el primer paso para una experiencia de entretenimiento gratificante. Ya sea que busques la emoción de la ruleta en vivo, la estrategia del blackjack o la diversión instantánea de las slots, nuestro ranking te garantiza que lo harás en un entorno seguro, legal y con las mejores condiciones del mercado.
            </p>
            <p className="text-brand-text-muted mb-12">
              Recuerda siempre jugar con responsabilidad, establecer tus propios límites y ver el casino como lo que es: una forma de ocio. ¡Mucha suerte en las mesas!
            </p>

            <div className="not-prose mb-20 text-center">
              <Button
                nativeButton={false}
                className="bg-brand-gold hover:bg-brand-gold/90 text-black px-16 py-8 text-2xl font-display font-bold rounded-2xl shadow-[0_0_50px_rgba(245,197,24,0.3)] transition-all transform hover:scale-105"
                render={
                  <a
                    href="https://www.bet365.es/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VER RANKING TOP 15 COMPLETO
                  </a>
                }
              />
            </div>

            <h2 className="text-3xl font-display font-bold mt-16 mb-8">Preguntas Frecuentes (FAQ)</h2>
            <div className="not-prose">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="glass px-6 rounded-2xl border-brand-border">
                  <AccordionTrigger className="text-left font-bold hover:no-underline py-6">
                    ¿Es legal jugar al casino online en España?
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-text-muted pb-6">
                    Sí, siempre y cuando el casino tenga la licencia otorgada por la DGOJ. Todos los casinos que aparecen en nuestra web son 100% legales y operan bajo la normativa española vigente.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="glass px-6 rounded-2xl border-brand-border">
                  <AccordionTrigger className="text-left font-bold hover:no-underline py-6">
                    ¿Cuál es el casino que más rápido paga?
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-text-muted pb-6">
                    Actualmente, Luckia y Bet365 lideran el mercado en rapidez. Si utilizas métodos como Bizum o PayPal, puedes recibir tus ganancias en cuestión de minutos u horas.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="glass px-6 rounded-2xl border-brand-border">
                  <AccordionTrigger className="text-left font-bold hover:no-underline py-6">
                    ¿Puedo jugar gratis antes de depositar?
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-text-muted pb-6">
                    Muchos casinos ofrecen versiones "demo" de sus slots y juegos de mesa. Sin embargo, debido a la regulación, es posible que necesites estar registrado para acceder a estas versiones gratuitas.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="glass px-6 rounded-2xl border-brand-border">
                  <AccordionTrigger className="text-left font-bold hover:no-underline py-6">
                    ¿Qué son los requisitos de apuesta o rollover?
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-text-muted pb-6">
                    Es la cantidad de veces que debes apostar el dinero del bono antes de poder retirar las ganancias asociadas. Por ejemplo, un bono de 10€ con rollover de 30x requiere apostar 300€ en total.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="glass px-6 rounded-2xl border-brand-border">
                  <AccordionTrigger className="text-left font-bold hover:no-underline py-6">
                    ¿Cómo sé si un casino es seguro?
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-text-muted pb-6">
                    Busca el sello de "Juego Seguro" y el logotipo de la DGOJ en el pie de página del sitio. Además, verifica que la URL termine en .es y tenga el candado de seguridad SSL.
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
