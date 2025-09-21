import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideProps {
  image: string;
  title: string;
  description: string;
}

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides: SlideProps[] = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Dashboard Dinâmico e Intuitivo",
      description: "Tenha uma visão panorâmica das operações. Monitore vagas livres, fluxo de veículos e indicadores de performance em tempo real em uma única tela."
    },
    {
      image: "https://images.unsplash.com/photo-1573495627361-d9b87960b12d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Alertas Inteligentes e Gestão de Incidentes",
      description: "Receba notificações automáticas sobre estacionamento irregular, tempo excedido e outras anomalias, permitindo uma ação rápida e eficaz."
    },
    {
      image: "https://images.unsplash.com/photo-1709715357510-b687304cee3a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Relatórios para Decisões Estratégicas",
      description: "Transforme dados em insights. Gere relatórios sobre horários de pico, duração de permanência e tendências para otimizar a gestão e a receita."
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    let interval: number | undefined;

    if (isAutoPlaying) {
      interval = window.setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section id="case-studies" className="py-20 bg-[#1d2938]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            VISION<span className="text-[#07ef5c]">CORE</span> EM AÇÃO
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Veja como nossa tecnologia transforma a gestão de estacionamento
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel container */}
          <div className="relative overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-out h-[500px]"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full relative">
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1d2938] via-[#1d2938]/30 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{slide.title}</h3>
                    <p className="text-gray-200 mb-4">{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button 
              onClick={prevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#1d2938]/70 hover:bg-[#13b37e] p-2 rounded-full text-white transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#1d2938]/70 hover:bg-[#13b37e] p-2 rounded-full text-white transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-[#07ef5c] w-6' : 'bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;