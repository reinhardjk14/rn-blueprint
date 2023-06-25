import Images from '_atom/Images';
import Text from '_atom/Text';
import useTheme from '_hooks/useTheme';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import NavigationService from 'src/navigators/NavigationService';
import {CardUserPhotoProps} from './index';
import Icon from '_atom/Icon';
import {width} from '_theme/Layout';
import {onShare} from 'src/utils/helpers';
import {useSelector} from 'react-redux';
import {RootState} from 'src/redux';
import {ItemPhotoDTO} from 'src/Interfaces/photos';

const CardUserPhoto = ({data}: CardUserPhotoProps) => {
  const {Layout, Gutters, Common, Colors} = useTheme();
  const [liked, setIsLiked] = useState<boolean>(false);
  const myLiked = useSelector(
    (state: RootState) => state?.photos.myLikedPhotos,
  );

  const openDetailUser = React.useCallback(() => {
    NavigationService.navigate('UserDetail', {data});
  }, []);

  const onShareAction = React.useCallback(() => {
    const content = `I found this awesome, go check this out \n\n${data?.links?.html}`;
    onShare(content);
  }, [data?.links?.html]);

  useEffect(() => {
    const itemAvailable: ItemPhotoDTO = myLiked?.find(
      (i: ItemPhotoDTO) => i?.id === data.id,
    );

    if (itemAvailable?.id) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [myLiked, data]);

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
            cache: FastImage.cacheControl.web,
            priority: FastImage.priority.normal,
          }}
          blurHash={data?.blur_hash}
          style={[Common.photoItem, {backgroundColor: Colors.Ivory}]}
        />
      </View>
      <View
        style={[
          Layout.row,
          Gutters.largeTMargin,
          Gutters.smallBPadding,
          {
            flex: 2,
            borderBottomColor: Colors.Secondary,
            borderBottomWidth: 0.5,
          },
        ]}>
        <TouchableOpacity
          // onPress={() => (like ? onDislikePhoto() : onLikePhoto())}
          style={[Layout.center, Layout.justifyContentStart, {flex: 1}]}>
          <Icon
            name={liked ? 'heartfilled' : 'heart'}
            color={liked ? Colors.SoftRed : undefined}
            size={width * 0.05}
          />
          <Text text={liked ? data?.likes + 1 : data?.likes} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onShareAction}
          style={[Layout.center, Layout.justifyContentStart, {flex: 1}]}>
          <Icon name={'share'} size={width * 0.05} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardUserPhoto;
