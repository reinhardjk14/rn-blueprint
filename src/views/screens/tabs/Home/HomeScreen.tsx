import {View} from 'react-native';
import React from 'react';
import {Text} from '_atom/index';
import {Container, Content} from '_organism/Basic';

const HomeScreen = () => {
  return (
    <Container>
      <Content>
        <View>
          <Text size={'xl2'}>HomeScreen</Text>
        </View>
      </Content>
    </Container>
  );
};

export default HomeScreen;
