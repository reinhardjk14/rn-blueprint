import Images from '_atom/Images';
import Text from '_atom/Text';
import useTheme from '_hooks/useTheme';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import NavigationService from 'src/navigators/NavigationService';
import {CardUserPhotoProps} from './index';

const CardUserPhoto = ({data}: CardUserPhotoProps) => {
  const {Layout, Gutters, Common} = useTheme();

  const openDetailUser = React.useCallback(() => {
    NavigationService.navigate('UserDetail', {data});
  }, []);

  return (
    <View style={[Gutters.smallVMargin, Gutters.largeRPadding]}>
      <TouchableOpacity
        onPress={openDetailUser}
        style={[Layout.row, Layout.alignItemsCenter]}>
        <Images
          source={{uri: data.user.profile_image.medium}}
          style={Common.userAvatar}
        />
        <View style={[[Gutters.smallLPadding, {flex: 8}]]}>
          <Text text={data?.user.name} variant="semibold" />
          <View style={[Layout.row, Layout.alignItemsCenter]}>
            <Text
              text={`${data?.user.total_collections} collections`}
              size="xs"
            />
            <View style={Common.customDot} />
            <Text text={`${data?.user.total_photos} image`} size="xs" />
          </View>
        </View>
      </TouchableOpacity>
      <View style={Gutters.largeTMargin}>
        <Images
          source={{
            uri: data.urls?.raw,
            cache: FastImage.cacheControl.immutable,
            priority: FastImage.priority.normal,
          }}
          blurHash={data?.blur_hash}
          style={Common.photoItem}
        />
      </View>
    </View>
  );
};

export default CardUserPhoto;
