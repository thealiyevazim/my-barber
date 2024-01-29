import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface HistorySvgIconProps extends SvgProps {}

const HistorySvgIcon: React.FC<HistorySvgIconProps> = ({ ...props }) => {
  return (
    <Svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16.25 3.625H3.75c-1.036 0-1.875.84-1.875 1.875v11.25c0 1.035.84 1.875 1.875 1.875h12.5c1.035 0 1.875-.84 1.875-1.875V5.5c0-1.036-.84-1.875-1.875-1.875z"
        stroke="#181818"
        strokeLinejoin="round"
      />
      <Path
        d="M5 2.375v1.25m10-1.25v1.25m3.125 3.125H1.875"
        stroke="#181818"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.47 14.349l-1.657-1.656a.476.476 0 00-.674.673l1.996 1.994a.476.476 0 00.674 0l5.052-5.048a.476.476 0 10-.674-.673L8.47 14.35z"
        fill="#181818"
      />
    </Svg>
  );
};

export default HistorySvgIcon;