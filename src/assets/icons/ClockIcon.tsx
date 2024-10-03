import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const ClockIcon = (props: SvgProps) => {
  return (
    <Svg width="12" height="12" viewBox="0 0 12 12" fill="none" >
      <Path d="M6 11.25C8.8995 11.25 11.25 8.8995 11.25 6C11.25 3.1005 8.8995 0.75 6 0.75C3.1005 0.75 0.75 3.1005 0.75 6C0.75 8.8995 3.1005 11.25 6 11.25Z" stroke="#9CA3AF" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M5.41663 3.66669V6.58335H8.33329" stroke="#9CA3AF" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  );
};
