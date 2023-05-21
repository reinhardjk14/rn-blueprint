import {StyleProp, TextProps, TextStyle, ViewStyle} from 'react-native';
import Icon from './Icon';
import Text from './Text';

export type TFontSizes =
  | 'xs2'
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | 'xl2'
  | 'xl3'
  | 'xl4'
  | 'xl5'
  | number;

export interface IText extends TextProps {
  children?: React.ReactNode;
  text?: string;
  size?: TFontSizes;
  variant?: 'light' | 'normal' | 'semibold' | 'bold';
  style?: StyleProp<TextStyle>;
  color?: string;
}

export interface IconSet {
  icons: Array<any>;
}

export type IconName =
  | 'love'
  | 'left'
  | 'filter'
  | 'star'
  | 'star-filled'
  | 'star-half';

export interface IconMap {
  name: string;
  paths: Array<string>;
}

export interface SvgIconProps {
  iconSet: IconSet;
  name: string;
  color?: string;
  size?: number;
  strokeWidth?: number;
  offset?: number; // some icon might have different padding, use this to offset it
  width?: number;
  height?: number;
  viewBoxWidthPercentage?: number;
  viewBoxHeightPercentage?: number;
  style?: StyleProp<ViewStyle>;
}
export interface IIcon extends Omit<SvgIconProps, 'iconSet' | 'name' | 'size'> {
  name: IconName;
  color?: string;
  size?: number;
  strokeWidth?: number;
  offset?: number;
}

export {Text, Icon};
