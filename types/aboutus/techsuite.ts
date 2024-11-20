export interface TechSuiteResponse {
  id: number;
  mainTitle: string;
  sectionTitle: string;
  description: string;
  stacks: Stack[];
}

export interface Stack {
  id: number;
  name: string;
  techstackId: number;
  stackItems: StackItem[];
}

export interface StackItem {
  id: number;
  icon: string;
}
