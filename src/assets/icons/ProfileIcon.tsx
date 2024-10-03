import React, { ReactElement, memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { ActiveIconProps } from "~shared/types/icon";
import { colors } from "~utils";

export const ProfileIcon = memo(function ProfileIcon({
  active = false,
  activeColor = colors.appBlack,
  color = colors.appGray,
  size = 24,
}: ActiveIconProps): ReactElement {
  return (
    <Svg width={size} height={size} viewBox="0 0 18 19" fill="none">
      <Path
        d="M9 0C10.1272 0 11.2082 0.474106 12.0052 1.31802C12.8022 2.16193 13.25 3.30653 13.25 4.5C13.25 5.69347 12.8022 6.83807 12.0052 7.68198C11.2082 8.52589 10.1272 9 9 9C7.87283 9 6.79183 8.52589 5.9948 7.68198C5.19777 6.83807 4.75 5.69347 4.75 4.5C4.75 3.30653 5.19777 2.16193 5.9948 1.31802C6.79183 0.474106 7.87283 0 9 0ZM9 19C9 19 17.5 19 17.5 16.75C17.5 14.05 13.3562 10.125 9 10.125C4.64375 10.125 0.5 14.05 0.5 16.75C0.5 19 9 19 9 19Z"
        fill={active ? activeColor : color}
      />
    </Svg>
  );
});
