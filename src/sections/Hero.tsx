import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden bg-brand-forest">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-forest via-brand-forest to-brand-forest/90"></div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-bronze/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-sapphire/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-brand-bronze leading-tight mb-8 drop-shadow-lg">
              Soluciones jurídicas claras y ágiles para proteger tu tranquilidad y tu negocio
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-brand-cream max-w-2xl mx-auto mb-4 leading-relaxed font-body"
          >
            En AMC Global Servicios, transformamos la complejidad legal en estrategias precisas y accesibles. Sin tecnicismos innecesarios, solo soluciones efectivas para tu patrimonio, tu negocio y tu familia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
          >
            <a
              href="https://wa.me/?text=Hola%20AMC%20Servicios%20Globales%2C%20me%20interesa%20recibir%20asesor%C3%ADa"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group text-lg inline-flex justify-center"
              aria-label="Contactar por WhatsApp"
            >
              Agendar Consulta
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#services"
              className="btn-outline border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-brand-forest text-lg inline-flex justify-center"
            >
              Explorar Servicios
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-8 flex flex-col sm:flex-row gap-6 justify-center text-brand-cream text-sm font-semibold"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl text-brand-bronze">✓</span>
              <span>Asesoría especializada</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl text-brand-bronze">✓</span>
              <span>Respuesta rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl text-brand-bronze">✓</span>
              <span>Confiabilidad comprobada</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
