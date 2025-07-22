import { CompanyInfo, ContactInfo, Service, ServiceArea, Statistic, Article } from '../types';

export const companyInfo: CompanyInfo = {
  name: 'Flecha Serviços',
  description: 'A Flecha Serviços é uma empresa de prestação de serviço na área de manutenção predial e industrial, criada com o objetivo de gerar uma solução ágil e eficiente às necessidades de manutenção do contratante, por um valor justo.',
  mission: 'Oferecer serviços de qualidade e atender às necessidades dos clientes a fim de garantir a sua satisfação com excelência e rentabilidade.',
  vision: 'Ser reconhecida em todo território de Salvador e região metropolitana como uma das principais empresas provedoras de soluções nas áreas de manutenção condominial, agregando valor aos clientes, e aos nossos colaboradores.',
  values: 'Segurança na execução das Atividades, qualidade na entrega de todo e qualquer serviço prestado e a parceria buscando sempre entender e colaborar.'
};

export const contactInfo: ContactInfo = {
  phone: '(71) 99999-9999',
  email: 'contato@flechaservicos.com.br',
  whatsapp: '5571999999999',
  instagram: '@flechaservicos',
  address: 'Salvador, BA e Região Metropolitana'
};

export const mainServices: Service[] = [
  {
    id: 'energia-solar',
    title: 'Energia Solar',
    description: 'Instalação e venda de sistema fotovoltaico (placa solar) para residências e empresas.',
    icon: 'Sun'
  },
  {
    id: 'eletrica-condominial',
    title: 'Elétrica Condominial',
    description: 'Serviços especializados em manutenção elétrica para condomínios.',
    icon: 'Building'
  },
  {
    id: 'eletrica-residencial',
    title: 'Elétrica Residencial, Comercial e Industrial',
    description: 'Soluções completas em instalações elétricas para todos os tipos de imóveis.',
    icon: 'Zap'
  },
  {
    id: 'manutencao-civil',
    title: 'Manutenção Civil',
    description: 'Pequenos reparos de construção civil e manutenção predial.',
    icon: 'Wrench'
  },
  {
    id: 'manutencao-eletronicos',
    title: 'Manutenção de Eletrônicos',
    description: 'Reparo e manutenção de equipamentos eletrônicos diversos.',
    icon: 'Settings'
  }
];

export const serviceAreas: ServiceArea[] = [
  {
    title: 'Segurança e Automação',
    items: [
      'CFTV',
      'Portão Elétrico',
      'Interfones',
      'Cerca Elétrica',
      'Antena Compartilhada'
    ]
  },
  {
    title: 'Equipamentos Elétricos',
    items: [
      'Bombas Elétricas',
      'Motores Elétricos',
      'Elétrica Predial',
      'Elétrica Residencial'
    ]
  },
  {
    title: 'Soluções Sustentáveis',
    items: [
      'Sistema Fotovoltaico (Placa Solar)',
      'Wallbox (Carregador para Carros Elétricos)',
      'Limpeza de Calha'
    ]
  }
];

export const statistics: Statistic[] = [
  {
    number: '2,318',
    label: 'Projetos Concluídos'
  },
  {
    number: '6,154',
    label: 'Clientes Satisfeitos'
  },
  {
    number: '9,784',
    label: 'Horas de Trabalho'
  }
];

export const recentArticles: Article[] = [
  {
    id: '1',
    title: 'Como Escolher o Melhor Sistema de Energia Solar',
    excerpt: 'Descubra os principais fatores a considerar na hora de investir em energia solar para sua residência ou empresa.',
    image: '/src/assets/article-1.jpg',
    date: '15 Jan 2024',
    readTime: '5 min'
  },
  {
    id: '2',
    title: 'Manutenção Preventiva: A Chave para Evitar Problemas Elétricos',
    excerpt: 'Entenda a importância da manutenção preventiva e como ela pode economizar tempo e dinheiro.',
    image: '/src/assets/article-2.jpg',
    date: '10 Jan 2024',
    readTime: '3 min'
  },
  {
    id: '3',
    title: 'Automação Residencial: Tendências para 2024',
    excerpt: 'Conheça as principais tendências em automação residencial e como elas podem melhorar sua qualidade de vida.',
    image: '/src/assets/article-3.jpg',
    date: '05 Jan 2024',
    readTime: '4 min'
  }
];

