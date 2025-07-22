import React from 'react';

const Gallery: React.FC = () => {
  const galleryImages = [
    {
      src: '/src/assets/gallery-1.jpg',
      alt: 'Instalação elétrica predial',
      title: 'Instalação Elétrica Predial'
    },
    {
      src: '/src/assets/gallery-2.jpg',
      alt: 'Manutenção de quadro elétrico',
      title: 'Manutenção de Quadro Elétrico'
    },
    {
      src: '/src/assets/gallery-3.jpg',
      alt: 'Sistema de energia solar',
      title: 'Sistema de Energia Solar'
    },
    {
      src: '/src/assets/gallery-4.jpg',
      alt: 'Automação residencial',
      title: 'Automação Residencial'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos Trabalhos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Confira alguns dos nossos projetos realizados com excelência e dedicação.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            Somos Profissionais em Todos os Nossos Negócios!
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-500 mb-2">2,318</div>
              <div className="text-gray-600 text-lg">Projetos Concluídos</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-500 mb-2">6,154</div>
              <div className="text-gray-600 text-lg">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-500 mb-2">9,784</div>
              <div className="text-gray-600 text-lg">Horas de Trabalho</div>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mt-20">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Placeholder for partner logos */}
            <div className="w-32 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 font-semibold">PARCEIRO 1</span>
            </div>
            <div className="w-32 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 font-semibold">PARCEIRO 2</span>
            </div>
            <div className="w-32 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 font-semibold">PARCEIRO 3</span>
            </div>
            <div className="w-32 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 font-semibold">PARCEIRO 4</span>
            </div>
            <div className="w-32 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 font-semibold">PARCEIRO 5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

