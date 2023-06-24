import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from '_atom/Icon';
import {IconName} from '_atom/index';
import {bottomTabs} from '_constant/app';
import useTheme from '_hooks/useTheme';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {HomeScreen, ManageCategoryPage} from 'src/views/screens/tabs';
import NavigationService from './NavigationService';
import {RootTabsParamList} from './screens';

const Tab = createBottomTabNavigator<RootTabsParamList>();

export default function TabNavigator() {
  const {Common, Colors} = useTheme();
  const bottomTabView = (e: any) => {
    const currentPositionIdx = e.state.index;
    const routes = e?.state?.routes;
    const routesData = routes.map((i: any) => {
      bottomTabs.filter((r: {name: string; icon: string}) => {
        if (i.name === r.name) {
          i = {
            ...r,
          };
          return i;
        }
      });
      return i;
    });

    const navigateTab = async (tabItem: any) => {
      NavigationService.navigate(tabItem?.name);
    };

    return (
      <View style={Common.bottomTabsContainer}>
        {routesData?.map(
          (
            i: {
              name: string;
              icon: IconName;
              id?: any;
            },
            idx: React.Key | null | undefined,
          ) => {
            const active = currentPositionIdx === idx;

            return (
              <TouchableOpacity
                key={idx}
                onPress={() => navigateTab(i)}
                style={Common.buttonTab}>
                <Icon
                  name={i.icon}
                  size={20}
                  color={active ? Colors.SageGreen : Colors.BabyBlue}
                />
              </TouchableOpacity>
            );
          },
        )}
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
        name="ManageCategory"
        component={ManageCategoryPage}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
