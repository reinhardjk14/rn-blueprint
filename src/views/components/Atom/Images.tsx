import React, {useEffect, useState} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {Blurhash} from 'react-native-blurhash';
import FastImage, {
  FastImageProps,
  ResizeMode,
  Source,
} from 'react-native-fast-image';

interface ImageProps extends Omit<FastImageProps, 'style'> {
  source: Source | number;
  blurHash?: string;
  style?: StyleProp<ViewStyle>;
  resizeMode?: ResizeMode;
}

const Images = React.memo(
  ({source, blurHash, style, resizeMode = 'cover'}: ImageProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
      let isMounted = true;

      const image = FastImage.preload([{uri: source.uri}]);

      return () => {
        isMounted = false;
        // Cleanup function, cancel any ongoing requests if needed
        // (FastImage does not provide a cancel method)
      };
    }, [source]);

    const handleImageLoad = () => {
      setIsLoading(false);
    };

    const handleImageError = () => {
      setIsLoading(false);
      setIsError(true);
    };

    const renderBlurHashPlaceholder = () => {
      if (!blurHash) return null;

      return <Blurhash blurhash={blurHash} style={style} />;
    };

    return (
      <View>
        {isLoading && renderBlurHashPlaceholder()}

        <FastImage
          style={[style, isLoading && {opacity: 0}]}
          source={source}
          resizeMode={resizeMode}
          onLoad={handleImageLoad}
          onError={handleImageError}
          priority={FastImage.priority.normal}
        />
      </View>
    );
  },
);

export default Images;
