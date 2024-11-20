type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

export type FAQSection = {
  title: string;
  description: string;
  faqList: FAQItem[];
};
