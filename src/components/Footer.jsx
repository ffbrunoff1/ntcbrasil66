import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const navLinks = [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Diferenciais', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.footer
      className="bg-brand-gray-900 text-brand-gray-300"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <a href="#home">
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753924345606_0.png"
                alt="NTC Brasil Logo"
                className="h-12 w-auto mb-4"
              />
            </a>
            <p className="max-w-xs text-brand-gray-400">
              Construindo sonhos com solidez e inovação desde o primeiro tijolo.
            </p>
          </div>

          <div className="md:mx-auto">
            <h3 className="font-bold text-lg text-white mb-4 uppercase tracking-wider">
              Navegação
            </h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-brand-blue transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:ml-auto">
            <h3 className="font-bold text-lg text-white mb-4 uppercase tracking-wider">
              Contato
            </h3>
            <ul className="space-y-2 text-brand-gray-400">
              <li className="flex items-center justify-center md:justify-start">
                <span>+55 44 99104-0774</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <span>Rua Padre Lebret, 801, G05</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-brand-gray-800 pt-8 text-center text-sm text-brand-gray-500">
          <p>
            &copy; {new Date().getFullYear()} NTC Brasil. Todos os direitos
            reservados. Projeto desenvolvido com tecnologia de ponta.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
