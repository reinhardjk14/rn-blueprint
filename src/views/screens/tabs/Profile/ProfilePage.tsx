import {View, Image} from 'react-native';
import React from 'react';
import useTheme from '_hooks/useTheme';
import {Container} from '_organism/Basic';
import {width} from '_theme/Layout';
import Text from '_atom/Text';

const ProfilePage = () => {
  const {Images, Layout, Common, Gutters} = useTheme();
  return (
    <Container style={Common.backgroundLayout}>
      <View style={[Layout.fill, Layout.center]}>
        <Image
          source={Images.underMaintenance}
          defaultSource={Images.underMaintenance}
          style={[
            Gutters.largeBMargin,
            {
              width: width * 0.8,
              height: width * 0.8,
            },
          ]}
        />
        <Text text="Coming Soon" />
      </View>
    </Container>
  );
};

export default ProfilePage;
