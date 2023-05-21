import {Text} from '_atom/index';
import {HeaderTitle} from '_molecule/Header';
import {Container, Content} from '_organism/Basic';
import React from 'react';
import {View} from 'react-native';
import {ConnectedProps, connect} from 'react-redux';
import {RootState} from 'src/redux';
import {HomeScreenProps} from 'src/utils/types';

type Props = ReduxProps & HomeScreenProps;

const HomeScreen = (props: Props) => {
  return (
    <Container>
      <HeaderTitle
        leftIcon="menu"
        title={'Dashboard'}
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

const mapStateToProps = ({}: RootState) => ({});
const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;
export default connector(HomeScreen);
