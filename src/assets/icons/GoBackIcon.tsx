import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const GoBackIcon = (props: SvgProps) => {
  return (
    <Svg
      width={props.width ? props.width : '30'}
      height={props.height ? props.height : '30'}
      viewBox="0 0 20 20"
      fill="none"
      style={props.style}>
      <Path
        d="M7.49997 16.5999L12.9333 11.1666C13.575 10.5249 13.575 9.4749 12.9333 8.83324L7.49997 3.3999"
        stroke={props.stroke}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
