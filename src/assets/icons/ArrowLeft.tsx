import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface LeftBackProps extends SvgProps {
  // Add any specific props for LeftBack component
  color: string;
}

const LeftBack: React.FC<LeftBackProps> = ({ color, ...props }) => {
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
        d="M9.653 2.72L5.305 7.067a1.324 1.324 0 000 1.866l4.348 4.347"
        stroke={color} // Use the color prop here to set the stroke color dynamically
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default LeftBack;