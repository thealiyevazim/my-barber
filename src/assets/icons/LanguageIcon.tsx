import React from "react";
import { Svg, G, Path } from "react-native-svg";

interface LanguageIconProps {
  stroke?: string;
  strokeWidth?: number;
}

const LanguageIcon: React.FC<LanguageIconProps> = ({
  stroke = "#181818",
  strokeWidth = 1.1,
}) => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M1.875 4.375h11.25M7.5 2.5v1.875M10.625 17.5l3.75-8.75 3.75 8.75M11.777 15h5.196M10.988 4.375s-.949 3.672-3.215 6.445C5.508 13.594 3.125 15 3.125 15" />
        <Path d="M10 13.125s-1.367-1.055-2.813-2.93C5.742 8.32 5 6.875 5 6.875" />
      </G>
    </Svg>
  );
};

export default LanguageIcon;