import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useCallback } from "react";
import { PixelRatio, StyleSheet } from "react-native";
import { CalendarIcon, ProfileIcon } from "~assets/icons";
import { BarberNavigationRoutes } from "~navigation/config";
import { colors } from "~utils";
import { Routes } from "../navigationRoutes";

const tabBarHeight = PixelRatio.roundToNearestPixel(28 * PixelRatio.get());

const Tab = createBottomTabNavigator();

export const BarberTabNavigator: React.FC = () => {
  const renderTabIcon = useCallback((name: string) => {
    return (props: { focused: boolean }) => {
      const { focused } = props;
      const iconColor = focused ? colors.appBlack : colors.appGray;

      switch (name) {
        case Routes.barberCalendarScreen:
          return <CalendarIcon fill={iconColor} />;
        case Routes.profileScreen:
          return <ProfileIcon fill={iconColor} />;

        default:
          break;
      }
    };
  }, []);

  return (
    <Tab.Navigator
      initialRouteName={Routes.dashboardScreen}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.appBlack,
        tabBarInactiveTintColor: colors.appGray,
        tabBarStyle: styles.container,
      }}
    >
      {BarberNavigationRoutes.map(({ component, name }) => {
        return (
          <Tab.Screen
            key={name}
            name={name}
            component={component}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: renderTabIcon(name),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: tabBarHeight,
    borderTopColor: colors.appGray,
  },
});
