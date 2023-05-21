import React from 'react';
import {HeaderWrapper, IHeaderBack} from './index';
import NavigationService from 'src/navigators/NavigationService';
import useTheme from '_hooks/useTheme';
import {Button} from '_atom/Button';

const HeaderLeftIcon = ({
  style,
  iconName = 'arrow-left2',
  onPress,
  iconColor,
}: IHeaderBack) => {
  const {Colors} = useTheme();
  const defaultIconColor = Colors.buttonTitle;
  const defaultAction = () => {
    NavigationService.navigateBack();
  };

  return (
    <HeaderWrapper style={style}>
      <Button
        type="iconOnly"
        icon={iconName}
        iconColor={iconColor ? iconColor : defaultIconColor}
        onPress={onPress ? onPress : defaultAction}
        noBorder
      />
    </HeaderWrapper>
  );
};

export default HeaderLeftIcon;
