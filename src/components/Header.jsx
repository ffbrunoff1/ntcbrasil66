import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LayoutGrid } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Diferenciais', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const linkVariants = {
    initial: { y: -10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: {
      opacity: 1,
      y: '0%',
      transition: { type: 'spring', stiffness: 120, damping: 20 },
    },
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isMenuOpen ? 'bg-brand-white shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <img
            src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753924345606_0.png"
            alt="NTC Brasil Logo"
            className="h-10 md:h-12 w-auto transition-transform duration-300 hover:scale-105"
          />
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors duration-300 ${
                scrolled
                  ? 'text-brand-gray-700 hover:text-brand-blue'
                  : 'text-brand-white hover:text-brand-blue-dark'
              }`}
              variants={linkVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`transition-colors duration-300 z-50 ${
              scrolled || isMenuOpen
                ? 'text-brand-gray-800'
                : 'text-brand-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-0 left-0 w-full h-screen bg-brand-white pt-24"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-semibold text-brand-gray-800 hover:text-brand-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
