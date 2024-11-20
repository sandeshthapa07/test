export interface SolutionsDTO {
  id: string;
  title: string;
  bgImage: string;
  position: number;
  keyPoint: KeyPoint[];
}

export interface KeyPoint {
  id: string;
  title: string;
  description: string;
  sectionSixId: string;
}
