import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import TabNavigator from './tabNavigator';
import DrawerNavigator from './drawerNavigator';

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
