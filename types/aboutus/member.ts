export interface MemberResponse {
  id: number;
  mainTitle: string;
  sectionTitle: string;
  description: string;
  members: Members[];
}

export interface Members {
  id: number;
  name: string;
  designation: string;
  link: string;
  image: string;
}
