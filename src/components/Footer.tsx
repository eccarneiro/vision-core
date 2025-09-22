import React from 'react';
import Logo from '../assets/logo';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#1d2938] text-white border-t border-[#2a616e]/30">
      <div className="container mx-auto px-4">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Logo className="mb-4" />
              <p className="text-gray-300 mb-6">
                Transformando a gestão de estacionamento com tecnologia avançada de visão computacional.
              </p>
              {/* <div className="flex space-x-4">
                Link do LinkedIn atualizado abaixo
                <a 
                  href="https://www.linkedin.com/company/visioncore" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-[#07ef5c] transition-colors" 
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div> */}
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'Recursos', id: 'Recursos' },
                  { label: 'Uso', id: 'Uso' },
                  { label: 'Ação', id: 'case-studies' },
                  { label: 'Fale Conosco', id: 'contact' },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-300 hover:text-[#07ef5c] transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        <div className="border-t border-[#2a616e]/30 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} VISIONCORE. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            
            <button
              onClick={scrollToTop}
              className="bg-[#2a616e]/30 hover:bg-[#13b37e] p-2 rounded-full text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;