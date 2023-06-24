import {height, width} from '_theme/Layout';
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
      borderRadius: 5,
      paddingHorizontal: 5,
      overflow: 'hidden',
    },
    input: {
      ...args.Fonts.normal,
      flex: 1,
      height: 40,
      marginLeft: 5,
    },
  });
}
