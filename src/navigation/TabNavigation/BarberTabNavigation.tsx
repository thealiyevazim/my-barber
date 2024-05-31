import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { PixelRatio, StyleSheet } from "react-native";
import { BarberNavigationRoutes } from "~navigation/config";
import { colors } from "~utils";
import { Routes } from "../navigationRoutes";
import { renderTabsBarContent } from "./BarberTabBarContent";

const tabBarHeight = PixelRatio.roundToNearestPixel(28 * PixelRatio.get());

const Tab = createBottomTabNavigator();

export const BarberTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      backBehavior="history"
      tabBar={renderTabsBarContent}
      initialRouteName={Routes.dashboardScreen}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.appBlack,
        tabBarInactiveTintColor: colors.appGray,
        tabBarStyle: styles.container,
      }}
    >
      {BarberNavigationRoutes.map(({ component, name }) => {
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
