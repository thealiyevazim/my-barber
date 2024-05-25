import React, { useMemo } from "react";
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { AppText } from "~components/AppText";
import { colors, windowWidth } from "~utils";

type Props = {
  isLoading?: boolean;
  title: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  disabled?: boolean;
};

export const AppButton: React.FC<Props> = ({
  disabled = false,
  isLoading,
  title,
  style,
  onPress,
}) => {
  const buttonColor = useMemo(() => {
    if (disabled) {
      return colors.appGray;
    } else return colors.appBlack;
  }, [disabled]);

  const buttonContext = useMemo(() => {
    if (isLoading) {
      return <ActivityIndicator size="small" color={colors.white} />;
    } else {
      return (
        <AppText semibold style={styles.title}>
          {title}
        </AppText>
      );
    }
  }, [disabled, isLoading, title]);

  const handlePress = () => {
    if (isLoading) {
      return;
    }
    onPress?.();
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[style, { backgroundColor: buttonColor }, styles.container]}
      onPress={handlePress}
      activeOpacity={isLoading || disabled ? 1 : 0.8}
    >
      {buttonContext}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 8,
    width: windowWidth - 32,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  title: { color: colors.white, fontSize: 20 },
});
