import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { useCallback, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { CalendarIcon, ProfileIcon } from '~assets/icons';
import { Routes, RoutesType } from '../navigationRoutes';
import { TABS_BAR_HEIGHT, colors } from '~utils';
import { TabsBarItem } from './TabBarItem';

const RoutesWithTabBar: RoutesType[] = [
  Routes.barberCalendarScreen,
  Routes.profileScreen,
];

function AppTabsBarContent({ navigation, state }: BottomTabBarProps) {
  const currentRoute = state.routeNames[state.index] as RoutesType;
  const isNeedToShow = RoutesWithTabBar.includes(currentRoute);

  const heightAnimated = useSharedValue(TABS_BAR_HEIGHT);

  const handlePress = useCallback(
    (route: string) => () => navigation.navigate(route),
    [navigation],
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      maxHeight: heightAnimated.value,
    };
  }, []);

  useEffect(() => {
    heightAnimated.value = withTiming(isNeedToShow ? TABS_BAR_HEIGHT : 0);
  }, [isNeedToShow, heightAnimated]);

  return (
    <Animated.View style={[styles.root, animatedStyle]}>
      <TabsBarItem
        icon={CalendarIcon}
        onPress={handlePress(Routes.barberCalendarScreen)}
        active={currentRoute === Routes.barberCalendarScreen}
      />

      <TabsBarItem
        icon={ProfileIcon}
        onPress={handlePress(Routes.profileScreen)}
        active={currentRoute === Routes.profileScreen}
      />
    </Animated.View>
  );
}

export const renderTabsBarContent = (props: BottomTabBarProps) => (
  <AppTabsBarContent {...props} />
);

const styles = StyleSheet.create({
  root: {
    alignItems: 'flex-start',
    backgroundColor: colors.white,
    borderTopColor: colors.lightGray,
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    overflow: 'hidden',
    paddingBottom: 10,
    paddingTop: 10,
  },
});
