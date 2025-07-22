import React from 'react';
import { ArrowRight } from 'lucide-react';
// @ts-ignore
import wpp from '../../assets/whatsapp.png'
// @ts-ignore
import heroImg from '../../assets/hero-bg.jpg'
// @ts-ignore
import { Button } from '../ui/button';
import { companyInfo, contactInfo } from '../../data/company';

const Hero: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=Olá! Gostaria de solicitar um orçamento.`, '_blank');
  };

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen max-w-screen flex items-center justify-center overflow-hidden pt-8">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/80 to-blue-800/90 z-10"></div>
        <img 
          src={heroImg} 
          alt="Eletricista trabalhando" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto px-4 py-20">
        <div className="text-center text-white mx-20 [@media(max-width:900px)]:mx-12 [@media(min-width:1500px):mx-26]">
          {/* Main Heading */}
          <h1 className="text-4xl [@media(min-width:960px)]:text-5xl font-bold mb-2 leading-tight">
            Eletricista Confiável e
            <span className="block gradient-text">
              Serviços Elétricos
            </span>
            <span className="block">
              Para Casa e Condomínio!
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-x0 md:text-1xl mb-4 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {companyInfo.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <Button 
              onClick={handleWhatsAppClick}
              className="cursor-pointer gradient-bg text-foreground font-bold  rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg items-center justify-center px-6"
            >
              <img src={wpp} alt="Whatsapp logo" className='w-5 mt-0.5'/>
              Solicitar Orçamento
            </Button>
            
            <Button 
              onClick={scrollToServices}
              variant="outline"
              className="cursor-pointer bg-blue-900/60 text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 flex items-center justify-center"
            >
              Nossos Serviços
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid min-w-4xl:grid-cols-1 grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-0">24/7</div>
              <div className="text-gray-300">Atendimento</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-0">+15</div>
              <div className="text-gray-300">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-0">100%</div>
              <div className="text-gray-300">Satisfação Garantida</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-4 h-8 border-1 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

