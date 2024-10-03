import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const EditIcon = (props: SvgProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 23" fill="none">
      <Path
        d="M23.1666 22C23.1666 22.2733 22.9399 22.5 22.6666 22.5H1.33325C1.05992 22.5 0.833252 22.2733 0.833252 22C0.833252 21.7267 1.05992 21.5 1.33325 21.5H22.6666C22.9399 21.5 23.1666 21.7267 23.1666 22ZM3.48659 18.7533V14.7533C3.48659 14.62 3.53992 14.4933 3.63325 14.4L17.1866 0.84C17.6399 0.386667 18.3799 0.386667 18.8333 0.84L21.8933 3.9C22.3466 4.35333 22.3466 5.09333 21.8933 5.54667L8.33992 19.1067C8.24659 19.2 8.11992 19.2533 7.98659 19.2533H3.98659C3.71325 19.2533 3.48659 19.0267 3.48659 18.7533ZM16.3666 3.08L19.6599 6.37333L21.1933 4.84C21.2599 4.77333 21.2599 4.66667 21.1933 4.60667L18.1333 1.54667C18.0666 1.48 17.9599 1.48 17.8999 1.54667L16.3666 3.08ZM4.48659 18.2533H7.77992L18.9466 7.08L15.6533 3.78667L4.48659 14.96V18.2533Z"
        fill="#FDFDFD"
      />
    </Svg>
  );
};
