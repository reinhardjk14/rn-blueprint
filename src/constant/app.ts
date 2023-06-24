import {IconName} from '_atom/index';

export type BottomTabType = {
  name: string;
  icon: IconName;
  loginRequired: boolean;
};

export const bottomTabs: BottomTabType[] = [
  {
    name: 'Home',
    icon: 'home',
    loginRequired: false,
  },
  {
    name: 'ManageLiked',
    icon: 'heart',
    loginRequired: false,
  },
];
