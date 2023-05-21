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
  onPressBack,
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
      <TouchableOpacity onPress={onPressBack || defaultAction}>
        <Icon name="arrow-left2" size="xl" />
      </TouchableOpacity>
      <Text
        variant="semibold"
        color={titleColor || Colors.neutral[500]}
        size="lg"
        style={{textAlign: 'center', width: '90%'}}>
        {title}
      </Text>
      {rightIcon ? (
        <TouchableOpacity onPress={onPressRightIcon}>
          <Icon name={rightIcon} size="xl" color={rightIconColor} />
        </TouchableOpacity>
      ) : (
        <View style={{width: FontSize['xl']}} />
      )}
    </HeaderWrapper>
  );
};

export default HeaderTitle;
