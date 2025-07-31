import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-blue-800 z-0"></div>
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

      <motion.div
        className="relative z-20 text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-shadow-lg"
          variants={itemVariants}
        >
          Construindo sonhos com{' '}
          <span className="text-blue-300">solidez e inovação.</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-blue-100"
          variants={itemVariants}
        >
          Sua parceria confiável no universo da construção. Transformamos ideias
          em realidade com excelência e compromisso.
        </motion.p>
        <motion.div variants={itemVariants}>
          <a
            href="#contact"
            className="inline-block bg-brand-white text-brand-blue font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-blue-100 hover:shadow-glow transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Inicie seu projeto hoje!
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        className="absolute bottom-10 z-20"
        initial={{ y: 0, opacity: 0.7 }}
        animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll down"
      >
        <ArrowDown size={32} className="text-white" />
      </motion.a>
    </section>
  );
}
