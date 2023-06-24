import Images from '_atom/Images';
import SearchButton from '_atom/Input/SearchInput';
import {Icon} from '_atom/index';
import useTheme from '_hooks/useTheme';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import NavigationService from 'src/navigators/NavigationService';
import {HeaderWrapper, IHeaderSearch} from './index';

const HeaderSearch = ({
  style,
  leftIcon = 'arrow-left2',
  leftImage,
  leftImageStyle,
  onPressLeftIcon,
  onChangeValue,
}: IHeaderSearch) => {
  const {Common} = useTheme();
  const {header: styles} = Common;
  const defaultAction = () => {
    NavigationService.navigateBack();
  };

  return (
    <HeaderWrapper style={[Common.header.headerBrandContent, style]}>
      {leftImage ? <Images source={leftImage} style={leftImageStyle} /> : null}

      {!leftImage ? (
        <TouchableOpacity onPress={onPressLeftIcon || defaultAction}>
          <Icon name={leftIcon} />
        </TouchableOpacity>
      ) : null}
      <SearchButton onChangeValue={onChangeValue} />
    </HeaderWrapper>
  );
};

export default HeaderSearch;
