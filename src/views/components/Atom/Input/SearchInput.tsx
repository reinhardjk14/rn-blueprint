import useDebounce from '_hooks/useDebounce';
import useTheme from '_hooks/useTheme';
import React, {useEffect, useRef, useState} from 'react';
import {LayoutAnimation, TextInput, TouchableOpacity, View} from 'react-native';
import {Icon} from '../index';

const SearchButton = ({
  onChangeValue,
}: {
  onChangeValue: (param: string) => any;
}) => {
  const {Colors, Common} = useTheme();
  const styles = Common.input;

  const [showInput, setShowInput] = useState(false);
  const [searchText, setSearchText] = useState('');
  const keywords = useDebounce(searchText, 500);

  const inputContainerRef = useRef(null);

  const handleSearchIconPress = React.useCallback(() => {
    setShowInput(true);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, []);

  const handleCancelPress = React.useCallback(() => {
    setSearchText('');
    setShowInput(false);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, []);

  const reset = React.useCallback(() => {
    setSearchText('');
  }, []);

  useEffect(() => {
    if (keywords) {
      if (keywords.length > 2) {
        onChangeValue(keywords);
      } else {
        reset();
      }
    }
  }, [keywords]);

  return (
    <View style={styles.container}>
      {showInput ? (
        <View style={styles.inputContainer} ref={inputContainerRef}>
          <TextInput
            style={styles.input}
            placeholder="Search"
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity onPress={handleCancelPress}>
            <Icon name="close" size={20} color={Colors.Dark} />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onPress={handleSearchIconPress}>
          <Icon name="search" size={20} color={Colors.Dark} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchButton;
