import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
// @ts-ignore
import { Button } from '../ui/button';
// @ts-ignore
import logo from '../../assets/logo.png'
// @ts-ignore
import wpp from '../../assets/whatsapp.png'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Contato', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-800 max-w-full ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="mx-0 py-4">
        <div className="flex items-center justify-between mx-20 [@media(max-width:900px)]:mx-12 [@media(min-width:1500px):mx-26]">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="logo" className={`h-10 bg-cover transition-all duration-500 ${!isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg px-2 rounded-2xl' : ' px-2 rounded-2xl bg-transparent'}`}/>
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Flecha Serviços
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden [@media(min-width:830px)]:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors hover:text-yellow-400 cursor-pointer ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden [@media(min-width:830px)]:flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="gradient-bg text-black font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <img src={wpp} alt="Whatsapp Logo" className='w-4 mt-0.5'/>
              Faça seu Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`[@media(min-width:830px)]:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="max-w-4xl:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button 
                  onClick={() => scrollToSection('#contact')}
                  className="w-full gradient-bg text-black font-semibold py-2 rounded-lg"
                >
                  <img src={wpp} alt='Whatsapp Logo' className="w-4 h-4 mr-2" />
                  Faça seu Orçamento
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

