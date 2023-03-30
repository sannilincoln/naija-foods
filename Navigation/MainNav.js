import React from "react"

import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingOne from '../Screens/OnBoardingOne';
import { COLORS } from "../constant/theme";
import OnBoardingTwo from "../Screens/OnBoardingTwo";
import OnBoardingThree from "../Screens/OnBoardingThree";
import SignUp from "../Screens/SignUp";
import Verification from "../Screens/Verification";
import SignIn from "../Screens/SignIn";
import Menu from "../Screens/Menu";
import TabNav from "./TabNav";

const Stack = createStackNavigator();

const  MyStack = (navigation) =>{
  return (
    <Stack.Navigator>
      <Stack.Screen name="Onboarding One" component={OnBoardingOne} options={{headerShown:false}}/>
      <Stack.Screen name="Onboarding Two" component={OnBoardingTwo} options={{headerShown:false}}/>
      <Stack.Screen name="Onboarding Three" component={OnBoardingThree} options={{headerShown:false}}/>
      <Stack.Screen name="Sign Up" component={SignUp} options={{headerShown:false}}/>
      <Stack.Screen name="Verification" component={Verification} options={{headerShown:false}}/>
      <Stack.Screen name="Sign In" component={SignIn} options={{headerShown:false}}/>
      <Stack.Screen name="Menu" component={TabNav} options={{headerShown:false}}/>
      
    </Stack.Navigator>
  );
}

export default MyStack
