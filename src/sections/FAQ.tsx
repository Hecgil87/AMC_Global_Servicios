import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    id: 1,
    question: '¿Cuál es el costo de una consulta inicial?',
    answer: 'La primera consulta es gratuita. Evaluamos tu caso, entendemos tus necesidades y diseñamos una estrategia personalizada. Solo pagas si decides continuar con nuestros servicios.'
  },
  {
    id: 2,
    question: '¿Cuánto tiempo tarda resolver un caso?',
    answer: 'Depende de la complejidad. Casos simples pueden resolverse en semanas; litigios complejos pueden tomar meses. Te informaremos con transparencia desde el inicio y ajustaremos estrategias según sea necesario.'
  },
  {
    id: 3,
    question: '¿Puedo comunicarme por WhatsApp?',
    answer: 'Absolutamente. Ofrecemos atención por WhatsApp Business para mayor comodidad. Presiona el botón verde de contacto en la esquina inferior derecha para iniciar una conversación inmediata.'
  },
  {
    id: 4,
    question: '¿Qué áreas de derecho cubren?',
    answer: 'Nos especializamos en Derecho Catastral, Civil, de Familia y Contratación Estatal. Si tu caso cae fuera de estas áreas, te recomendaremos un colega de confianza.'
  },
  {
    id: 5,
    question: '¿Atienden a empresas y personas naturales?',
    answer: 'Sí. Trabajamos tanto con empresas (B2B) como con personas naturales (B2C). Cada cliente recibe un enfoque personalizado según su perfil y necesidades.'
  },
  {
    id: 6,
    question: '¿Ofrecen asesoría preventiva?',
    answer: 'Claro. La prevención es mejor que el litigio. Ofrecemos asesoría preventiva para estructurar contratos, definir límites de propiedades y evitar conflictos futuros.'
  }
];

export const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 md:py-24 lg:py-32 bg-brand-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold text-brand-bronze tracking-widest uppercase mb-3">Preguntas Frecuentes</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-forest mb-4">
            Resolvemos tus dudas
          </h2>
          <p className="text-lg md:text-xl text-brand-forest/70 font-body leading-relaxed max-w-2xl mx-auto">
            Aquí encontrarás respuestas a las preguntas más comunes sobre nuestros servicios, tarifas y metodología de trabajo.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="faq-item"
            >
              <button
                onClick={() => toggleFAQ(item.id)}
                className="faq-button w-full text-left"
                aria-expanded={openId === item.id}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span className="text-lg font-heading font-semibold text-brand-forest">
                  {item.question}
                </span>
                <ChevronDown 
                  size={24} 
                  className={`transition-transform duration-300 text-brand-bronze flex-shrink-0 ${
                    openId === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <motion.div
                id={`faq-answer-${item.id}`}
                initial={false}
                animate={{ height: openId === item.id ? 'auto' : 0, opacity: openId === item.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 pb-2 px-4 text-brand-forest/80 font-body text-lg leading-relaxed">
                  {item.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 p-8 bg-brand-forest rounded-xl text-center"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-bronze mb-3">
            ¿No encuentras la respuesta?
          </h3>
          <p className="text-brand-cream mb-6 font-body text-lg leading-relaxed">
            Contacta directamente con nuestro equipo. Responderemos tus preguntas específicas en cuestión de horas.
          </p>
          <a 
            href="https://wa.me/?text=Hola%20AMC%20Servicios%20Globales%2C%20tengo%20una%20pregunta%20sobre%20los%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex btn-primary text-lg gap-2 bg-brand-bronze hover:bg-brand-bronze/90 text-brand-forest font-semibold"
          >
            Contactar ahora
          </a>
        </motion.div>
      </div>
    </section>
  );
};
