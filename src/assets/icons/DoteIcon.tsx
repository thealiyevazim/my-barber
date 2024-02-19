import * as React from "react";
import Svg, { Circle } from "react-native-svg";

interface DoteIconProps {
  fill?: string;
}

const DoteIcon: React.FC<DoteIconProps> = ({ fill = "#14145C" }) => {
  return (
    <Svg
      width={4}
      height={4}
      viewBox="0 0 4 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={2} cy={2} r={2} fill={fill} />
    </Svg>
  );
};

export default DoteIcon;