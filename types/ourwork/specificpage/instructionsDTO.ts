export interface InstructionsResponse {
  id: string;
  title: string;
  position: number;
  description: string;
  steps: Step[];
}

export interface Step {
  id: string;
  index: number;
  title: string;
  description: string;
}
