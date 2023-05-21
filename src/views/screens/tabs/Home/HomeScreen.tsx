import {Text} from '_atom/index';
import {HeaderTitle} from '_molecule/Header';
import {Container, Content} from '_organism/Basic';
import React from 'react';
import {View} from 'react-native';

const HomeScreen = props => {
  return (
    <Container>
      <HeaderTitle
        leftIcon="menu"
        title={'Construction Machine Management'}
        onPressLeftIcon={props.navigation.openDrawer}
      />
      <Content>
        <View>
          <Text>HomeScreen</Text>
        </View>
      </Content>
    </Container>
  );
};

export default HomeScreen;
