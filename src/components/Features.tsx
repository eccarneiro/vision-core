import React from 'react';
import { Eye, BarChart3, Clock, Camera, LineChart, Users } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gradient-to-br from-[#1d2938] to-[#2a616e]/10 p-6 rounded-lg border border-[#2a616e]/30 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 hover:border-[#13b37e]/50 group">
      <div className="w-12 h-12 bg-[#13b37e]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#13b37e]/20 transition-all duration-300">
        <div className="text-[#07ef5c]">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Eye size={24} />,
      title: "Tecnologia de visão computacional",
      description: "Algoritmos avançados de IA que detectam e analisam com precisão vagas de estacionamento em tempo real."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Análise abrangente",
      description: "Relatórios detalhados e insights sobre uso de estacionamento, horários de pico e estatísticas de duração."
    },
    {
      icon: <Clock size={24} />,
      title: "Monitoramento em tempo real",
      description: "Atualizações ao vivo sobre disponibilidade de estacionamento com recursos de notificação imediata."
    },
    {
      icon: <Camera size={24} />,
      title: "Funciona com câmeras existentes",
      description: "Integre-se à sua infraestrutura de CFTV atual sem custos adicionais de hardware."
    },
    {
      icon: <LineChart size={24} />,
      title: "Previsão de tendências",
      description: "Preveja a demanda por estacionamento com base em dados históricos e condições atuais."
    },
    {
      icon: <Users size={24} />,
      title: "Melhor experiência do cliente",
      description: "Reduza o tempo gasto procurando vagas de estacionamento e aumente a satisfação do cliente."
    }
  ];

  return (
    <section id="Recursos" className="py-20 bg-[#1d2938]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            RECURSOS INTELIGENTES PARA  <span className="text-[#07ef5c]">ESTACIONAMENTOS INTELIGENTES</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
          Nossa solução de visão computacional transforma seu gerenciamento de estacionamento com recursos poderosos!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;