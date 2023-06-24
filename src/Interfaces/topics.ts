import {ItemPhotoDTO, ItemPhotoPreviewDTO} from './photos';
import {UserDTO} from './user';

export type TopicLinksDTO = {
  self: string;
  html: string;
  photos: string;
};
export type ItemTopicDTO = {
  id: string;
  slug: string;
  title: string;
  description: string;
  published_at: string;
  updated_at: string;
  starts_at: string;
  ends_at: string;
  only_submissions_after: any | null;
  visibility: string;
  featured: boolean;
  total_photos: number;
  current_user_contributions: any[];
  total_current_user_submissions: number | null;
  links: TopicLinksDTO;
  status: string;
  owners: UserDTO[];
  cover_photo: ItemPhotoDTO;
  preview_photos: ItemPhotoPreviewDTO[];
};
