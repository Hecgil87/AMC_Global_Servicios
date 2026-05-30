import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mail, X } from 'lucide-react';

export const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(
    'Hola AMC Servicios Globales, me interesa recibir asesoría jurídica. ¿Cuál es el área más recomendada para consultarle?'
  );
  const whatsappLink = `https://wa.me/?text=${whatsappMessage}`;

  const emailSubject = encodeURIComponent('Consulta sobre Asesoría Jurídica');
  const emailBody = encodeURIComponent(
    'Hola AMC Global Servicios,\n\nMe interesa recibir asesoría jurídica. Me gustaría coordinar una consulta para evaluar mi caso.\n\nQuedo atento a sus comentarios.'
  );
  const emailLink = `mailto:contacto@amcglobal.com?subject=${emailSubject}&body=${emailBody}`;

  // Framer Motion animation configurations for the popover card
  const popoverVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 22,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 10,
      transition: { duration: 0.15 },
    },
  } as const;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8 safe-bottom flex flex-col-reverse items-end"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Main Floating Trigger Button */}
      <div className="relative z-50">
        {/* Pulsing ring when closed */}
        {!isOpen && (
          <motion.div
            className="absolute -inset-1 border-2 border-brand-whatsapp rounded-full"
            animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        <button
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
          className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-premium cursor-pointer transition-all duration-300 focus:outline-2 focus:outline-offset-2 focus:outline-brand-bronze ${
            isOpen ? 'bg-brand-forest hover:bg-brand-sapphire' : 'bg-brand-whatsapp'
          }`}
          aria-label={isOpen ? "Cerrar opciones de contacto" : "Abrir opciones de contacto"}
          title={isOpen ? "Cerrar opciones" : "Opciones de contacto"}
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
          </motion.div>
        </button>
      </div>

      {/* Options menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={popoverVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute bottom-20 right-0 z-40 pointer-events-auto w-64 bg-brand-forest/95 backdrop-blur-md border border-brand-bronze/30 shadow-premium p-4 rounded-2xl flex flex-col items-center gap-3 text-center"
          >
            {/* Arrow pointing down */}
            <div className="absolute bottom-[-6px] right-[22px] w-3 h-3 bg-brand-forest border-r border-b border-brand-bronze/30 transform rotate-45" />

            {/* Header Text */}
            <div className="flex flex-col items-center">
              <span className="text-brand-cream font-heading font-bold text-sm leading-tight">
                Necesitas Ayuda...
              </span>
              <span className="text-brand-bronze font-body font-bold text-xs uppercase tracking-wider mt-0.5">
                Contactanos
              </span>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-brand-cream/15 my-1" />

            {/* Options Side by Side */}
            <div className="flex justify-center gap-6 w-full">
              {/* Option 1: WhatsApp */}
              <div className="flex flex-col items-center gap-1">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-brand-whatsapp text-white flex items-center justify-center shadow-md hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-2 focus:outline-offset-2 focus:outline-brand-whatsapp"
                  aria-label="Escríbenos por WhatsApp"
                  onClick={() => setIsOpen(false)}
                >
                  <MessageCircle size={22} />
                </a>
                <span className="text-[10px] text-brand-cream/80 font-bold uppercase tracking-wider">
                  WhatsApp
                </span>
              </div>

              {/* Option 2: Correo */}
              <div className="flex flex-col items-center gap-1">
                <a
                  href={emailLink}
                  className="w-12 h-12 rounded-full bg-brand-bronze text-white flex items-center justify-center shadow-md hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-2 focus:outline-offset-2 focus:outline-brand-bronze"
                  aria-label="Envíanos un Correo"
                  onClick={() => setIsOpen(false)}
                >
                  <Mail size={22} />
                </a>
                <span className="text-[10px] text-brand-cream/80 font-bold uppercase tracking-wider">
                  Correo
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
