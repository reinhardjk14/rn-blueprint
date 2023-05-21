import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import TabNavigator from './tabNavigator';
import DrawerNavigator from './drawerNavigator';
import {HomeScreenProps, ManageCategoryScreenProps} from 'src/utils/types';

interface INavigationOption {
  name: string;
  component: React.ComponentType<any>;
  options: NativeStackNavigationOptions;
}

const MainScreen: Array<INavigationOption> = [
  {
    name: 'Tabs',
    component: TabNavigator,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Drawer',
    component: DrawerNavigator,
    options: {
      headerShown: false,
    },
  },
];

export const Screens = [...MainScreen];

export type RootStackParamList = {};
export type RootDrawerParamList = {
  Tabs: undefined;
  Stacks: undefined;
};

export type RootTabsParamList = {
  Home: HomeScreenProps;
  ManageCategory: ManageCategoryScreenProps;
};
