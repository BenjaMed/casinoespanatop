import { useParams, Link, Navigate } from "react-router-dom";
import { CASINOS } from "../data/casinos";
import { 
  Star, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  Shield, 
  Zap, 
  Smartphone, 
  CreditCard,
  ArrowLeft,
  MessageSquare,
  Globe,
  Clock,
  Lock,
  ExternalLink
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { motion } from "motion/react";

export default function Review() {
  const { slug } = useParams();
  const casino = CASINOS.find(c => c.slug === slug);

  if (!casino) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pb-20">
      {/* Hero / Header Section */}
      <section className="bg-brand-card/50 border-b border-brand-border pt-12 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-brand-text-muted hover:text-brand-gold transition-colors mb-8 text-sm">
            <ArrowLeft className="w-4 h-4" /> Volver al ranking
          </Link>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-40 h-40 bg-[#2D3748] rounded-3xl p-4 flex items-center justify-center border border-brand-border shadow-2xl overflow-hidden text-7xl">
              {casino.logo}
            </div>

            <div className="flex-grow text-center lg:text-left space-y-4">
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <div className="badge-live mb-0">LICENCIA DGOJ ✅</div>
                {casino.isRecommended && <div className="px-3 py-1 bg-brand-green/20 text-brand-green border border-brand-green rounded-full text-[10px] font-bold uppercase tracking-widest">TOP ELECCIÓN 🥇</div>}
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-extrabold leading-tight">
                {casino.name} Casino España: <br className="hidden md:block" /> Review Completa 2026
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-6 h-6 ${i < Math.floor(casino.score) ? "fill-brand-gold text-brand-gold" : "text-brand-border"}`} />
                  ))}
                </div>
                <span className="font-impact text-3xl text-brand-gold">{casino.score} <span className="text-sm text-brand-text-muted">/ 5</span></span>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border-brand-gold/30 w-full lg:w-80 text-center space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] text-brand-text-muted uppercase tracking-widest font-bold">Bono de Bienvenida</span>
                <p className="text-2xl font-display font-extrabold text-brand-gold">{casino.bonus}</p>
              </div>
              <a 
                href={casino.affiliateUrl} 
                target="_blank" 
                rel="nofollow noopener sponsored"
                className="w-full py-4 flex items-center justify-center gap-2 text-lg bg-brand-gold hover:bg-brand-gold/90 text-black font-extrabold rounded-xl shadow-lg shadow-brand-gold/20 transition-all transform hover:scale-[1.02]"
              >
                Reclamar Bono <ChevronRight className="w-5 h-5" />
              </a>
              <p className="text-[10px] text-brand-text-muted leading-tight">
                T&C aplican. Solo +18. Juega con responsabilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="bg-brand-card border border-brand-border w-full justify-start h-auto p-1 gap-1 overflow-x-auto">
                <TabsTrigger value="overview" className="data-[state=active]:bg-brand-gold data-[state=active]:text-black py-3 px-6 rounded-lg font-bold transition-all">Resumen</TabsTrigger>
                <TabsTrigger value="bonus" className="data-[state=active]:bg-brand-gold data-[state=active]:text-black py-3 px-6 rounded-lg font-bold transition-all">Bonos</TabsTrigger>
                <TabsTrigger value="games" className="data-[state=active]:bg-brand-gold data-[state=active]:text-black py-3 px-6 rounded-lg font-bold transition-all">Juegos</TabsTrigger>
                <TabsTrigger value="payments" className="data-[state=active]:bg-brand-gold data-[state=active]:text-black py-3 px-6 rounded-lg font-bold transition-all">Pagos</TabsTrigger>
              </TabsList>

              <div className="mt-12 prose prose-invert max-w-none">
                <TabsContent value="overview" className="space-y-8">
                  <div className="glass p-8 rounded-2xl border-brand-border">
                    <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                      <Shield className="w-6 h-6 text-brand-gold" /> Veredicto del Experto
                    </h2>
                    <p className="text-brand-text-muted leading-relaxed mb-6">
                      {casino.review.summary}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="font-bold text-brand-green flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5" /> Pros
                        </h4>
                        <ul className="space-y-2 list-none p-0">
                          {casino.pros.map((pro, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-brand-text-muted">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-green" /> {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-bold text-red-500 flex items-center gap-2">
                          <XCircle className="w-5 h-5" /> Contras
                        </h4>
                        <ul className="space-y-2 list-none p-0">
                          {casino.cons.map((con, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-brand-text-muted">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h2 className="text-2xl font-display font-bold">Análisis Detallado de {casino.name}</h2>
                    <p className="text-brand-text-muted leading-relaxed">
                      {casino.review.verdict}
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="bonus" className="space-y-8">
                  <h2 className="text-2xl font-display font-bold">Bonos y Promociones</h2>
                  <p className="text-brand-text-muted leading-relaxed">
                    {casino.review.welcomeBonus}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-brand-card border border-brand-border p-6 rounded-2xl text-center">
                      <span className="block text-xs text-brand-text-muted uppercase mb-2">Rollover</span>
                      <span className="text-2xl font-impact text-brand-gold">{casino.rollover}</span>
                    </div>
                    <div className="bg-brand-card border border-brand-border p-6 rounded-2xl text-center">
                      <span className="block text-xs text-brand-text-muted uppercase mb-2">Depósito Mínimo</span>
                      <span className="text-2xl font-impact text-brand-gold">{casino.minDeposit}</span>
                    </div>
                    <div className="bg-brand-card border border-brand-border p-6 rounded-2xl text-center">
                      <span className="block text-xs text-brand-text-muted uppercase mb-2">Validez</span>
                      <span className="text-2xl font-impact text-brand-gold">30 Días</span>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="games" className="space-y-8">
                  <h2 className="text-2xl font-display font-bold">Catálogo de Juegos</h2>
                  <p className="text-brand-text-muted leading-relaxed">
                    {casino.review.games}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="glass p-4 rounded-xl text-center space-y-2">
                      <Zap className="w-6 h-6 text-brand-gold mx-auto" />
                      <span className="block text-xs font-bold uppercase">Slots</span>
                    </div>
                    <div className="glass p-4 rounded-xl text-center space-y-2">
                      <Star className="w-6 h-6 text-brand-gold mx-auto" />
                      <span className="block text-xs font-bold uppercase">Ruleta Live</span>
                    </div>
                    <div className="glass p-4 rounded-xl text-center space-y-2">
                      <Shield className="w-6 h-6 text-brand-gold mx-auto" />
                      <span className="block text-xs font-bold uppercase">Blackjack</span>
                    </div>
                    <div className="glass p-4 rounded-xl text-center space-y-2">
                      <Smartphone className="w-6 h-6 text-brand-gold mx-auto" />
                      <span className="block text-xs font-bold uppercase">App Móvil</span>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="payments" className="space-y-8">
                  <h2 className="text-2xl font-display font-bold">Métodos de Pago y Retiro</h2>
                  <p className="text-brand-text-muted leading-relaxed">
                    {casino.review.payments}
                  </p>
                  <div className="overflow-hidden rounded-2xl border border-brand-border">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-white/5 text-brand-text-muted uppercase text-[10px] font-bold">
                        <tr>
                          <th className="px-6 py-4">Método</th>
                          <th className="px-6 py-4">Tiempo</th>
                          <th className="px-6 py-4">Mínimo</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-brand-border">
                        {casino.features.bizum && (
                          <tr>
                            <td className="px-6 py-4 font-bold">Bizum</td>
                            <td className="px-6 py-4 text-brand-green">Instantáneo</td>
                            <td className="px-6 py-4">10€</td>
                          </tr>
                        )}
                        {casino.features.paypal && (
                          <tr>
                            <td className="px-6 py-4 font-bold">PayPal</td>
                            <td className="px-6 py-4 text-brand-green">{"< 24h"}</td>
                            <td className="px-6 py-4">10€</td>
                          </tr>
                        )}
                        <tr>
                          <td className="px-6 py-4 font-bold">Tarjeta Visa/MC</td>
                          <td className="px-6 py-4">1-3 días</td>
                          <td className="px-6 py-4">10€</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-3xl border-brand-border space-y-6">
              <h3 className="text-xl font-display font-bold border-b border-brand-border pb-4">Datos Clave</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-brand-text-muted flex items-center gap-2"><Globe className="w-4 h-4" /> Licencia</span>
                  <span className="font-bold text-brand-green">DGOJ España</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-brand-text-muted flex items-center gap-2"><Clock className="w-4 h-4" /> Retiro medio</span>
                  <span className="font-bold">{casino.payoutSpeed}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-brand-text-muted flex items-center gap-2"><MessageSquare className="w-4 h-4" /> Soporte</span>
                  <span className="font-bold">Chat 24/7</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-brand-text-muted flex items-center gap-2"><Lock className="w-4 h-4" /> Seguridad</span>
                  <span className="font-bold">SSL 256-bit</span>
                </div>
              </div>
            </div>

            <div className="bg-brand-gold rounded-3xl p-8 text-black space-y-6">
              <h3 className="text-2xl font-impact uppercase leading-tight">¿Listo para jugar en {casino.name}?</h3>
              <p className="text-sm font-medium opacity-80 leading-relaxed">
                Aprovecha el bono exclusivo de bienvenida y empieza a jugar hoy mismo en uno de los casinos más seguros de España.
              </p>
              <a 
                href={casino.affiliateUrl} 
                target="_blank" 
                rel="nofollow noopener sponsored"
                className="w-full bg-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-900 transition-all"
              >
                Ir al Casino <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
