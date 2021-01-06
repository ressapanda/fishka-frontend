export interface IQuestion {
  id: number;
  question: string;
  answer: string;
  difficulty: string;
  framework: {
    id: number;
    name: string;
  };
  team: {
    id: number;
    name: string;
  };
  language?: any;
}
