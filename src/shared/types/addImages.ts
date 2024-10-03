export interface AddImagesData {
  image: string;
}

export interface AddImagesResponse {
  ok: boolean;
  data: {
    url: string;
  };
}
