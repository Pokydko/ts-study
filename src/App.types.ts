export interface IVoidOutFunc {
  onLoadMore?: () => void;
  onSearch?: () => void;
}
export interface ITextInVoidFunc {
  onSearch?: (arg: string) => void;
}

export interface IApiResponse {
  total_pages: number;
  results: IPhoto[];
}

export interface IPhoto {
  id: number;
  user: {
    name: string;
    username: string;
    profile_image: { small: string };
  };
  urls: { regular: string; small: string };
  description: string | null;
  alt_description: string | null;
}

export interface IPicture {
  href: string;
  description: string | null;
  name?: string;
}

export interface IGalleryProps {
  viewInModal: (arg: IPicture) => void;
  photos: IPhoto[];
}

export interface ICardProps {
  viewInModal: (arg: IPicture) => void;
  photo: IPhoto;
}

export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: IPicture;
}
