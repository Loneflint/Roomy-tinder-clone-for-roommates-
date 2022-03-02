import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import StackNavigator from "./components/StackNavigator.js";
import AuthProvider from './hooks/useAuth.js'




const App = () => {

  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
};

export default App;
