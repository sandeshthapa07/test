// corevalues && life at aitc has same types
export interface OurCoreValuesResponse {
  id: number;
  sectionTitle: string;
  mainTitle: string;
  description: string;
  bgImage: string;
  features: Feature[];
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
  url: string;
}
