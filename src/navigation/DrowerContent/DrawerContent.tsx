import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import Home from "~screens/DropDownScreen/Home/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
import HomeIcon from "~assets/icons/HomeIcon";
import CalendarIcon from "~assets/icons/CalendarIcon";
import UserICon from "~assets/icons/UserIcon";
import { palette } from "~utils/theme";
import { BookingScreen } from "~screens/DropDownScreen/BookingScreen";
import { ClientProfileData } from "~screens";

const Tab = createBottomTabNavigator();

const tabBarData = [
  {
    label: 'Booking',
    icon: CalendarIcon
  },
  {
    label: 'Home',
    icon: HomeIcon
  },
  {
    label: 'Profile',
    icon: UserICon
  }
]

const NavigationIcon = ({ label, isFocused }: { label: string, isFocused: boolean }) => {

  const Icon = tabBarData.find(tabBar => tabBar.label === label) || {
    label: 'icon',
    icon: HomeIcon
  }

  return (
    <Icon.icon isFocused={isFocused} />
  )
};

function MyTabBar({ state, descriptors, navigation }: any) {
  return (
    <View style={{
      flexDirection: 'row',
      backgroundColor: palette.white,
      paddingHorizontal: 30,
      justifyContent: "space-between",
      paddingBottom: Platform.OS === 'ios' ? 10 : 0,
    }}>
      {state.routes.map((route: { key: string | number; name: any; }, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              padding: 15,
              alignItems: 'center',
              gap: 6
            }}
          >
            <NavigationIcon label={label} isFocused={isFocused} />
            <Text style={{ color: isFocused ? palette.black : palette.totalGray }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function DrawerContent() {

  return (
    <Tab.Navigator sceneContainerStyle={{ backgroundColor: palette.backWhite }}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true
      }}
      tabBar={(props: any) => <MyTabBar {...props} />}>
      <Tab.Screen name={tabBarData[0].label} component={BookingScreen} />
      <Tab.Screen name={tabBarData[1].label} component={Home} />
      <Tab.Screen name={tabBarData[2].label} component={ClientProfileData} />
    </Tab.Navigator>
  );
}
