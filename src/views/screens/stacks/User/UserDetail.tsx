import useTheme from '_hooks/useTheme';
import {HeaderLeftIcon} from '_molecule/Header';
import {Container} from '_organism/Basic';
import React from 'react';
import {StatusBar} from 'react-native';
import {UserDetailPageProps} from 'src/utils/types';

const UserDetail = (props: UserDetailPageProps) => {
  const {route} = props;
  const {Colors, Common} = useTheme();

  React.useEffect(() => {
    console.log('route', route);
  }, [route]);

  return (
    <Container style={{backgroundColor: Colors.Primary}}>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.Primary} />
      <HeaderLeftIcon
        iconColor={Colors.White}
        style={[{backgroundColor: Colors.Primary, borderBottomWidth: 0}]}
      />
    </Container>
  );
};

export default UserDetail;
