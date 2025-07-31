import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Target, ShieldCheck } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, when: 'beforeChildren' },
    },
  };

  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 50 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 50 },
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-brand-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={textVariants}>
            <span className="text-brand-blue font-semibold uppercase">
              Sobre a NTC Brasil
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-800 mt-2 mb-6">
              Sua Parceria Confiável na Construção
            </h2>
            <p className="text-brand-gray-600 mb-4 leading-relaxed">
              A NTC Brasil é uma empresa dedicada a oferecer soluções inovadoras
              e de alta qualidade na área da construção. Nosso compromisso é
              atender às necessidades dos nossos clientes de maneira eficiente,
              segura e sustentável, superando expectativas em cada projeto.
            </p>
            <p className="text-brand-gray-600 leading-relaxed">
              Com uma equipe experiente e focada na excelência, garantimos a
              entrega de obras que não apenas atendem aos mais rigorosos padrões
              técnicos, mas que também realizam os sonhos e objetivos de quem
              confia em nosso trabalho.
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div className="flex items-start" variants={cardVariants}>
              <div className="flex-shrink-0 bg-brand-blue/10 text-brand-blue rounded-full p-3">
                <Building2 size={28} />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-brand-gray-800">
                  Missão
                </h3>
                <p className="mt-1 text-brand-gray-600">
                  Executar projetos com máxima qualidade e eficiência,
                  garantindo a satisfação total dos nossos clientes.
                </p>
              </div>
            </motion.div>
            <motion.div className="flex items-start" variants={cardVariants}>
              <div className="flex-shrink-0 bg-brand-blue/10 text-brand-blue rounded-full p-3">
                <Target size={28} />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-brand-gray-800">Visão</h3>
                <p className="mt-1 text-brand-gray-600">
                  Ser referência no mercado da construção, reconhecida pela
                  inovação, solidez e compromisso com o futuro.
                </p>
              </div>
            </motion.div>
            <motion.div className="flex items-start" variants={cardVariants}>
              <div className="flex-shrink-0 bg-brand-blue/10 text-brand-blue rounded-full p-3">
                <ShieldCheck size={28} />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-brand-gray-800">
                  Valores
                </h3>
                <p className="mt-1 text-brand-gray-600">
                  Integridade, Qualidade, Segurança, Sustentabilidade e Paixão
                  por construir.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
