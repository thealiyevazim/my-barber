import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface RightBackProps extends SvgProps {
  // Add any specific props for RightBack component
  color: string;
  fontSize?: number; // Define the fontSize parameter as an optional number
  width?: number;
  height?: number;
}

const RightBack: React.FC<RightBackProps> = ({ color, fontSize, width, height, ...props }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      fontSize={fontSize} // Pass the fontSize prop to the SVG component
      {...props}
    >
      <Path
        d="M6.347 2.72l4.348 4.347a1.324 1.324 0 010 1.866L6.348 14.3"
        stroke={color} // Use the color prop here to set the stroke color dynamically
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default RightBack;