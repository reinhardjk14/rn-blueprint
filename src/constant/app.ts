import {IconName} from '_atom/index';

export type BottomTabType = {
  name: string;
  title: string;
  icon: IconName;
  loginRequired: boolean;
};

export const bottomTabs: BottomTabType[] = [
  {
    name: 'Home',
    title: 'Home',
    icon: 'home',
    loginRequired: false,
  },
  {
    name: 'ManageLiked',
    title: 'Likes',
    icon: 'heart',
    loginRequired: false,
  },
  {
    name: 'CollectionsPage',
    title: 'Collection',
    icon: 'archive',
    loginRequired: false,
  },
  {
    name: 'ProfilePage',
    title: 'Profile',
    icon: 'user',
    loginRequired: false,
  },
];
