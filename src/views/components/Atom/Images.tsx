import {height, width} from '_theme/Layout';
import React, {useState} from 'react';
import {Platform, StyleProp, View, ViewStyle} from 'react-native';
import {Blurhash} from 'react-native-blurhash';
import {FastImageProps, ResizeMode} from 'react-native-fast-image';
import ImageModal from 'react-native-image-modal';

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

      <ImageModal
        style={[{display: isLoading ? 'none' : 'flex'}, style]}
        source={source}
        modalImageResizeMode="contain"
        modalImageStyle={{
          width: width * 0.9,
          height: height * 0.9,
        }}
        resizeMode={resizeMode}
        onLoad={handleImageLoad}
        onError={handleImageError}
        fallback={Platform.OS === 'android'}
      />
    </View>
  );
};

export default Images;
