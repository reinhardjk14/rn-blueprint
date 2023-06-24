import {IconName} from '_atom/index';
import {StyleProp, View, ViewProps, ViewStyle} from 'react-native';
import HeaderLeftIcon from './HeaderLeftIcon';
import HeaderTitle from './HeaderTitle';
import HeaderSearch from './HeaderSearch';
import HeaderWrapper from './HeaderWrapper';
import {Source} from 'react-native-fast-image';

export interface IHeader extends ViewProps {
  androidStatusBarColor?: string;
  ref?: React.LegacyRef<View>;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

export interface IHeaderBack extends IHeader {
  iconName?: IconName;
  onPress?: (param: any) => any;
  iconColor?: string;
}

export interface IHeaderTitle extends IHeader {
  title?: string;
  leftIcon?: IconName;
  leftImage?: Source | number;
  leftImageStyle?: StyleProp<ViewStyle>;
  titleColor?: string;
  placeholder?: string;
  withoutBack?: boolean;
  onPressLeftIcon?: () => void;
  rightIcon?: IconName;
  rightIconColor?: string;
  onPressRightIcon?: () => void;
  CustomRightIcon?: React.FunctionComponent;
  showAvatarProfile?: boolean;
}

export interface IHeaderSearch extends IHeader {
  leftIcon?: IconName;
  leftImage?: Source | number;
  leftImageStyle?: StyleProp<ViewStyle>;
  onPressLeftIcon?: () => void;
  onChangeValue: (param: string) => any;
}

export {HeaderWrapper, HeaderLeftIcon, HeaderTitle, HeaderSearch};
