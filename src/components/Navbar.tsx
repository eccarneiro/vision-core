import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Fecha o menu no modo mobile
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1d2938]/95 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ml-10">
            {[
              { label: 'Home', id: 'home' },
              { label: 'Recursos', id: 'Recursos' },
              { label: 'Uso', id: 'Uso' },
              { label: 'Ação', id: 'case-studies' },
              { label: 'Fale Conosco', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className="text-white hover:text-[#07ef5c] transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <button className="bg-[#13b37e] hover:bg-[#07ef5c] text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
              Entrar em contato
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-[#1d2938] rounded-lg shadow-xl">
            <div className="flex flex-col items-center space-y-4 px-4">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Recursos', id: 'Recursos' },
                { label: 'Uso', id: 'Uso' },
                { label: 'Ação', id: 'case-studies' },
                { label: 'Fale Conosco', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className="text-white hover:text-[#07ef5c] transition-colors duration-300 py-2 text-center"
                >
                  {item.label}
                </button>
              ))}
              <button className="bg-[#13b37e] hover:bg-[#07ef5c] text-white px-6 py-2 rounded-full transition-all duration-300 w-full">
                Entrar em contato
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;