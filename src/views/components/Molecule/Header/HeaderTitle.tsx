import Images from '_atom/Images';
import {Icon, Text} from '_atom/index';
import useTheme from '_hooks/useTheme';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import NavigationService from 'src/navigators/NavigationService';
import {HeaderWrapper, IHeaderTitle} from './index';

const HeaderTitle = ({
  style,
  title,
  titleColor,
  leftIcon = 'arrow-left2',
  leftImage,
  leftImageStyle,
  onPressLeftIcon,
  rightIcon,
  rightIconColor,
  onPressRightIcon,
  showLeftIcon = true,
}: IHeaderTitle) => {
  const {Common, FontSize, Colors} = useTheme();
  const {header: styles} = Common;
  const defaultAction = () => {
    NavigationService.navigateBack();
  };

  return (
    <HeaderWrapper style={[Common.header.headerBrandContent, style]}>
      {showLeftIcon && (
        <>
          {leftImage ? (
            <Images source={leftImage} style={leftImageStyle} />
          ) : null}
          {!leftImage ? (
            <TouchableOpacity onPress={onPressLeftIcon || defaultAction}>
              <Icon name={leftIcon} />
            </TouchableOpacity>
          ) : null}
        </>
      )}

      <Text
        variant="semibold"
        color={titleColor || Colors.Primary}
        size="lg"
        style={[styles.headerTitle, !showLeftIcon && {width: '100%'}]}>
        {title}
      </Text>
      {rightIcon ? (
        <TouchableOpacity onPress={onPressRightIcon}>
          <Icon name={rightIcon} color={rightIconColor} />
        </TouchableOpacity>
      ) : (
        <View style={{width: FontSize['xl']}} />
      )}
    </HeaderWrapper>
  );
};

export default HeaderTitle;
