import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: '¿Qué debes saber sobre la herencia sin testamento?',
    excerpt: 'Cuando no existe un testamento válido, la ley determina cómo se distribuye el patrimonio. Conoce los pasos y plazos legales.',
    author: 'Lic. María García',
    date: '15 de Mayo, 2024',
    category: 'Derecho de Familia',
    readTime: '5 min'
  },
  {
    id: 2,
    title: 'Contratación estatal: Guía para emprendedores',
    excerpt: 'Aprende cómo participar en licitaciones públicas, requisitos previos y estrategias para ganar una contratación estatal.',
    author: 'Dr. Carlos López',
    date: '12 de Mayo, 2024',
    category: 'Contratación Estatal',
    readTime: '8 min'
  },
  {
    id: 3,
    title: 'Límites y linderos: Tu derecho a definir tu propiedad',
    excerpt: 'Los conflictos de límites entre propiedades son frecuentes. Aquí te explicamos cómo proteger tus derechos territoriales.',
    author: 'Lic. Andrea Martínez',
    date: '8 de Mayo, 2024',
    category: 'Derecho Catastral',
    readTime: '6 min'
  },
  {
    id: 4,
    title: 'Cláusulas esenciales en un contrato civil',
    excerpt: 'Un buen contrato protege tus intereses. Descubre cuáles son las cláusulas que NO puedes dejar fuera.',
    author: 'Dr. Roberto Díaz',
    date: '5 de Mayo, 2024',
    category: 'Derecho Civil',
    readTime: '7 min'
  }
];

export const Blog = () => {
  return (
    <section id="blog" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="mb-12 md:mb-16">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-brand-bronze tracking-widest uppercase mb-3">Blog Jurídico</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-forest mb-4">
              Derecho para Humanos
            </h2>
            <p className="text-lg md:text-xl text-brand-forest/70 font-body leading-relaxed max-w-2xl">
              Artículos prácticos y accesibles que resuelven dudas del día a día. Aprende de expertos sin tecnicismos innecesarios.
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col h-full border-2 border-brand-cream hover:border-brand-bronze rounded-xl overflow-hidden transition-all duration-300 hover:shadow-premium"
            >
              {/* Post Header */}
              <div className="bg-gradient-to-br from-brand-forest/10 to-brand-sapphire/10 p-6 flex-grow flex flex-col">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-brand-bronze/20 text-brand-bronze text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-lg font-heading font-bold text-brand-forest mb-3 group-hover:text-brand-bronze transition-colors duration-300 leading-tight flex-grow">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-brand-forest/70 font-body text-sm md:text-base leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex flex-col sm:flex-row gap-3 text-xs md:text-sm text-brand-forest/60 font-body pb-4 border-b-2 border-brand-cream">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <div className="ml-auto font-semibold text-brand-bronze">
                    {post.readTime}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a 
                href={`#blog/${post.id}`}
                className="p-6 flex items-center justify-between hover:bg-brand-forest/5 transition-colors duration-300 group/link"
              >
                <span className="text-brand-sapphire font-semibold group-hover/link:text-brand-bronze">
                  Leer más
                </span>
                <ArrowRight 
                  className="text-brand-sapphire group-hover/link:text-brand-bronze group-hover/link:translate-x-1 transition-all duration-300" 
                  size={20} 
                />
              </a>
            </motion.article>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 md:mt-16 text-center"
        >
          <a 
            href="#contact"
            className="btn-primary text-lg inline-flex justify-center gap-2"
          >
            Ver todos los artículos
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
