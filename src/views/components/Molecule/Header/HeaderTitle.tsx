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
  onPressLeftIcon,
  rightIcon,
  rightIconColor,
  onPressRightIcon,
}: IHeaderTitle) => {
  const {Common, FontSize, Colors} = useTheme();
  const defaultAction = () => {
    NavigationService.navigateBack();
  };

  return (
    <HeaderWrapper style={[Common.header.headerBrandContent, style]}>
      <TouchableOpacity onPress={onPressLeftIcon || defaultAction}>
        <Icon name={leftIcon} />
      </TouchableOpacity>
      <Text
        variant="semibold"
        color={titleColor || Colors.LightBlue}
        size="lg"
        style={{
          textAlign: 'center',
          textAlignVertical: 'center',
          width: '90%',
        }}>
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
