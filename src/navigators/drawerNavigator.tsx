import {
  DrawerContentScrollView,
  DrawerItem,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import React from 'react';
import {DrawerItemPage} from 'src/views/screens/drawer';
import {RootDrawerParamList} from './screens';
import TabNavigator from './tabNavigator';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function DrawerNavigator() {
  function ListMenuItem(props: any) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItem label="Help" onPress={() => console.log('pressed')} />
      </DrawerContentScrollView>
    );
  }

  return (
    <Drawer.Navigator
      drawerContent={props => <ListMenuItem {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'white',
          zIndex: 100,
        },
        drawerPosition: 'left',
        headerShown: false,
      }}>
      <Drawer.Screen name={'Tabs'} component={TabNavigator} />
      <Drawer.Screen name="Help" component={DrawerItemPage} />
    </Drawer.Navigator>
  );
}
