import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { recentArticles } from '../../data/company';

const Articles: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Artigos Recentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fique por dentro das últimas novidades e dicas sobre manutenção elétrica e tecnologias sustentáveis.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentArticles.map((article) => (
            <article 
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Article Image */}
              <div className="aspect-video overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Article Content */}
              <div className="p-6">
                {/* Meta Information */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{article.date}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{article.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {article.excerpt}
                </p>

                {/* Read More Link */}
                <button className="flex items-center text-yellow-600 hover:text-yellow-700 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Ler mais
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Articles Button */}
        <div className="text-center mt-12">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105">
            Ver Todos os Artigos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Articles;

