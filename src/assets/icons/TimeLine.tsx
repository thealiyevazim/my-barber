import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

interface TimeLineProps {
  // Define any props required by the component
}

const TimeLine: React.FC<TimeLineProps> = (props) => {
  return (
    <Svg
      width={34}
      height={4}
      viewBox="0 0 34 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.667 2a1.333 1.333 0 102.666 0A1.333 1.333 0 00.667 2zm30 0a1.333 1.333 0 102.666 0 1.333 1.333 0 00-2.666 0zM2 2.25h15v-.5H2v.5zm15 0h15v-.5H17v.5z"
        fill="#9CA3AF"
      />
    </Svg>
  );
};

export default TimeLine;