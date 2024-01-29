import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { palette } from "~utils/theme";

interface FilterIconProps {
  fill?: string;
}

const FilterIcon: React.FC<FilterIconProps> = ({ fill = palette.white }) => {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.032 5.5a3.668 3.668 0 017.102 0h1.949a.917.917 0 110 1.833h-1.948a3.668 3.668 0 01-7.103 0H.917a.917.917 0 110-1.833h11.115zm-9.166 9.167a3.668 3.668 0 017.102 0h11.115a.917.917 0 110 1.833H9.968a3.668 3.668 0 01-7.102 0H.917a.917.917 0 110-1.833h1.949zm3.55 2.75a1.833 1.833 0 100-3.667 1.833 1.833 0 000 3.667zm9.167-9.167a1.833 1.833 0 100-3.667 1.833 1.833 0 000 3.667z"
        fill={fill}
      />
    </Svg>
  );
};

export default FilterIcon;