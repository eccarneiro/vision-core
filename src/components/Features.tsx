import React from 'react';
import { LayoutDashboard, AlertTriangle, BarChart3, Camera, Cloud, Scaling } from 'lucide-react';

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
      icon: <LayoutDashboard size={24} />,
      title: "Dashboard Operacional",
      description: "Visualize o status de cada vaga em tempo real através de um mapa interativo do seu estacionamento e acompanhe as taxas de ocupação por setor."
    },
    {
      icon: <AlertTriangle size={24} />,
      title: "Detecção de Anomalias",
      description: "Nossa I.A. identifica e notifica sobre veículos em locais proibidos, que excedem o tempo limite ou apresentam movimentação suspeita."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Relatórios e Insights",
      description: "Acesse dados históricos sobre padrões de uso, horários de pico e duração de permanência para otimizar a precificação e a gestão de recursos."
    },
    {
      icon: <Camera size={24} />,
      title: "Integração com CFTV Existente",
      description: "Implemente o VisionCore de forma rápida e com baixo custo, aproveitando seu sistema de câmeras atual, sem necessidade de hardware proprietário."
    },
    {
      icon: <Cloud size={24} />,
      title: "Plataforma 100% em Nuvem",
      description: "Monitore e gerencie seu estacionamento de qualquer lugar e a qualquer momento através de nossa plataforma web segura e responsiva."
    },
    {
      icon: <Scaling size={24} />,
      title: "Arquitetura Escalável",
      description: "Comece com um setor e expanda a cobertura para múltiplos estacionamentos. Nossa solução se adapta ao crescimento do seu negócio."
    }
  ];

  return (
    <section id="Recursos" className="py-20 bg-[#1d2938]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            RECURSOS INTELIGENTES PARA <span className="text-[#07ef5c]">ESTACIONAMENTOS INTELIGENTES</span>
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