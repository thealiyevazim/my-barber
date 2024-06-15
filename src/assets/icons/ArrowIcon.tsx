import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { Pressable } from 'react-native';
import { useIconSizes } from '~utils';
import { IIconProps } from '~enums';

export const ArrowIcon: FC<IIconProps> = props => {
  const baseWidth = 28;
  const baseHeight = 28;

  const { width, height } = useIconSizes({
    baseWidth,
    baseHeight,
    size: props.size,
    sizeType: props.sizeType,
  });
  return (
    <Pressable onPress={props.onPress} style={props.pressableStyle}>
      <Svg
        width={width}
        height={height}
        viewBox={'0 0 28 30'}
        style={props.style}
        fill={'none'}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.3253 6.1752C18.7809 6.63082 18.7809 7.36951 18.3253 7.82512L12.1502 14.0002L18.3253 20.1752C18.7809 20.6308 18.7809 21.3695 18.3253 21.8251C17.8697 22.2807 17.131 22.2807 16.6754 21.8251L9.67537 14.8251C9.21976 14.3695 9.21976 13.6308 9.67537 13.1752L16.6754 6.1752C17.131 5.71959 17.8697 5.71959 18.3253 6.1752Z"
          fill={props.color || '#13172F'}
        />
      </Svg>
    </Pressable>
  );
};