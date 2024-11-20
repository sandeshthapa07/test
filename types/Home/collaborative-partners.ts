type Partner = {
  id: number;
  name: string;
  companyLogoUrl: string;
  socialMediaLink: string;
};

export type PartnersSection = {
  title: string;
  description: string;
  partner: Partner[];
};
