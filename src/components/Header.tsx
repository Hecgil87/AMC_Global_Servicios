import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Nosotros', href: '#trust' },
    { name: 'Servicios', href: '#services' },
    { name: 'Blog', href: '#blog' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-soft py-3 md:py-4'
        : 'bg-gradient-to-b from-brand-forest via-brand-forest to-transparent py-4 md:py-6'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group shrink-0">
            <img
              src="/logo.png"
              alt="AMC Global Servicios"
              className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-300 hover:text-brand-bronze focus:outline-2 focus:outline-offset-2 focus:outline-brand-sapphire ${isScrolled ? 'text-brand-forest' : 'text-brand-cream'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </nav>



          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-md transition-all duration-300 ${isScrolled
              ? 'text-brand-forest bg-brand-cream/10'
              : 'text-brand-cream bg-white/10 backdrop-blur-sm'
              }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 w-full bg-brand-cream shadow-premium border-t-2 border-brand-bronze py-4 px-4 flex flex-col gap-2"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-brand-forest font-semibold py-3 px-4 hover:bg-brand-cream/50 rounded-md transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-brand-sapphire"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/?text=Hola%20AMC%20Servicios%20Globales%2C%20me%20interesa%20recibir%20asesor%C3%ADa"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full mt-3 justify-center"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Contactar por WhatsApp"
          >
            Contactar
          </a>
        </motion.div>
      )}
    </header>
  );
};
