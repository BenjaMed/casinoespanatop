import { Shield, Info, Scale } from "lucide-react";

interface LegalProps {
  title: string;
}

export default function Legal({ title }: LegalProps) {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold mx-auto">
            <Scale className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold">{title}</h1>
          <p className="text-brand-text-muted">Última actualización: Abril 2026</p>
        </div>

        <div className="glass p-8 md:p-12 rounded-3xl border-brand-border prose prose-invert max-w-none space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-brand-gold">1. Introducción</h2>
            <p className="text-brand-text-muted leading-relaxed">
              Bienvenido a CasinosEspañaTop.es. Al acceder y utilizar este sitio web, usted acepta cumplir con los siguientes términos y condiciones. Este sitio web es un comparador de casinos online destinado exclusivamente a personas mayores de 18 años residentes en España.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-brand-gold">2. Divulgación de Afiliación</h2>
            <p className="text-brand-text-muted leading-relaxed">
              CasinosEspañaTop.es es un sitio web de marketing de afiliación. Esto significa que podemos recibir una comisión si usted hace clic en uno de nuestros enlaces y se registra en un casino online. Sin embargo, esto no afecta la objetividad de nuestras reseñas, que se basan en análisis independientes y pruebas reales.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-brand-gold">3. Juego Responsable</h2>
            <p className="text-brand-text-muted leading-relaxed">
              El juego debe ser una forma de entretenimiento, no una forma de ganar dinero. Si siente que está perdiendo el control sobre su actividad de juego, le instamos a buscar ayuda profesional. Puede contactar con el Servicio de Atención al Juego de la DGOJ en el teléfono gratuito 900 333 888.
            </p>
            <div className="bg-brand-gold/10 border border-brand-gold/20 p-6 rounded-xl flex items-start gap-4">
              <Shield className="w-6 h-6 text-brand-gold shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-brand-gold mb-2">Compromiso con la Seguridad</h4>
                <p className="text-sm text-brand-text-muted">
                  Solo listamos operadores con licencia de la DGOJ. No promocionamos sitios sin licencia o que no cumplan con la normativa española de protección al jugador.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-brand-gold">4. Limitación de Responsabilidad</h2>
            <p className="text-brand-text-muted leading-relaxed">
              Aunque nos esforzamos por mantener la información actualizada, los términos de los bonos y las condiciones de los casinos pueden cambiar sin previo aviso. Siempre debe verificar los términos y condiciones directamente en el sitio web del operador antes de realizar un depósito.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
