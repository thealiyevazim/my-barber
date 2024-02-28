import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { palette } from "~utils/theme";

const CalendarIcon = (props: SvgProps & { isFocused?: boolean }) => {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none">
      <Path
        d="M17.875 3.438H4.125c-1.14 0-2.063.923-2.063 2.062v12.375c0 1.14.924 2.063 2.063 2.063h13.75c1.14 0 2.063-.924 2.063-2.063V5.5c0-1.14-.924-2.063-2.063-2.063z"
        stroke={props.isFocused ? "#181818" : palette.totalGray}
        strokeLinejoin="round"
      />
      <Path
        d="M5.5 2.063v1.374m11-1.374v1.374m3.438 3.438H2.063"
        stroke={props.isFocused ? "#181818" : palette.totalGray}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.47 15.657l-1.657-1.932a.444.444 0 00-.337-.162.444.444 0 00-.337.162.605.605 0 00-.139.393c0 .073.012.145.036.212a.568.568 0 00.103.18l1.996 2.327a.43.43 0 00.674 0l5.052-5.89a.605.605 0 00.139-.392.605.605 0 00-.14-.392.445.445 0 00-.336-.163.445.445 0 00-.337.163L9.47 15.657z"
        fill={props.isFocused ? "#181818" : palette.totalGray}
      />
    </Svg>
  );
};

export default CalendarIcon;