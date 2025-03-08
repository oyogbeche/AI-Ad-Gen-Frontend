export interface User {
  id: string;
}

// export interface SinglePreviewProps {
//   imageData: any;
// }

export interface SinglePreviewProps {
  imageData?: {
    display_url: string;
    imageUrl: string;
    image_url: string;
    title?: string;
    description?: string;
    additionalImages?: string[];
    image: ImageData;
  };
}

export interface ImageData {
  id: string;
  created_at: string;
  image_data: string;
  prompt: string;
  updated_at: string;
}

export interface SelectOption {
  label: string;
  value: string;
  display?: string;
  aspectRatio?: string;
}
