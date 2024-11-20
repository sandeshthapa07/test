export type InsightHero = {
  id: number;
  title: string;
  bgImage: string;
  description: string;
};

export type IndustryTags = {
  id: number;
  name: string;
};

export type IndustryTag = {
  name: string;
  createdAt: string; // ISO date string
};

export type InsightTag = {
  name: string;
  id: number;
};

export type Insight = {
  id: number;
  title: string;
  coverImage: string;
  slug: string;
  industryTag: IndustryTag;
  insightTags: string[]; // Assuming insightTags is an array of strings, based on the example provided
};

export type PaginationInfo = {
  page: number | null;
  limit: number;
};

export type PaginationType = {
  total: PaginationInfo;
  next: PaginationInfo;
  prev: PaginationInfo;
};

export type InsightsResponse = {
  success: boolean;
  message: string;
  data: Insight[];
  pagination: PaginationType;
};

// individual insights type

export type IndustryTagIndividual = {
  name: string;
  createdAt: string;
};

export type IndustryTagRelated = {
  name: string;
  id: number;
};

export type InsightTagIndividual = {
  name: string;
};

export type CreatedBy = {
  name: string;
  description: string;
  image: string;
  createdAt: string;
};

export type RelatedInsight = {
  id: number;
  title: string;
  slug: string;
  coverImage: string;
  industryTag: IndustryTagRelated;
  insightTags: InsightTag[];
};

export type RelatedServices = {
  id: string;
  title: string;
  bgImage: string;
  description: string;
};

export type InsightIndividual = {
  title: string;
  coverImage: string;
  description: string;
  slug: string;
  industryTag: IndustryTagIndividual;
  listOfServiceId: string;
  insightTags: InsightTagIndividual[];
  createdBy: CreatedBy;
  relatedInsight: RelatedInsight[];
  relatedService: RelatedServices;
};
