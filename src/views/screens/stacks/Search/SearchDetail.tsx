import Icon from '_atom/Icon';
import moment from 'moment';
import Images from '_atom/Images';
import Text from '_atom/Text';
import useTheme from '_hooks/useTheme';
import {HeaderLeftIcon} from '_molecule/Header';
import {Container, Content} from '_organism/Basic';
import {height, width} from '_theme/Layout';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ItemPhotoDTO} from 'src/Interfaces/photos';
import NavigationService from 'src/navigators/NavigationService';
import {SearchDetailPageProps} from 'src/utils/types';
import {onShare} from 'src/utils/helpers';

const SearchDetail = (props: SearchDetailPageProps) => {
  const {route} = props;
  const {Gutters, Colors, Layout, Common} = useTheme();
  const [detailData, setDetailData] = useState<ItemPhotoDTO>();
  const [like, setLike] = useState<boolean>(false);

  useEffect(() => {
    if (route?.params) {
      setDetailData(route?.params);
    }
  }, [route.params]);

  const openDetailUser = React.useCallback(() => {
    NavigationService.navigate('UserDetail', {detailData});
  }, []);

  const onToggleLike = React.useCallback(() => {
    setLike(prev => !prev);
  }, []);

  const onShareAction = React.useCallback(() => {
    const content = `I found this awesome, go check this out \n\n${detailData?.links?.html}`;
    onShare(content);
  }, [detailData?.links?.html]);

  return (
    <Container style={Common.backgroundLayout}>
      <HeaderLeftIcon style={{borderBottomWidth: 0}} />
      <Content>
        <View style={[Layout.center, Gutters.largePadding]}>
          <Images
            blurHash={detailData?.blur_hash}
            source={{
              uri: detailData?.urls?.full,
              cache: FastImage.cacheControl.cacheOnly,
            }}
            style={{
              width: width * 0.9,
              height: height * 0.3,
              borderRadius: width * 0.03,
            }}
            onDoubleTap={() => setLike(true)}
          />
          <View style={[Gutters.xlargeBMargin, Gutters.smallTMargin]}>
            <Text
              text={moment(detailData?.created_at).format('LL, hh:mm')}
              color={Colors.LightGray}
            />
            <Text text={detailData?.description} />
          </View>
          <View
            style={[
              Layout.row,
              Layout.justifyContentBetween,
              Layout.alignItemsCenter,
            ]}>
            <TouchableOpacity
              onPress={openDetailUser}
              style={[Layout.row, Layout.alignItemsCenter, {flex: 7}]}>
              <Images
                source={{uri: detailData?.user.profile_image.medium}}
                style={Common.userAvatar}
              />
              <View style={[[Gutters.smallLPadding, {flex: 8}]]}>
                <Text text={detailData?.user.name} variant="semibold" />
                <View style={[Layout.row, Layout.alignItemsCenter]}>
                  <Text
                    text={`${detailData?.user.total_collections} collections`}
                    size="xs"
                  />
                  <View style={Common.customDot} />
                  <Text
                    text={`${detailData?.user.total_photos} image`}
                    size="xs"
                  />
                </View>
              </View>
            </TouchableOpacity>
            <View style={[Layout.row, {flex: 2}]}>
              <TouchableOpacity
                onPress={onToggleLike}
                style={[Layout.center, Layout.justifyContentStart, {flex: 1}]}>
                <Icon
                  name={like ? 'heartfilled' : 'heart'}
                  color={like ? Colors.SoftRed : undefined}
                  size={width * 0.05}
                />
                <Text text={like ? detailData?.likes + 1 : detailData?.likes} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onShareAction}
                style={[Layout.center, Layout.justifyContentStart, {flex: 1}]}>
                <Icon name={'share'} size={width * 0.05} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default SearchDetail;
