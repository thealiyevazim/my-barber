import React from "react";
import { Svg, Path } from "react-native-svg";

interface MicroPhoneProps {
  fill?: string;
  fillOpacity?: number;
}

const MicroPhone: React.FC<MicroPhoneProps> = ({
  fill = "#fff",
  fillOpacity = 0.6,
}) => {
  return (
    <Svg
      width={12}
      height={18}
      viewBox="0 0 12 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M6.065 11.723c1.652 0 2.764-1.237 2.764-3.005V3.165C8.83 1.388 7.717.16 6.065.16c-1.66 0-2.773 1.228-2.773 3.005v5.553c0 1.768 1.113 3.005 2.773 3.005zM.122 8.85c0 3.253 2.15 5.536 5.312 5.802v1.934h-3.08a.63.63 0 00-.63.63c0 .35.282.623.63.623h7.413c.349 0 .63-.274.63-.622a.63.63 0 00-.63-.631h-3.08v-1.934C9.858 14.387 12 12.104 12 8.85V7.166a.617.617 0 00-.623-.623.624.624 0 00-.63.623V8.8c0 2.83-1.843 4.706-4.682 4.706-2.847 0-4.69-1.876-4.69-4.706V7.166a.618.618 0 00-.63-.623a.617.617 0 00-.623.623V8.85z"
        fill={fill}
        fillOpacity={fillOpacity}
      />
    </Svg>
  );
};

export default MicroPhone;