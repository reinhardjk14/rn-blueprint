import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Icon from '_atom/Icon';
import {BottomTabType, bottomTabs} from '_constant/app';
import useTheme from '_hooks/useTheme';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {HomeScreen, ManageLiked} from 'src/views/screens/tabs';
import NavigationService from './NavigationService';
import {RootTabsParamList} from './screens';

const Tab = createBottomTabNavigator<RootTabsParamList>();

export default function TabNavigator() {
  const {Common, Colors} = useTheme();

  const bottomTabView = ({state}: BottomTabBarProps) => {
    const currentPositionIdx = state.index;
    const routes = state.routes;

    const routesData = routes.map((route: any) => {
      const matchingTab = bottomTabs.find(tab => tab.name === route.name);
      if (matchingTab) {
        return {
          ...matchingTab,
        };
      }
      return route;
    });

    return (
      <View style={Common.bottomTabsContainer}>
        {routesData?.map((tabItem: BottomTabType, idx: number) => {
          const active = currentPositionIdx === idx;
          function navigateTab() {
            NavigationService.navigate(tabItem?.name);
          }

          return (
            <TouchableOpacity
              key={idx}
              onPress={navigateTab}
              style={Common.buttonTab}>
              <Icon
                name={tabItem.icon}
                size={20}
                color={active ? Colors.Primary : Colors.Secondary}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <Tab.Navigator tabBar={bottomTabView}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ManageLiked"
        component={ManageLiked}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
