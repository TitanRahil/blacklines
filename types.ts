export interface SubCategory {
  title: string;
  description: string;
  image: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  subCategories: SubCategory[];
}

export interface FAQItem {
  question: string;
  answer: string;
}