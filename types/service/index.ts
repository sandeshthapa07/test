export type BannerSection = {
  id: number;
  title: string;
  description: string;
  bgImage: string;
};

export type Service = {
  id: string; // UUID type identifier
  title: string;
  description: string;
  bgImage: string;
};

export type ServiceHeader = {
  id: string;
  mainTitle: string;
  sectionTitle: string;
  description: string;
};

export type KeyPoint = {
  id: number;
  keywords: string;
  description: string;
};

export type BenefitsSection = {
  id: string; // UUID type identifier
  mainTitle: string;
  description: string;
  sectionTitle: string;
  keyPoints: KeyPoint[];
};
