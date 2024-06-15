import { StyleProp, ViewStyle } from 'react-native';

export interface IIconProps {
  color?: string;
  size?: number;
  sizeType?: 'width' | 'height';
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  pressableStyle?: StyleProp<ViewStyle>;
  position?: 'topLeft' | 'bottomLeft' | 'topRight' | 'bottomRight';
  focused?: boolean;
  copied?: boolean;
}
