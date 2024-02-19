import React from "react";
import { Svg, Path } from "react-native-svg";

interface StarIconProps {
  fill?: string;
}

const StarIcon: React.FC<StarIconProps> = ({ fill = "#FBBC04" }) => {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M16.5 7.575c.075-.375-.225-.825-.6-.825l-4.275-.6-1.95-3.9a.586.586 0 00-.3-.3c-.375-.225-.825-.075-1.05.3L6.45 6.15l-4.275.6c-.225 0-.375.075-.45.225-.3.3-.3.75 0 1.05l3.075 3-.75 4.275c0 .15 0 .3.075.45.225.375.675.525 1.05.3L9 14.025l3.825 2.025c.075.075.225.075.375.075h.15a.778.778 0 00.6-.9l-.75-4.275 3.075-3a.412.412 0 00.225-.375z"
        fill={fill}
      />
    </Svg>
  );
};

export default StarIcon;