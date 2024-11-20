type ValueItem = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
};

export type ValuesSection = {
  title: string;
  keyValue: ValueItem[];
};
