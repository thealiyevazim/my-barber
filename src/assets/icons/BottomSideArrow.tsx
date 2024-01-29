import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface LeftBackProps extends SvgProps {
  // Add any specific props for LeftBack component
  color: string;
}

const BottomDirectionArrow: React.FC<LeftBackProps> = ({ color, ...props }) => {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.72 9.653L7.067 5.305a1.324 1.324 0 011.866 0L13.213 9.653"
        stroke={color} // Use the color prop here to set the stroke color dynamically
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default BottomDirectionArrow;