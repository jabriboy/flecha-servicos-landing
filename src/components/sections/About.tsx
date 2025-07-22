import React from 'react';
import { Target, Eye, Heart, CheckCircle } from 'lucide-react';
import { companyInfo, statistics } from '../../data/company';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Company Values Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Desenvolvendo Força Corporativa Para
              <span className="block text-yellow-500">
                Manter Valores Centrais Sólidos
              </span>
              Que Realmente Refletem Nossa Filosofia.
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Nossa empresa foi construída sobre pilares sólidos de confiança, qualidade e inovação. Trabalhamos incansavelmente para oferecer soluções que não apenas atendam, mas superem as expectativas de nossos clientes.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Profissionais certificados e experientes</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Atendimento personalizado e ágil</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Garantia em todos os serviços prestados</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/src/assets/about-image.jpg" 
                alt="Profissional trabalhando" 
                className="w-full h-96 object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-yellow-500 text-black p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">+5 Anos</div>
              <div className="text-sm">de Experiência</div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Mission */}
          <div className="text-center p-8 bg-blue-50 rounded-2xl">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Missão</h3>
            <p className="text-gray-600 leading-relaxed">
              {companyInfo.mission}
            </p>
          </div>

          {/* Vision */}
          <div className="text-center p-8 bg-green-50 rounded-2xl">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visão</h3>
            <p className="text-gray-600 leading-relaxed">
              {companyInfo.vision}
            </p>
          </div>

          {/* Values */}
          <div className="text-center p-8 bg-yellow-50 rounded-2xl">
            <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
            <p className="text-gray-600 leading-relaxed">
              {companyInfo.values}
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-12">
            Somos Profissionais em Todos os Nossos Negócios!
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-white text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

