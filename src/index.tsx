import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ConnectedProps, connect} from 'react-redux';
import {navigationRef} from './navigators/NavigationService';
import StackNavigator from './navigators/stackNavigator';
import {RootState} from './redux';
import {setCurrentRouteName} from './redux/actions/main';

interface Props extends ReduxProps {}

function App(props: Props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializer = async () => {
      setIsLoading(true);
      // …do multiple sync or async tasks
      setIsLoading(false);
    };

    initializer().finally(async () => {});

    return () => {};
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <StackNavigator />
    </NavigationContainer>
  );
}

const mapStateToProps = ({}: RootState) => ({});

const mapDispatchToProps = {
  _setCurrentRouteName: setCurrentRouteName,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(App);
