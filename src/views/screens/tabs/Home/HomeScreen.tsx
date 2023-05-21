import {Text} from '_atom/index';
import {HeaderLeftIcon} from '_molecule/Header';
import {Container, Content} from '_organism/Basic';
import React from 'react';
import {View} from 'react-native';

const HomeScreen = props => {
  return (
    <Container>
      <HeaderLeftIcon iconName="menu" onPress={props.navigation.openDrawer} />
      <Content>
        <View>
          <Text size={'xl2'}>HomeScreen</Text>
        </View>
      </Content>
    </Container>
  );
};

export default HomeScreen;
