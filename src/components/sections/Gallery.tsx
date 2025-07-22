import React from 'react';
// @ts-ignore
import gallery1 from "../../assets/gallery-1.jpg"
// @ts-ignore
import gallery2 from "../../assets/gallery-2.jpg"
// @ts-ignore
import gallery3 from "../../assets/gallery-3.jpg"
// @ts-ignore
import gallery4 from "../../assets/gallery-4.jpg"


const Gallery: React.FC = () => {
  const galleryImages = [
    {
      src: gallery1,
      alt: 'Instalação elétrica predial',
      title: 'Instalação Elétrica Predial'
    },
    {
      src: gallery2,
      alt: 'Manutenção de quadro elétrico',
      title: 'Manutenção de Quadro Elétrico'
    },
    {
      src: gallery3,
      alt: 'Sistema de energia solar',
      title: 'Sistema de Energia Solar'
    },
    {
      src: gallery4,
      alt: 'Automação residencial',
      title: 'Automação Residencial'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-20 [@media(max-width:900px)]:mx-12 [@media(min-width:1500px):mx-26] px-4">
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

