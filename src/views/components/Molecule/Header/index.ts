import {IconName} from '_atom/index';
import {StyleProp, View, ViewProps, ViewStyle} from 'react-native';
import HeaderLeftIcon from './HeaderLeftIcon';
import HeaderTitle from './HeaderTitle';
import HeaderWrapper from './HeaderWrapper';

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

export {HeaderWrapper, HeaderLeftIcon, HeaderTitle};
