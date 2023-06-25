import useTheme from '_hooks/useTheme';
import React from 'react';
import {ActivityIndicator, View} from 'react-native';

const FooterComponent = ({isVisible}: {isVisible: boolean}) => {
  const {Layout, Colors} = useTheme();

  if (isVisible) {
    return (
      <View style={Layout.center}>
        <ActivityIndicator color={Colors.Primary} />
      </View>
    );
  }
  return null;
};

export default FooterComponent;
