import React from 'react';
import { Target, Eye, Heart, CheckCircle } from 'lucide-react';
import { companyInfo } from '../../data/company';
// @ts-ignore
import img from '../../assets/about-image.jpg'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-20 [@media(max-width:900px)]:mx-12 [@media(min-width:1500px):mx-26] px-4">
        {/* Company Values Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Desenvolvendo Força Corporativa com
              <span className="block gradient-text">
                Valores que Refletem Nossa Essência
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Nossa empresa foi construída sobre pilares sólidos de confiança, qualidade e inovação. Trabalhamos incansavelmente para oferecer soluções que não apenas atendam, mas superem as expectativas de nossos clientes.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Profissionais certificados e experientes</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Atendimento personalizado e ágil</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Garantia em todos os serviços prestados</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={img}
                alt="Profissional trabalhando" 
                className="w-full h-96 object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 gradient-bg text-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">+15 Anos</div>
              <div className="text-sm">de Experiência</div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Mission */}
          <div className="text-center p-8 bg-yellow-50 rounded-2xl">
            <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Missão</h3>
            <p className="text-gray-600 leading-relaxed">
              {companyInfo.mission}
            </p>
          </div>

          {/* Vision */}
          <div className="text-center p-8 bg-yellow-50 rounded-2xl">
            <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visão</h3>
            <p className="text-gray-600 leading-relaxed">
              {companyInfo.vision}
            </p>
          </div>

          {/* Values */}
          <div className="text-center p-8 bg-yellow-50 rounded-2xl">
            <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
            <p className="text-gray-600 leading-relaxed">
              {companyInfo.values}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

