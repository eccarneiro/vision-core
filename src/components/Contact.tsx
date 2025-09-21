import React, { useState } from 'react';
import { Send, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Placeholder para a lógica de envio de e-mail
    console.log("Dados do formulário a serem enviados:", formData);

    // Simulação de tempo de envio
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
      
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-[#1d2938]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Entre em <span className="text-[#07ef5c]">Contato</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Transforme seu estacionamento com tecnologia inteligente. Fale conosco e tire suas dúvidas.
          </p>
        </div>

        <div className="flex flex-col gap-12 max-w-4xl mx-auto">
          
          {/* Bloco de Canais de Atendimento */}
          <div>
            <div className="bg-gradient-to-br from-[#1d2938] to-[#2a616e]/20 rounded-xl p-8 border border-[#2a616e]/30 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Canais de Atendimento</h3>
              
              <div className="space-y-6">
                {/* E-mail */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#13b37e]/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-[#07ef5c]" />
                  </div>
                  <div>
                    <p className="text-gray-300 mb-1">Envie um e-mail</p>
                    <a href="mailto:info@visioncore.tech" className="text-white hover:text-[#07ef5c] transition-colors">
                      info@visioncore.tech
                    </a>
                  </div>
                </div>
                
                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#13b37e]/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-[#07ef5c]" />
                  </div>
                  <div>
                    <p className="text-gray-300 mb-1">Fale pelo WhatsApp</p>
                    <a href="https://wa.me/5562992440579" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#07ef5c] transition-colors">
                      +55 (62) 9 9244-0579
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bloco do Formulário */}
          <div>
            <div className="bg-gradient-to-br from-[#1d2938] to-[#2a616e]/20 rounded-xl p-8 border border-[#2a616e]/30 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Envie uma mensagem</h3>
              
              {submitted ? (
                <div className="bg-[#13b37e]/20 border border-[#13b37e] rounded-lg p-4 text-white">
                  Obrigado pela sua mensagem! Entraremos em contato em breve.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Inputs do formulário */}
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">Seu nome</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#1d2938] border border-[#2a616e] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#07ef5c] transition-colors"
                      placeholder="Nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">E-mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#1d2938] border border-[#2a616e] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#07ef5c] transition-colors"
                      placeholder="email@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-white mb-2">Nome da sua Empresa</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-[#1d2938] border border-[#2a616e] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#07ef5c] transition-colors"
                      placeholder="Sua empresa"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white mb-2">Mensagem</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-[#1d2938] border border-[#2a616e] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#07ef5c] transition-colors resize-none"
                      placeholder="Como podemos ajudá-lo?"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-[#13b37e] hover:bg-[#07ef5c] text-white px-6 py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <span>Enviar mensagem</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;