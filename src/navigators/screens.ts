import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {
  CollectionsPageProps,
  HomeScreenProps,
  ManageLikedScreenProps,
  ProfilePageProps,
  UserDetailPageProps,
} from 'src/utils/types';
import {UserDetail} from 'src/views/screens/stacks';
import DrawerNavigator from './drawerNavigator';

interface INavigationOption {
  name: string;
  component: React.ComponentType<any>;
  options: NativeStackNavigationOptions;
}

const MainScreen: Array<INavigationOption> = [
  {
    name: 'Drawer',
    component: DrawerNavigator,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'UserDetail',
    component: UserDetail,
    options: {
      headerShown: false,
    },
  },
];

export const Screens = [...MainScreen];

export type RootStackParamList = {
  UserDetail: UserDetailPageProps;
};
export type RootDrawerParamList = {
  Tabs: undefined;
  Help: undefined;
};

export type RootTabsParamList = {
  Home: HomeScreenProps;
  ManageLiked: ManageLikedScreenProps;
  CollectionsPage: CollectionsPageProps;
  ProfilePage: ProfilePageProps;
};
