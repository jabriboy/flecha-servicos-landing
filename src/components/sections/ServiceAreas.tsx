import React from 'react';
import { Shield, Zap, Leaf, CheckCircle } from 'lucide-react';
import { serviceAreas } from '../../data/company';

const iconMap = {
  'Segurança e Automação': Shield,
  'Equipamentos Elétricos': Zap,
  'Soluções Sustentáveis': Leaf
};

const ServiceAreas: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="px-4 mx-20 [@media(max-width:900px)]:mx-12 [@media(min-width:1500px):mx-26]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Utilizando as Mais Recentes Soluções de Processamento
            <span className="block gradient-secondary-text">
              Com Décadas de Experiência de Trabalho.
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nossa expertise abrange diversas áreas da manutenção predial e industrial, sempre utilizando as tecnologias mais avançadas do mercado.
          </p>
        </div>

        {/* Service Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceAreas.map((area, index) => {
            const IconComponent = iconMap[area.title as keyof typeof iconMap];
            const colors = [
              'gradient-secondary-bg',
              'gradient-secondary-bg',
              'gradient-secondary-bg'
            ];
            
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                {/* Header */}
                <div className='mb-4'>
                  <div className="text-center mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${colors[index]} rounded-2xl flex items-center justify-center mx-auto mb-0`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {area.title}
                    </h3>
                  </div>
                  {/* Services List */}
                  <div className="space-y-2">
                    {area.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center flex-row-reverse float-end">
                  <button className={`bg-gradient-to-r ${colors[index]} text-white font-semibold px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300`}>
                    Saiba Mais
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 bg-gradient-to-r gradient-secondary-bg rounded-3xl p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Nós Cuidamos. Nós Somos
            <span className="block">
              Profissionais. Nós Entregamos.
            </span>
          </h3>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como podemos ajudar você com soluções personalizadas para suas necessidades.
          </p>
          <button className="bg-black text-white font-bold px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 cursor-pointer">
            Entre em Contato
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;

