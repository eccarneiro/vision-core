import React from 'react';
import { Camera, Database, BarChart, Zap } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Camera className="w-10 h-10 text-[#07ef5c]" />,
      title: "Captura de Vídeo",
      description: "Câmeras existentes capturam imagens de vídeo do seu estacionamento."
    },
    {
      icon: <Zap className="w-10 h-10 text-[#07ef5c]" />,
      title: "Processamento de IA",
      description: "Nossos algoritmos de visão computacional analisam imagens em tempo real para identificar vagas de estacionamento e infrações."
    },
    {
      icon: <Database className="w-10 h-10 text-[#07ef5c]" />,
      title: "Armazenamento de dados",
      description: "Os dados de estacionamento são armazenados e organizados com segurança para fácil acesso e análise."
    },
    {
      icon: <BarChart className="w-10 h-10 text-[#07ef5c]" />,
      title: "Insights e Relatórios",
      description: "Análises abrangentes fornecem insights práticos para otimizar suas operações de estacionamento."
    }
  ];

  return (
    <section id="Uso" className="py-20 bg-gradient-to-b from-[#1d2938] to-[#2a616e]/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            COMO <span className="text-[#07ef5c]">VISION CORE</span> FUNCIONA
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
          Integramos nossa tecnologia à sua estrutura existente, entregando uma gestão de estacionamento mais inteligente e eficiente</p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#13b37e] to-[#07ef5c] transform -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Step number circle for desktop */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-[#1d2938] border-2 border-[#07ef5c] items-center justify-center">
                    <span className="text-[#07ef5c] font-bold">{index + 1}</span>
                  </div>
                  
                  {/* Step content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="bg-[#1d2938]/80 backdrop-blur-sm p-6 rounded-lg border border-[#2a616e]/30 shadow-lg">
                      <div className="flex items-center mb-4 gap-3 md:hidden">
                        <div className="flex w-12 h-12 rounded-full bg-[#1d2938] border-2 border-[#07ef5c] items-center justify-center">
                          <span className="text-[#07ef5c] font-bold">{index + 1}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                      </div>
                      <div className="hidden md:block">{step.icon}</div>
                      <h3 className="hidden md:block text-xl font-semibold text-white mt-4 mb-2">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;