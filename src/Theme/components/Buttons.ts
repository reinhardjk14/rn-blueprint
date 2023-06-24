import {MetricsSizes} from '_theme/Variables';
import {CommonParams} from '_theme/theme';
import {StyleSheet} from 'react-native';

export default function <C>({Colors, Gutters, Layout}: CommonParams<C>) {
  const base = {
    ...Gutters.tinyVMargin,
    ...Gutters.tinyHMargin,
    ...Layout.fill,
    ...Layout.rowCenter,
    borderRadius: MetricsSizes.xlarge,
  };

  return StyleSheet.create({
    base,
    outline: {
      ...base,
      ...Layout.rowCenter,
      ...Gutters.tinyVPadding,
      backgroundColor: Colors.White,
      borderWidth: 2,
      borderColor: Colors.LightBlue,
    },
    icon: {
      ...Layout.center,
      ...Gutters.tinyHPadding,
      ...Gutters.tinyVPadding,
      ...Gutters.tinyHMargin,
      ...Gutters.tinyVMargin,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: Colors.Beige,
      flexGrow: 0,
    },
  });
}
