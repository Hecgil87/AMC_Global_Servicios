import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', company: '', service: '', message: '' });
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-corporate-blue relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -right-1/4 -top-1/4 w-1/2 h-full bg-corporate-gold rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          
          <div className="lg:w-5/12 text-white">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Inicie una Conversación Confidencial
            </h2>
            <p className="text-slate-300 font-body text-lg mb-8 leading-relaxed">
              Nuestro equipo de especialistas está listo para evaluar su situación legal y proponer una hoja de ruta estratégica. Complete el formulario y un socio se pondrá en contacto a la brevedad.
            </p>
            
            <div className="space-y-6 text-slate-300">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-heading font-semibold text-white mb-2">Privacidad Garantizada</h4>
                <p className="text-sm">Toda la información compartida está protegida por un estricto acuerdo de confidencialidad y secreto profesional desde el primer contacto.</p>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl"
            >
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div className="w-16 h-16 bg-emerald-100 text-corporate-emerald rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-corporate-blue mb-4">Mensaje Recibido</h3>
                  <p className="text-slate-600 font-body">
                    Gracias por contactarnos. Un especialista legal revisará su solicitud y nos comunicaremos con usted pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700">Nombre Completo *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-corporate-blue/20 focus:border-corporate-blue transition-colors outline-none bg-slate-50 focus:bg-white"
                        placeholder="Ej. Juan Pérez"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700">Correo Electrónico Corporativo *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-corporate-blue/20 focus:border-corporate-blue transition-colors outline-none bg-slate-50 focus:bg-white"
                        placeholder="juan@empresa.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700">Empresa / Organización</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-corporate-blue/20 focus:border-corporate-blue transition-colors outline-none bg-slate-50 focus:bg-white"
                        placeholder="Nombre de su empresa"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="block text-sm font-medium text-slate-700">Área de Interés *</label>
                      <select 
                        id="service" 
                        name="service" 
                        required
                        value={formState.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-corporate-blue/20 focus:border-corporate-blue transition-colors outline-none bg-slate-50 focus:bg-white appearance-none"
                      >
                        <option value="" disabled>Seleccione un servicio</option>
                        <option value="corporativo">Derecho Corporativo</option>
                        <option value="tributario">Derecho Tributario</option>
                        <option value="comercio">Comercio Exterior</option>
                        <option value="propiedad">Propiedad Intelectual</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700">Resumen del Asunto *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      required
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-corporate-blue/20 focus:border-corporate-blue transition-colors outline-none bg-slate-50 focus:bg-white resize-none"
                      placeholder="Describa brevemente su requerimiento legal..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full btn-primary py-4 text-lg mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Procesando...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Solicitar Asesoría <Send className="ml-2" size={20} />
                      </span>
                    )}
                  </button>
                  <p className="text-xs text-slate-500 text-center mt-4">
                    Al enviar este formulario, usted acepta nuestra política de privacidad.
                  </p>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
