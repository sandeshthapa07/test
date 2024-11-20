export interface BannerResponse {
  title: string;
  bgImage: string;
}

export interface WhoWeAreResponse {
  id: number;
  sectionTitle: string;
  mainTitle: string;
  description: string;
  quote: string;
  bgImage: string;
  updatedAt: string;
}

export interface CommonResponse {
  id: number;
  title: string;
  description: string;
  sectionTitle: string;
  bgImage: string;
  updatedAt: string;
}

export interface MessageFromCeoResponse {
  id: number;
  sectionTitle: string;
  name: string;
  messageTitle: string;
  message: string;
  bgImage: string;
  updatedAt: string;
}

// our mission and why choose aitc same types

export interface OurMissionWhyChooseAitcResponse {
  id: number;
  sectionTitle: string;
  mainTitle: string;
  description: string;
  features: Feature[];
}

export interface Feature {
  id: number;
  title: string;
  keyHighlight: string;
  description: string;
  icon: string;
}
