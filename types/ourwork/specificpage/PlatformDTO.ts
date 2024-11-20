export interface PlatformDTO {
  id: string;
  title: string;
  bgImage: string;
  description: string;
  position: number;
  uploadLink: UploadLink;
}

export interface UploadLink {
  iosLink: string;
  playStoreLink: string;
}
