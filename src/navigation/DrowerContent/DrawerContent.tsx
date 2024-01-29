import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar
} from "react-native";
import React from "react";
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
// ----- ad all screen ---- //
import Chat from "~screens/DropDownScreen/Chat/Chat";
import HelpSupport from "~screens/DropDownScreen/HelpSupport/HelpSupport";
import { BarberProfileData } from "~screens/BarberProfileData";
import Home from "~screens/DropDownScreen/Home/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
// ------ Add SVG Images as a Components ------ //
import HomeIcon from "~assets/icons/HomeIcon";
import CalendarIcon from "~assets/icons/CalendarIcon";
import UserICon from "~assets/icons/UserIcon";
import { palette } from "~utils/theme";
import { spacing } from "@shopify/restyle";

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 88,
    backgroundColor:palette.white,
    tabBarLabelStyle: { fontSize: 16, fontWeight: "bold", color: "#fff" },
  },
};

export default function DrawerContent() {
  
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions} style={styles.tabBar}>
      <Tab.Screen
        name="Booking"
        component={Chat}
        options={{
          tabBarLabel: " ",
          tabBarIcon: ({ focused }) => (
            <View style={styles.containerText}>
              <CalendarIcon 
              // fill={focused ? "#14145C" : "#000000"} 
              />
              <Text style={styles.tabTextComponent}>Booking</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: " ",
          tabBarIcon: ({ focused }) => (
            <View style={styles.homeIconStyle}>
              <HomeIcon
                // fill={focused ? "#14145C" : "#000000"}
                style={styles.mainIcon}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={BarberProfileData}
        options={{
          tabBarLabel: " ",
          tabBarIcon: ({ focused }) => (
            <View style={styles.containerText}>
              <UserICon  />
              {/* fill={focused ? palette.white : "#000000"} */}
              <Text style={styles.tabTextComponent}>Profile</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({

  tabBar: {
    borderTopWidth: 1,
    borderTopColor: "rgba(20, 20, 92, 0.10)",
    shadowColor: "black",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.5,
    shadowRadius:5,
    elevation: 35,
  },
  screenStyle: {},
  homeIconStyle: {
    borderRadius: 6,
    borderWidth:1,
    borderColor:'rgba(20, 20, 92, 0.10)',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    top: Platform.OS == "ios" ? -32 : -38,
    width: Platform.OS == "ios" ? 40 : 45,
    height: Platform.OS == "ios" ? 40 : 45,
    backgroundColor: palette.backWhite,
    // margin : Platform.OS == "ios" ? 10 :10,
    shadowColor: palette.white,
    shadowOffset: {
      width: 45,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 15,
  },
  mainIcon: {},

  containerText: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap:5,
    elevation: 5,
    shadowColor: "rgba(20, 20, 92, 0.12)",
    shadowOffset: { width: -1, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  tabTextComponent: {
    color: palette.mainBlack,
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
  },
});
