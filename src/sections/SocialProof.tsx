import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "AMC Global me ayudó a resolver un conflicto de linderos que llevaba 3 años en litigio. Su asesoría en Derecho Catastral fue precisa y clara. Finalmente recuperé mi propiedad sin mayores gastos.",
    author: "Jorge Rodríguez",
    role: "Propietario de inmueble",
    rating: 5
  },
  {
    id: 2,
    content: "Excelente equipo en la estructuración de mi empresa familiar. El asesoramiento en Derecho Civil fue humanizado y sin tecnicismos aburridos. Recomiendo ampliamente sus servicios.",
    author: "María Elena Gutiérrez",
    role: "Empresaria",
    rating: 5
  },
  {
    id: 3,
    content: "Mi divorcio se manejó con tanta empatía y profesionalismo gracias a AMC. El equipo de Derecho de Familia realmente entiende que detrás de cada caso hay personas. Eternamente agradecida.",
    author: "Patricia Sánchez",
    role: "Cliente satisfecha",
    rating: 5
  }
];

const logos = [
  "Empresa A", "Empresa B", "Empresa C", "Empresa D", "Empresa E"
];

export const SocialProof = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="social-proof" className="py-16 md:py-24 lg:py-32 bg-white border-y-2 border-brand-cream overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Logos Section */}
        <div className="mb-16 md:mb-24">
          <p className="text-center text-sm font-semibold tracking-wider text-brand-forest/60 uppercase mb-8">
            Clientes que confían en nosotros
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {logos.map((logo, index) => (
              <div key={index} className="text-lg md:text-xl font-heading font-bold text-brand-forest/50 transition-colors hover:text-brand-bronze">
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-forest mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-lg text-brand-forest/70 font-body">
              Historias reales de cómo transformamos complejidad legal en soluciones claras.
            </p>
          </div>

          {/* Testimonial Card */}
          <div className="relative bg-gradient-to-br from-brand-forest/5 to-brand-sapphire/5 rounded-xl p-8 md:p-10 border-2 border-brand-cream min-h-96 md:min-h-80 flex flex-col justify-between">
            <Quote className="text-brand-bronze/20 mb-4" size={48} />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex-grow"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-brand-bronze text-brand-bronze" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-xl md:text-2xl font-heading text-brand-forest leading-relaxed mb-8">
                  "{testimonials[currentTestimonial].content}"
                </p>
                
                {/* Author */}
                <div>
                  <h4 className="font-heading font-bold text-lg text-brand-forest">
                    {testimonials[currentTestimonial].author}
                  </h4>
                  <p className="text-brand-forest/70 font-semibold">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t-2 border-brand-cream">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-brand-bronze w-8' 
                        : 'bg-brand-cream hover:bg-brand-forest/30 w-2'
                    }`}
                    aria-label={`Ir al testimonio ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex gap-3">
                <button 
                  onClick={prevTestimonial}
                  className="p-3 rounded-lg border-2 border-brand-forest text-brand-forest hover:bg-brand-forest hover:text-brand-cream transition-all duration-300 focus:outline-2 focus:outline-offset-2 focus:outline-brand-sapphire"
                  aria-label="Testimonio anterior"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="p-3 rounded-lg border-2 border-brand-forest text-brand-forest hover:bg-brand-forest hover:text-brand-cream transition-all duration-300 focus:outline-2 focus:outline-offset-2 focus:outline-brand-sapphire"
                  aria-label="Siguiente testimonio"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-brand-forest/70 font-body mb-6">
              ¿Listo para transformar tu situación legal?
            </p>
            <a 
              href="https://wa.me/?text=Hola%20AMC%20Servicios%20Globales%2C%20me%20interesa%20recibir%20asesor%C3%ADa"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg inline-flex justify-center gap-2"
            >
              Contáctanos ahora
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
