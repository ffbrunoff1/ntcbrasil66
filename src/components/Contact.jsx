import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPinned,
  Send,
  Loader2,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch(
        'https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            recipientEmail: 'ffbrunoff@yahoo.com.br',
          }),
        }
      );

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Falha no envio');
      }
    } catch (error) {
      setStatus('error');
      console.error('Submit error:', error);
    }
  };

  const contactInfo = [
    { icon: Phone, text: '+55 44 99104-0774', href: 'tel:+5544991040774' },
    {
      icon: Mail,
      text: 'contato@ntcbrasil.com',
      href: 'mailto:contato@ntcbrasil.com',
    },
    {
      icon: MapPinned,
      text: 'Rua Padre Lebret, 801, Bloco 03, G05',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-brand-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-800">
            Entre em Contato
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-brand-gray-600">
            Estamos prontos para ouvir sobre seu projeto. Preencha o formulário
            ou utilize um dos canais abaixo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-brand-blue/10 text-brand-blue rounded-full p-4">
                  <item.icon size={24} />
                </div>
                <a
                  href={item.href}
                  className="ml-4 text-lg text-brand-gray-700 hover:text-brand-blue transition-colors"
                >
                  {item.text}
                </a>
              </div>
            ))}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-brand-gray-700 mb-1"
              >
                Nome Completo
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border-gray-300 focus:ring-brand-blue focus:border-brand-blue transition"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-brand-gray-700 mb-1"
              >
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border-gray-300 focus:ring-brand-blue focus:border-brand-blue transition"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-brand-gray-700 mb-1"
              >
                Sua Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border-gray-300 focus:ring-brand-blue focus:border-brand-blue transition"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center bg-brand-blue text-white font-bold py-3 px-6 rounded-md shadow-md hover:bg-brand-blue-dark transition-all duration-300 disabled:bg-gray-400"
              >
                {status === 'sending' && (
                  <Loader2 className="animate-spin mr-2" />
                )}
                {status === 'idle' && (
                  <>
                    <Send className="mr-2" size={18} /> Enviar Mensagem
                  </>
                )}
                {status === 'sending' && 'Enviando...'}
                {status === 'success' && (
                  <>
                    <CheckCircle className="mr-2" /> Mensagem Enviada!
                  </>
                )}
                {status === 'error' && (
                  <>
                    <AlertTriangle className="mr-2" /> Tente Novamente
                  </>
                )}
              </button>
            </div>
            {status === 'success' && (
              <p className="text-green-600 text-center mt-4">
                Obrigado pelo seu contato! Retornaremos em breve.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-center mt-4">
                Ocorreu um erro. Por favor, tente novamente mais tarde.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
