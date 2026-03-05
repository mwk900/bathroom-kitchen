export interface HeroStyle {
  id: string;
  label: string;
  image: string;
  accent: string;
  swatches: string[];
  description: string;
  headline: string;
  subheadline: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  includes: string[];
  priceRange: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  tags: string[];
  category: 'kitchen' | 'bathroom' | 'utility';
  coverImage: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location: string;
  projectType: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface CoverageArea {
  id: string;
  name: string;
  count: number;
  path: string;
  labelX: number;
  labelY: number;
}
