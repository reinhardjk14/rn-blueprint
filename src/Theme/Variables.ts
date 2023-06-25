/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import {PixelRatio, Platform} from 'react-native';
import {width} from './Layout';
import {Variables} from './themes/default_dark';

/**
 * Colors
 */
export const Colors = {
  Primary: '#0D294D',
  Secondary: '#5B6B81',
  SkyBlue: '#87CEEB',
  BabyBlue: '#C6E2FF',
  MintGreen: '#B2DFBE',
  SageGreen: '#C8D8BF',
  PaleGreen: '#D8EEDC',
  Beige: '#F1E9DA',
  Ivory: '#FDFBEF',
  LightGray: '#AAAAAA',
  PastelPink: '#F7D4D6',
  Lavender: '#E6E6FA',
  PalePurple: '#DACDFF',
  White: '#FFFFFF',
  Cream: '#F8F8F8',
  Pearl: '#F6F6F6',
  Dark: '#000000',
  SoftRed: '#FF2171',
};

export const NavigationColors = {
  primary: Colors.Primary,
};

const scale = width / 320;
export function normalize(size: number) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

/**
 * FontSize
 */
export const FontSize: any = {
  xs2: normalize(8),
  xs: normalize(10),
  sm: normalize(12),
  base: normalize(14),
  lg: normalize(16),
  xl: normalize(18),
  xl2: normalize(20),
  xl3: normalize(24),
  xl4: normalize(30),
  xl5: normalize(36),
};

/**
 * Metrics Sizes
 */
const tiny = 6; // 6
const small = tiny * 2; // 12
const regular = small + 2; // 14
const large = tiny * 3; // 18
const xlarge = large * 2;
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
  xlarge,
};

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
};
