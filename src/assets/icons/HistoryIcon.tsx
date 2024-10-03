import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const HistoryIcon = (props: SvgProps) => {
  return (
    <Svg width="20" height="21" viewBox="0 0 20 21" fill="none">
      <Path d="M16.25 3.625H3.75C2.71447 3.625 1.875 4.46447 1.875 5.5V16.75C1.875 17.7855 2.71447 18.625 3.75 18.625H16.25C17.2855 18.625 18.125 17.7855 18.125 16.75V5.5C18.125 4.46447 17.2855 3.625 16.25 3.625Z" stroke="#181818" stroke-linejoin="round" />
      <Path d="M5 2.375V3.625M15 2.375V3.625M18.125 6.75H1.875" stroke="#181818" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M8.46962 14.3489L6.81271 12.6931C6.72343 12.6039 6.60234 12.5538 6.47607 12.5538C6.34981 12.5538 6.22872 12.6039 6.13944 12.6931C6.05016 12.7824 6 12.9034 6 13.0295C6 13.092 6.01231 13.1539 6.03624 13.2116C6.06016 13.2693 6.09523 13.3217 6.13944 13.3659L8.13538 15.3604C8.3216 15.5465 8.62242 15.5465 8.80865 15.3604L13.8606 10.3121C13.9498 10.2229 14 10.1019 14 9.97573C14 9.84956 13.9498 9.72856 13.8606 9.63934C13.7713 9.55012 13.6502 9.5 13.5239 9.5C13.3977 9.5 13.2766 9.55012 13.1873 9.63934L8.46962 14.3489Z" fill="#181818" />
    </Svg>
  );
};
