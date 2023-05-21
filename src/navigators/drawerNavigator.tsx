import {createDrawerNavigator} from '@react-navigation/drawer';
import {useSelector} from 'react-redux';
import {HomeScreen} from 'src/views/screens/tabs';
import React from 'react';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const listItemMenu: any[] = useSelector(({category}) => category.categories);
  console.log('listItemMenu', listItemMenu);

  return (
    <Drawer.Navigator>
      <>
        {listItemMenu.map(item => {
          <Drawer.Screen
            name={item?.name}
            component={HomeScreen} //TODO: modify this
          />;
        })}
      </>
    </Drawer.Navigator>
  );
}
