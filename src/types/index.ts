export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  whatsapp: string;
  instagram: string;
  address: string;
}

export interface CompanyInfo {
  name: string;
  description: string;
  mission: string;
  vision: string;
  values: string;
}

export interface ServiceArea {
  title: string;
  items: string[];
}

export interface Statistic {
  number: string;
  label: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
}

