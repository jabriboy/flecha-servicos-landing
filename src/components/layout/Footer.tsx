import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';
import { contactInfo, companyInfo } from '../../data/company';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=Olá! Gostaria de solicitar um orçamento.`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open(`https://instagram.com/${contactInfo.instagram.replace('@', '')}`, '_blank');
  };

  const handleEmailClick = () => {
    window.open(`mailto:${contactInfo.email}`, '_blank');
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">

      {/* Main Footer Content */}
      <div className="mx-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-full">
          {/* Company Info */}
          <div className="lg:col-span-2 max-w-fit">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold">Flecha Serviços</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              {companyInfo.description}
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <button 
                onClick={handleWhatsAppClick}
                className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
              <button 
                onClick={handleInstagramClick}
                className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('#home')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#services')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#about')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='max-w-fit'>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{contactInfo.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                <button 
                  onClick={handleEmailClick}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  {contactInfo.email}
                </button>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{contactInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Flecha Serviços. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                Política de Privacidade
              </button>
              <button className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

