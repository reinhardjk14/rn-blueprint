import {width} from '_theme/Layout';
import React, {useState} from 'react';
import {Platform, TouchableOpacity, View} from 'react-native';
import {Blurhash} from 'react-native-blurhash';
import FastImage from 'react-native-fast-image';
import {CardItemPhotoProps} from './index';
import useTheme from '_hooks/useTheme';
import NavigationService from 'src/navigators/NavigationService';

const CardItemPhoto = ({data}: CardItemPhotoProps) => {
  const {Gutters, Colors, Common} = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setIsError(true);
  };

  const renderBlurHashPlaceholder = () => {
    if (!data.blur_hash) return null;

    return (
      <Blurhash
        blurhash={data.blur_hash}
        style={[
          {borderRadius: width * 0.03, aspectRatio: data.width / data.height},
        ]}
      />
    );
  };

  return (
    <TouchableOpacity
      key={data?.id}
      style={[
        Gutters.tinyMargin,
        Common.backgroundLayout,
        {borderRadius: width * 0.03},
      ]}
      onPress={() => NavigationService.navigate('SearchDetailPage', data)}>
      {isLoading && renderBlurHashPlaceholder()}

      <FastImage
        source={{
          uri: data?.urls?.full,
          cache: FastImage.cacheControl.immutable,
          priority: FastImage.priority.high,
        }}
        style={{
          display: isLoading ? 'none' : 'flex',
          aspectRatio: data.width / data.height,
          borderRadius: width * 0.03,
          backgroundColor: Colors.Ivory,
        }}
        onLoad={handleImageLoad}
        onError={handleImageError}
        fallback={Platform.OS === 'android'}
      />
    </TouchableOpacity>
  );
};

export default CardItemPhoto;
