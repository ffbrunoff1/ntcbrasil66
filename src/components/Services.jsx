import React from 'react';
import { motion } from 'framer-motion';
import { Award, Lightning, Recycle } from 'lucide-react';

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 80 },
    },
  };

  const services = [
    {
      icon: Award,
      title: 'Qualidade Superior',
      description:
        'Compromisso com a excelência em cada detalhe, utilizando materiais de ponta e mão de obra qualificada para garantir resultados duradouros.',
    },
    {
      icon: Lightning,
      title: 'Inovação e Tecnologia',
      description:
        'Aplicamos as mais modernas técnicas e tecnologias construtivas para otimizar processos, reduzir custos e entregar projetos com maior agilidade.',
    },
    {
      icon: Recycle,
      title: 'Foco na Sustentabilidade',
      description:
        'Desenvolvemos projetos com responsabilidade ambiental, buscando soluções sustentáveis que minimizem o impacto e promovam um futuro mais verde.',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-brand-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: 'spring' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-800">
            Nossos <span className="text-brand-blue">Diferenciais</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-brand-gray-600">
            Mais do que construir, criamos valor. Descubra por que a NTC Brasil
            é a escolha certa para o seu projeto.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-brand-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              variants={cardVariants}
            >
              <div className="flex-shrink-0 bg-brand-blue text-white rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 shadow-md">
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-brand-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-brand-gray-600 leading-relaxed flex-grow">
                {service.description}
              </p>
              <div className="mt-auto pt-6">
                <a
                  href="#contact"
                  className="font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors duration-300"
                >
                  Saiba Mais →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
