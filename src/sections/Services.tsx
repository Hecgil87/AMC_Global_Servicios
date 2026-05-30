import { motion } from 'framer-motion';
import { Home, FileText, Heart, Building2, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Derecho Catastral',
    description: 'Asesoría integral en predios, límites, linderos y gestión territorial. Protegemos tus derechos inmobiliarios con precisión.',
    icon: Home,
    href: '#'
  },
  {
    title: 'Derecho Civil',
    description: 'Estructuración de contratos, gestión patrimonial y obligaciones civiles. Solidez legal para tus transacciones.',
    icon: FileText,
    href: '#'
  },
  {
    title: 'Derecho de Familia',
    description: 'Procesos humanos, mediación, conciliación y soluciones cercanas. Cercania y empatía en momentos delicados.',
    icon: Heart,
    href: '#'
  },
  {
    title: 'Contratación Estatal',
    description: 'Asesoría B2B especializada, licitaciones y soporte con entidades públicas. Expertise en tramitología gubernamental.',
    icon: Building2,
    href: '#'
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-brand-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-forest mb-4">
              Áreas de Especialidad
            </h2>
            <p className="text-lg md:text-xl text-brand-forest/70 font-body leading-relaxed">
              Ofrecemos soluciones jurídicas especializadas diseñadas para cubrir integralmente tus necesidades legales, patrimoniales y comerciales.
            </p>
          </div>
          <a 
            href="#contact" 
            className="text-brand-sapphire font-semibold flex items-center hover:text-brand-bronze transition-colors shrink-0 text-link"
          >
            Solicitar asesoría <ArrowRight className="ml-2" size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer h-full"
            >
              <div className="card h-full flex flex-col bg-white hover:bg-white/80 border-2 border-brand-cream hover:border-brand-bronze transition-all duration-300">
                {/* Icon */}
                <div className="p-4 rounded-lg bg-brand-forest/5 text-brand-forest group-hover:bg-brand-forest group-hover:text-brand-cream transition-all duration-300 mb-4 w-fit">
                  <service.icon size={32} strokeWidth={1.5} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl md:text-lg font-heading font-bold text-brand-forest mb-3 group-hover:text-brand-bronze transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-brand-forest/70 font-body leading-relaxed flex-grow mb-4">
                  {service.description}
                </p>
                
                {/* CTA */}
                <a 
                  href={service.href}
                  className="inline-flex items-center gap-2 text-brand-sapphire font-semibold hover:text-brand-bronze transition-colors text-link group-hover:gap-3"
                >
                  Más información <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
