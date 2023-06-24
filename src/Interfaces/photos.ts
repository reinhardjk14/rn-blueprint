import {UserDTO} from './user';

export type ItemPhotoUrlDTO = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
} | null;
export type ItemPhotoLinksDTO = {
  self: string;
  html: string;
  download: string;
  download_location: string;
} | null;
export type ItemPhotoSponsorDTO = {
  impression_urls: string[];
  tagline: string;
  tagline_url: string;
  sponsor: UserDTO;
} | null;
export type ItemPhotoPreviewDTO = {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  blur_hash: string;
  urls: ItemPhotoUrlDTO;
};

export type ItemPhotoDTO = {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  promoted_at: string | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: ItemPhotoUrlDTO;
  links: ItemPhotoLinksDTO;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: ItemPhotoSponsorDTO;
  topic_submissions: any;
  user: UserDTO;
};
