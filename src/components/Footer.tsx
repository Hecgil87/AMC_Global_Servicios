import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-forest text-brand-cream py-12 lg:py-16 border-t-4 border-brand-bronze">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <a href="#home" className="flex items-center gap-2">
              <div className="text-3xl font-heading font-bold text-brand-bronze">
                AMC
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-semibold text-brand-cream leading-none">AMC Global</span>
                <span className="text-xs tracking-widest uppercase font-semibold text-brand-cream/70">Servicios</span>
              </div>
            </a>
            <p className="text-sm leading-relaxed text-brand-cream/80">
              Soluciones jurídicas claras y ágiles para proteger tu tranquilidad y tu negocio.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-brand-bronze text-lg mb-5">Navegación</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#home" className="text-brand-cream hover:text-brand-bronze transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-brand-sapphire">Inicio</a></li>
              <li><a href="#trust" className="text-brand-cream hover:text-brand-bronze transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-brand-sapphire">Nosotros</a></li>
              <li><a href="#services" className="text-brand-cream hover:text-brand-bronze transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-brand-sapphire">Servicios</a></li>
              <li><a href="#blog" className="text-brand-cream hover:text-brand-bronze transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-brand-sapphire">Blog</a></li>
              <li><a href="#faq" className="text-brand-cream hover:text-brand-bronze transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-brand-sapphire">FAQ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-brand-bronze text-lg mb-5">Servicios</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#services" className="text-brand-cream hover:text-brand-bronze transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-brand-sapphire">Derecho Catastral</a></li>
              <li><a href="#services" className="text-brand-cream hover:text-brand-bronze transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-brand-sapphire">Derecho Civil</a></li>
              <li><a href="#services" className="text-brand-cream hover:text-brand-bronze transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-brand-sapphire">Derecho de Familia</a></li>
              <li><a href="#services" className="text-brand-cream hover:text-brand-bronze transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-brand-sapphire">Contratación Estatal</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-brand-bronze text-lg mb-5">Contacto</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-bronze shrink-0 mt-0.5" />
                <span className="text-brand-cream/90">Oficina Principal, Ciudad</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-bronze shrink-0" />
                <a href="tel:+1234567890" className="text-brand-cream hover:text-brand-bronze transition-colors">+1 (234) 567-8900</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-bronze shrink-0" />
                <a href="mailto:contacto@amcglobal.com" className="text-brand-cream hover:text-brand-bronze transition-colors">contacto@amcglobal.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-brand-cream/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-cream/70">
          <p>&copy; {currentYear} AMC Global Servicios. Todos los derechos reservados.</p>
          <div className="flex gap-4 md:gap-6">
            <a href="#" className="hover:text-brand-bronze transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-brand-sapphire">Términos de Servicio</a>
            <a href="#" className="hover:text-brand-bronze transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-brand-sapphire">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
