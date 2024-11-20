export interface TechnologyUsedResponse {
  id: string;
  compatibility: string;
  position: number;
  codebaseMedia: CodebaseMedum[];
  databaseMedia: DatabaseMedum[];
}

export interface CodebaseMedum {
  id: string;
  url: string;
}

export interface DatabaseMedum {
  id: string;
  url: string;
}
