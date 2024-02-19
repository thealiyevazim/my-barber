import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface HomeIconProps extends SvgProps {}

const HomeIcon: React.FC<HomeIconProps> = ({ ...props }) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.184 22.91H14.82l4.155.025c1.576 0 2.842-1.168 2.842-2.758v-9.99c0-.652-.258-1.278-.723-1.721l-.026-.026-7.7-6.938c-.749-.73-1.989-.73-2.738 0L2.93 8.44l-.026.026a2.466 2.466 0 00-.723 1.721v9.964c0 1.59 1.266 2.758 2.842 2.758h4.16zm-5.452-2.76v-9.963c0-.208.078-.443.233-.6l7.7-6.937.025-.026a.435.435 0 01.594 0l.026.026 7.7 6.938a.83.83 0 01.232.6v9.963c0 .73-.568 1.303-1.292 1.303h-3.358-5.375c-1.007 0-1.808.027-1.808.027H5.024a1.325 1.325 0 01-1.292-1.33z"
        fill="#181818"
      />
      <Path
        stroke="#181818"
        strokeWidth={2}
        strokeLinecap="round"
        d="M11.9092 15.1816L11.9092 17.5453"
      />
    </Svg>
  );
};

export default HomeIcon;