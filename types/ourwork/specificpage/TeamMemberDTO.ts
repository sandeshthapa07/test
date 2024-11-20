export interface TeamMembersDTO {
  id: string;
  title: string;
  position: number;
  teams: Team[];
}

export interface Team {
  id: string;
  designation: string;
  numberOfMember: number;
}
