import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {CompositeScreenProps, RouteProp} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {
  RootDrawerParamList,
  RootStackParamList,
  RootTabsParamList,
} from 'src/navigators/screens';

export type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabsParamList, 'Home'>,
  CompositeScreenProps<
    NativeStackScreenProps<RootStackParamList>,
    DrawerScreenProps<RootDrawerParamList>
  >
>;

export type ManageLikedScreenProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabsParamList, 'ManageLiked'>,
  CompositeScreenProps<
    NativeStackScreenProps<RootStackParamList>,
    DrawerScreenProps<RootDrawerParamList>
  >
>;

export type CollectionsPageProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabsParamList, 'CollectionsPage'>,
  CompositeScreenProps<
    NativeStackScreenProps<RootStackParamList>,
    DrawerScreenProps<RootDrawerParamList>
  >
>;

export type ProfilePageProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabsParamList, 'ProfilePage'>,
  CompositeScreenProps<
    NativeStackScreenProps<RootStackParamList>,
    DrawerScreenProps<RootDrawerParamList>
  >
>;

export type UserDetailPageProps = CompositeScreenProps<
  NativeStackScreenProps<RootStackParamList, 'UserDetail'>,
  CompositeScreenProps<
    BottomTabScreenProps<RootTabsParamList>,
    DrawerScreenProps<RootDrawerParamList>
  >
>;

export type SearchPageProps = CompositeScreenProps<
  NativeStackScreenProps<RootStackParamList, 'SearchPage'>,
  CompositeScreenProps<
    BottomTabScreenProps<RootTabsParamList>,
    DrawerScreenProps<RootDrawerParamList>
  >
>;

export type SearchDetailPageProps = CompositeScreenProps<
  NativeStackScreenProps<RootStackParamList, 'SearchDetailPage'>,
  CompositeScreenProps<
    BottomTabScreenProps<RootTabsParamList>,
    DrawerScreenProps<RootDrawerParamList>
  >
>;
