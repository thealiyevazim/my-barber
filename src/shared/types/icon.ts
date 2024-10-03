import { StyleProp, ViewStyle } from "react-native";
import { ColorsType } from "~utils";

export interface BaseIconProps {
  color?: ColorsType | string;
  secondColor?: ColorsType;
  size?: number;
  style?: StyleProp<ViewStyle>;
}

export interface ActiveIconProps extends BaseIconProps {
  active?: boolean;
  activeColor?: ColorsType;
}
