export interface FeaturesDTO {
  id: string;
  title: string;
  position: number;
  endpoint: Endpoint[];
}

export interface Endpoint {
  id: string;
  name: string;
}
