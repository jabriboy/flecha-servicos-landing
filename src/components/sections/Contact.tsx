import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Instagram, Send } from 'lucide-react';
// @ts-ignore
import { Button } from '../ui/button';
import { contactInfo } from '../../data/company';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Olá! Gostaria de solicitar um orçamento:
      Nome: ${formData.name}
      Email: ${formData.email}
      Telefone: ${formData.phone}
      Serviço: ${formData.service}
      Mensagem: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=Olá! Gostaria de solicitar um orçamento.`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open(`https://instagram.com/${contactInfo.instagram.replace('@', '')}`, '_blank');
  };

  const handleEmailClick = () => {
    window.open(`mailto:${contactInfo.email}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-20 [@media(max-width:900px)]:mx-12 [@media(min-width:1500px):mx-26] px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atender você! Entre em contato conosco e solicite seu orçamento sem compromisso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Solicite seu Orçamento
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    placeholder="(71) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Serviço de Interesse
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="energia-solar">Energia Solar</option>
                  <option value="eletrica-condominial">Elétrica Condominial</option>
                  <option value="eletrica-residencial">Elétrica Residencial/Comercial</option>
                  <option value="manutencao-civil">Manutenção Civil</option>
                  <option value="manutencao-eletronicos">Manutenção de Eletrônicos</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Descreva detalhes do serviço que precisa..."
                ></textarea>
              </div>

              <Button 
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar via WhatsApp
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Entre em contato conosco através dos canais abaixo. Estamos sempre prontos para atender você com agilidade e qualidade.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {/* WhatsApp */}
              <div 
                onClick={handleWhatsAppClick}
                className="flex items-center p-4 bg-green-50 rounded-xl cursor-pointer hover:bg-green-100 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">WhatsApp</div>
                  <div className="text-gray-600">{contactInfo.phone}</div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center p-4 bg-blue-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Telefone</div>
                  <div className="text-gray-600">{contactInfo.phone}</div>
                </div>
              </div>

              {/* Email */}
              <div 
                onClick={handleEmailClick}
                className="flex items-center p-4 bg-red-50 rounded-xl cursor-pointer hover:bg-red-100 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">{contactInfo.email}</div>
                </div>
              </div>

              {/* Instagram */}
              <div 
                onClick={handleInstagramClick}
                className="flex items-center p-4 bg-pink-50 rounded-xl cursor-pointer hover:bg-pink-100 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Instagram</div>
                  <div className="text-gray-600">{contactInfo.instagram}</div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Localização</div>
                  <div className="text-gray-600">{contactInfo.address}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

