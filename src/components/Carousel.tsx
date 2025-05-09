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
      image: "https://www.serpro.gov.br/menu/noticias/noticias-2022/como-emitir-credencial-estacionamento-idoso/@@images/image/large",
      title: "Monitoramento em tempo real da ocupação de vagas",
      description: "Monitore a disponibilidade de vagas de estacionamento em tempo real em todas as suas instalações."
    },
    {
      image: "https://santodigital.com.br/wp-content/uploads/2021/11/Business-Intelligence-e-analise-de-dados-1.jpg",
      title: "Tomada de decisão baseada em dados",
      description: "Tenha acesso a análises completas para melhorar a eficiência do seu estacionamento."
    },
    {
      image: "https://st2.depositphotos.com/1441511/5482/i/450/depositphotos_54821609-stock-photo-happy-man-inside-car-of.jpg",
      title: "Experiência aprimorada do cliente",
      description: "Garanta uma experiência fluida ao motorista com orientação inteligente até as vagas disponíveis."
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
            <span className="text-[#07ef5c]">VISION CORE</span> EM AÇÃO
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
                    <button className="bg-[#13b37e] hover:bg-[#07ef5c] text-white px-6 py-2 rounded-full transition-all duration-300 self-start">
                      Entrar em contato
                    </button>
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