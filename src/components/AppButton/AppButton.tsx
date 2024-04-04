import React, { useMemo } from "react";
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  StyleSheet,
} from "react-native";
import { AppText } from "~components/AppText";
import { colors, windowWidth } from "~utils";

type Props = PressableProps & {
  isLoading?: boolean;
  title: string;
};

export const AppButton: React.FC<Props> = ({
  disabled,
  isLoading,
  title,
  ...otherProps
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

  return (
    <Pressable
      disabled={disabled}
      style={[{ backgroundColor: buttonColor }, styles.container]}
      {...otherProps}
    >
      {buttonContext}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 8,
    width: windowWidth - 32,
    alignItems: "center",
    justifyContent: "center",
  },
  title: { color: colors.white, fontSize: 20 },
});
