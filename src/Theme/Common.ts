/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import {StyleSheet} from 'react-native';
import buttonStyles from './components/Buttons';
import headerStyles from './components/Headers';
import inputStyles from './components/Input';
import searchPageStyles from './../views/screens/stacks/Search/SearchPageStyle';
import {CommonParams} from './theme';
import {width} from './Layout';

export default function <C>({Colors, ...args}: CommonParams<C>) {
  return {
    button: buttonStyles({Colors, ...args}),
    ...StyleSheet.create({
      backgroundPrimary: {
        backgroundColor: Colors.Primary,
      },
      backgroundLayout: {
        backgroundColor: Colors.White,
      },
      backgroundReset: {
        backgroundColor: Colors.White,
      },
      textInput: {
        borderWidth: 1,
        borderColor: Colors.LightGray,
        backgroundColor: Colors.White,
        color: Colors.LightGray,
        minHeight: 50,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
      },
      elevated: {
        shadowOffset: {width: 0, height: 2},
        shadowColor: Colors.LightGray,
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 2,
      },
      bottomTabsContainer: {
        backgroundColor: Colors.White,
        flex: 1,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        elevation: 5,
        shadowColor: Colors.Dark,
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 10,
        shadowOpacity: 0.1,
        paddingVertical: width * 0.03,
        paddingHorizontal: width * 0.03,
        paddingBottom: width * 0.045,
      },
      buttonTab: {
        ...args.Layout.row,
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: width * 0.03,
      },
      activeButtonTab: {
        flex: 1.5,
        backgroundColor: Colors.Primary,
      },
      avatar: {
        width: width * 0.1,
        height: width * 0.1,
        borderRadius: (width * 0.1) / 2,
        borderColor: Colors.Primary,
        borderWidth: 0.5,
      },
    }),
    header: headerStyles({Colors, ...args}),
    input: inputStyles({Colors, ...args}),
    exploreItemWrapper: {
      width: width * 0.4,
      height: width * 0.3,
      borderRadius: width * 0.03,
      padding: width * 0.03,
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
    },
    topicItemBadge: {
      borderRadius: width * 0.03,
      backgroundColor: 'rgba(0,0,0,0.4)',
    },
    userAvatar: {
      width: width * 0.1,
      height: width * 0.1,
      borderRadius: (width * 0.1) / 2,
      borderWidth: 1,
      borderColor: Colors.LightGray,
    },
    customDot: {
      width: 5,
      height: 5,
      borderRadius: 5,
      backgroundColor: Colors.Dark,
      marginBottom: 2.5,
      marginHorizontal: width * 0.03,
    },
    photoItem: {
      width: width * 0.915,
      height: width * 0.6,
      borderRadius: width * 0.03,
    },
    searchStyle: searchPageStyles({Colors, ...args}),
  };
}
