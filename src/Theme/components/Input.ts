import {width} from '_theme/Layout';
import {CommonParams} from '_theme/theme';
import {StyleSheet} from 'react-native';

export default function <C>({
  Colors,
  Gutters,
  Layout,
  ...args
}: CommonParams<C>) {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    inputContainer: {
      flex: 0.9,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 0.5,
      borderColor: Colors.LightGray,
      borderRadius: width * 0.03,
      paddingHorizontal: 5,
      overflow: 'hidden',
    },
    input: {
      ...args.Fonts.normal,
      ...Gutters.smallVPadding,
      flex: 1,
      marginLeft: 5,
    },
    searchWrapper: {
      ...Layout.row,
      ...Layout.alignItemsCenter,
      ...Gutters.smallHPadding,
      borderRadius: width * 0.03,
      borderColor: Colors.Dark,
      borderWidth: 0.5,
    },
  });
}
