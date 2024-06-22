import { Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useCallback } from "react";
import { PixelRatio, StyleSheet } from "react-native";
import { CalendarScreen, DashboardScreen, ProfileScreen } from "~screens";
import { colors } from "~utils";
import { Routes } from "../navigationRoutes";
import { ClientNavigationRoutes } from "~navigation/config";
import { renderClientTabsBarContent } from "./ClientTabBarContent";

const defaultIconSize = 28;
const tabBarHeight = PixelRatio.roundToNearestPixel(28 * PixelRatio.get());

const Tab = createBottomTabNavigator();

export const ClientTabNavigator: React.FC = () => {

  return (
    <Tab.Navigator
      backBehavior="history"
      tabBar={renderClientTabsBarContent}
      initialRouteName={Routes.dashboardScreen}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.appBlack,
        tabBarInactiveTintColor: colors.appGray,
        tabBarStyle: styles.container,
      }}
    >
      {ClientNavigationRoutes.map(({ component, name }) => {
        return <Tab.Screen key={name} name={name} component={component} />;
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
