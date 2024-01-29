import { StyleSheet,  View,Image } from 'react-native'
import React, { useCallback } from "react";
import { palette } from "~utils/theme";
import { Container, Text, Button, Input } from "~components";
import { AuthenticationNavigationProp } from "~navigation";
import { selectedUserTypeSelector, setUserType, useAppDispatch, useAppSelector } from "~store";
import { useNavigation } from "@react-navigation/native";
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerContent from '~navigation/DrowerContent/DrawerContent';


const ClientScreen = () => {

  return (

   <Container 
   flex={1}
   alignItems={"center"}
  //  backgroundColor={"mainBlue"}
   justifyContent={"center"}
   >
    {/* <DrawerContent/> */}
   </Container>
     
  )
}

export default ClientScreen

const styles = StyleSheet.create({})