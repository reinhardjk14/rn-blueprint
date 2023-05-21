import useTheme from '_hooks/useTheme';
import {Colors, FontSize} from '_theme/Variables';
import React from 'react';
import {Text as RNText} from 'react-native';
import {IText} from './index';

const Text = ({
  text,
  size = 'sm',
  variant = 'normal',
  style,
  children,
  color = Colors.neutral[500],
  ...props
}: IText) => {
  const {Fonts}: {Fonts: any} = useTheme();
  let fontSize = {fontSize: typeof size === 'number' ? size : FontSize[size]};

  return (
    <RNText
      style={[{color: color}, fontSize, Fonts[variant], style]}
      {...props}>
      {text}
      {children}
    </RNText>
  );
};

export default Text;
