import {
  CommonActions,
  StackActions,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {
  RootDrawerParamList,
  RootStackParamList,
  RootTabsParamList,
} from './screens';

type keyRouteNames =
  | keyof RootStackParamList
  | keyof RootDrawerParamList
  | keyof RootTabsParamList;

export const navigationRef = createNavigationContainerRef<
  RootStackParamList & RootDrawerParamList & RootTabsParamList
>();

function navigate(routeName: keyRouteNames, params?: any, key: string = '') {
  if (navigationRef.isReady()) {
    navigationRef.navigate(routeName, {
      ...params,
      key,
    });
  }
}

function navigateBack() {
  navigationRef.dispatch(CommonActions.goBack());
}

function replace(name: keyRouteNames, params?: any) {
  navigationRef.dispatch(StackActions.replace(name, params));
}

function navigateAndReset(
  routes: Array<{name: keyRouteNames; params?: any; key?: any}> = [],
  index = 0,
) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes,
      }),
    );
  }
}

export default {
  navigate,
  navigateBack,
  navigateAndReset,
  replace,
};
