export type OurWorkHeroSection = {
  id: number;
  title: string;
  bgImage: string;
};

export type GlobalImpactSection = {
  id: number;
  mainTitle: string;
  sectionTitle: string;
  description: string;
  bgImage: string;
};

export type ProductSection = {
  id: string;
  mainTitle: string;
  sectionTitle: string;
  description: string;
};

export type ServiceTags = {
  id: number;
  name: string;
};

export type ProductTag = {
  id: number;
  name: string;
};

type Product = {
  id: string;
  title: string;
  bgImage: string;
  clientLogo: string;
  productTags: ProductTag[];
};

type PaginationInfo = {
  page: number | null;
  limit: number;
};

export type ProductResponse = {
  data: Product[];
  pagination: {
    total: PaginationInfo;
    next: PaginationInfo;
    prev: PaginationInfo;
  };
};
