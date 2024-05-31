import React, { NamedExoticComponent, ReactElement, memo } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ActiveIconProps } from "~shared/types/icon";

interface Props {
  active: boolean;
  count?: number;
  icon: NamedExoticComponent<ActiveIconProps>;
  onPress: () => void;
}

export const TabsBarItem = memo(function TabsBarItem({
  active,
  icon,
  onPress,
}: Props): ReactElement {
  const Icon = icon;

  const insets = useSafeAreaInsets();
  const bottom = insets.bottom || 10;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.root, { paddingBottom: bottom }]}
      activeOpacity={0.7}
      hitSlop={15}
    >
      <Icon active={active} />
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    flexShrink: 1,
    paddingTop: 4,
    position: "relative",
  },
});
