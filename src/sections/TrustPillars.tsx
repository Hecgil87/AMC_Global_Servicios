import { motion } from 'framer-motion';
import { Award, Users, Handshake } from 'lucide-react';

const pillars = [
  {
    title: 'Experiencia Verificada',
    description: 'Más de 15 años asesorando a empresas, profesionales y familias. Casos exitosos en derecho catastral, civil, familia y contratación estatal.',
    icon: Award,
  },
  {
    title: 'Equipo Comprometido',
    description: 'Especialistas certificados que hablan tu idioma. Nos enfocamos en entender tu situación para ofrecer soluciones a medida, no soluciones genéricas.',
    icon: Users,
  },
  {
    title: 'Aliados de Confianza',
    description: 'Trabajamos como extensión de tu equipo. Tu éxito es nuestro éxito. Transparencia total en cada paso del camino.',
    icon: Handshake,
  }
];

export const TrustPillars = () => {
  return (
    <section id="trust" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold text-brand-bronze tracking-widest uppercase mb-3">Sobre Nosotros</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-forest mb-4">
            Quiénes Somos
          </h2>
          <p className="text-lg md:text-xl text-brand-forest/70 font-body leading-relaxed">
            Somos AMC Global Servicios, un equipo de profesionales jurídicos comprometidos con transformar la complejidad legal en soluciones claras, ágiles y accesibles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card group hover:border-brand-bronze/50 bg-white"
            >
              <div className="w-16 h-16 rounded-xl bg-brand-forest/10 flex items-center justify-center mb-6 group-hover:bg-brand-forest group-hover:text-brand-cream transition-all duration-300">
                <pillar.icon className="text-brand-forest group-hover:text-brand-cream transition-colors duration-300" size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-lg font-heading font-bold text-brand-forest mb-3 group-hover:text-brand-bronze transition-colors duration-300">
                {pillar.title}
              </h3>
              <p className="text-brand-forest/70 leading-relaxed font-body">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Team intro section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto pt-8"
        >
          <p className="text-brand-forest/80 font-body text-lg leading-relaxed mb-6">
            Nuestro equipo está compuesto por profesionales certificados con experiencia en los sectores público y privado, garantizando perspectivas amplias y soluciones innovadoras.
          </p>
          <a 
            href="https://wa.me/?text=Hola%20AMC%20Servicios%20Globales%2C%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20su%20equipo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-sapphire font-semibold text-link hover:text-brand-bronze transition-colors"
          >
            Conoce nuestro equipo →
          </a>
        </motion.div>
      </div>
    </section>
  );
};
