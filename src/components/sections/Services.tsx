import React from 'react';
import { Sun, Building, Zap, Wrench, Settings, ArrowRight } from 'lucide-react';
// @ts-ignore
import { Button } from '../ui/button';
import { mainServices } from '../../data/company';

const iconMap = {
  Sun,
  Building,
  Zap,
  Wrench,
  Settings
};

const Services: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="px-4 mx-20 [@media(max-width:900px)]:mx-12 [@media(min-width:1500px):mx-26]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A Flecha Serviços conta com uma equipe de profissionais especializados que irão garantir toda a estrutura necessária para a gestão e o funcionamento de seu condomínio, empresa ou residência.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <div 
                key={service.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <Button 
                  onClick={scrollToContact}
                  variant="ghost" 
                  className="gradient-text font-semibold h-auto transform-content hover:scale-104 hover:border-1 border-orange-300 p-1 duration-300 cursor-pointer [@media(max-width:900px)]:border-1"
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4 ml-0 text-orange-300" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Service Types */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contrato */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 gradient-secondary-bg rounded-lg flex items-center justify-center mr-4">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Contrato</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              É um serviço personalizado onde identificamos os equipamentos e trabalhamos com um conjunto de ações planejadas para garantir que os equipamentos e sistemas funcionem de forma eficiente, prolongando a sua vida útil e evitando falhas ou quebra. Manutenção preventiva reduz o custo.
            </p>
          </div>

          {/* Empreita */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 gradient-secondary-bg rounded-lg flex items-center justify-center mr-4">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Empreita</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Contrato em que uma ou mais pessoas se encarregam de fazer certas obras para outrem, mediante retribuição proporcional à quantidade de trabalho executado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

