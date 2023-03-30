import React from "react"

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menu from "../Screens/Menu";
import { Ionicons } from '@expo/vector-icons';
  import { COLORS } from "../constant/theme";
import OnBoardingOne from "../Screens/OnBoardingOne";
import OnBoardingThree from "../Screens/OnBoardingThree";
import Verification from "../Screens/Verification";
import OnBoardingTwo from "../Screens/OnBoardingTwo";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const  TabNav = (navigation) =>{
  return (
     <Tab.Navigator
     initialRouteName="Home"
     screenOptions={{
    activeTintColor: COLORS.green,
    inactiveTintColor: COLORS.gray,
    tabBarActiveTintColor: COLORS.black,
    tabBarInactiveTintColor: COLORS.black,
  }}
     >
       
      <Tab.Screen name="Home" component={Menu} options={{
      // title: "Home",
      
      headerShown: false,
      tabBarIcon: ({focused}) => <Ionicons name="home-outline" size={30} color={focused? COLORS.green :COLORS.gray} />   }}
      />
      <Tab.Screen name="Favourite" component={OnBoardingOne} options={{
      // title: "Home",
      headerShown: false,
      tabBarIcon: ({focused}) => <Ionicons name="ios-heart-outline" size={30} color={focused? COLORS.green :COLORS.gray}/>   }}
      />
      <Tab.Screen name="Cart" component={OnBoardingThree} options={{
      // title: "Home",
      headerShown: false,
      tabBarIcon: ({focused}) => <Ionicons name="cart-outline" size={30} color={focused? COLORS.green :COLORS.gray}/>     }}
      />
      <Tab.Screen name="Profile" component={OnBoardingTwo} options={{
      // title: "Home",
      headerShown: false,
      tabBarIcon: ({focused}) => <MaterialCommunityIcons name="account-circle-outline" size={30} color={focused? COLORS.green :COLORS.gray}/> }}
      />
    </Tab.Navigator>
  );
}

export default TabNav
