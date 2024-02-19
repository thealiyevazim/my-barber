import React from "react";
import Svg, { G, Path, SvgProps } from "react-native-svg";

interface SvgComponentProps extends SvgProps {
  // Add any specific props for SvgComponent
}

const ClockTimer: React.FC<SvgComponentProps> = (props) => {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        stroke="#9CA3AF"
        strokeWidth={0.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M7 12.25a5.25 5.25 0 100-10.5 5.25 5.25 0 000 10.5z" />
        <Path d="M6.417 4.667v2.916h2.916" />
      </G>
    </Svg>
  );
};

export default ClockTimer;