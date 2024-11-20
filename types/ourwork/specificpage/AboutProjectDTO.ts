export interface AboutProjectDTO {
  id: string;
  title: string;
  position: number;
  content: Content[];
}

export interface Content {
  id: string;
  title: string;
  description: string;
  sectionTwoId: string;
}
