import Text from '_atom/Text';
import useTheme from '_hooks/useTheme';
import {width} from '_theme/Layout';
import React from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';

const EmptyResult = () => {
  const {Images, Layout, Gutters} = useTheme();
  return (
    <View style={[Layout.center, Layout.fill]}>
      <FastImage
        source={Images.notfound}
        style={[
          Gutters.smallBMargin,
          {width: width * 0.4, height: width * 0.4},
        ]}
      />

      <Text text={'Sorry!'} variant="semibold" />
      <Text
        text={
          'The data you were looking for does not exist. Please try again later'
        }
        style={{width: '80%', textAlign: 'center'}}
      />
    </View>
  );
};

export default EmptyResult;
