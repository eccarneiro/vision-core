import React, { useEffect, useRef } from "react";
import heroImage from '../assets/images/hero-vision.jpg';

const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPos = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${
          scrollPos * 0.3
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#1d2938] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#1d2938] opacity-90"></div>
        <div className="grid grid-cols-8 grid-rows-8 w-full h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div
              key={i}
              className="relative overflow-hidden"
              style={{ opacity: Math.random() * 0.7 + 0.1 }}
            >
              <div
                className="absolute inset-0.5 rounded-full bg-[#2a616e]"
                style={{
                  transform: `scale(${Math.random() * 0.5})`,
                  opacity: Math.random() * 0.4,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 pt-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span>Estacionamento Inteligente com </span>
              <span className="text-[#07ef5c]">
                Tecnologia de Visão Computacional
              </span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              Supervisão total, segurança em tempo real, decisões inteligentes
              com base em dados. Com o VISIONCORE, seu estacionamento se
              transforma em um ambiente mais seguro, eficiente e inteligente.
            </p>
            
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0" data-aos="fade-left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#13b37e]/20 to-[#07ef5c]/20 rounded-lg blur-lg"></div>
              <div className="relative bg-[#1d2938] border border-[#2a616e] rounded-lg p-2 shadow-xl">
                <img
                  src={heroImage}
                  alt="Estacionamento com detecção de vagas por visão computacional"
                  className="rounded w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1d2938] via-transparent to-transparent rounded"></div>
                
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
