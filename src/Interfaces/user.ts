export type UserLinksDTO = {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
};
export type ProfileImagesDTO = {
  small: string;
  medium: string;
  large: string;
};
export type UserSocialDTO = {
  instagram_username: string;
  portfolio_url: string;
  twitter_username: string;
  paypal_email: string | null;
} | null;
export type UserDTO = {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string | null;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location: string;
  links: UserLinksDTO;
  profile_image: ProfileImagesDTO;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: UserSocialDTO;
};
