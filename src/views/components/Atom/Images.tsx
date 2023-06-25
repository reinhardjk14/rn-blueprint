import {width} from '_theme/Layout';
import React, {useState} from 'react';
import {Platform, StyleProp, View, ViewStyle} from 'react-native';
import {Blurhash} from 'react-native-blurhash';
import FastImage, {FastImageProps, ResizeMode} from 'react-native-fast-image';

interface ImageProps extends Omit<FastImageProps, 'style'> {
  blurHash?: string;
  style?: StyleProp<ViewStyle>;
  resizeMode?: ResizeMode;
}

const Images = ({
  source,
  blurHash,
  style,
  resizeMode = 'cover',
}: ImageProps) => {
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
    if (!blurHash) return null;

    return (
      <Blurhash
        blurhash={blurHash}
        style={[{borderRadius: width * 0.03}, style]}
      />
    );
  };

  return (
    <View>
      {isLoading && renderBlurHashPlaceholder()}

      <FastImage
        style={[{display: isLoading ? 'none' : 'flex'}, style]}
        source={source}
        resizeMode={resizeMode}
        onLoad={handleImageLoad}
        onError={handleImageError}
        fallback={Platform.OS === 'android'}
      />
    </View>
  );
};

export default Images;
