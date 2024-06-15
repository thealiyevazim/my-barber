import { Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useCallback } from "react";
import { PixelRatio, StyleSheet } from "react-native";
import { CalendarScreen, DashboardScreen, ProfileScreen } from "~screens";
import { colors } from "~utils";
import { Routes } from "../navigationRoutes";

const defaultIconSize = 28;
const tabBarHeight = PixelRatio.roundToNearestPixel(28 * PixelRatio.get());

const Tab = createBottomTabNavigator();

export const ClientTabNavigator: React.FC = () => {
  const renderTabIcon = useCallback((name: string) => {
    return (props: { focused: boolean }) => {
      const { focused } = props;
      return (
        <Entypo
          name={name as "home"}
          size={defaultIconSize}
          suppressHighlighting
          color={focused ? colors.appBlack : colors.iconGray}
        />
      );
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
      <Tab.Screen
        name={Routes.calendarScreen}
        component={CalendarScreen}
        options={{
          tabBarIcon: renderTabIcon("calendar"),
          tabBarShowLabel: false,
        }}
      />

      <Tab.Screen
        name={Routes.dashboardScreen}
        component={DashboardScreen}
        options={{
          tabBarIcon: renderTabIcon("home"),
          tabBarShowLabel: false,
        }}
      />

      <Tab.Screen
        name={Routes.profileScreen}
        component={ProfileScreen}
        options={{
          tabBarIcon: renderTabIcon("user"),
          tabBarShowLabel: false,
        }}
      />
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
