import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Settings from "./Settings.js";
import ProfileButton from "./ProfileButton.js";
import SettingsButton from "./SettingsButton.js";
import Profile from "./Profile.js";
import BottomNav from "./BottomNav.js";
import Login from "./accountPages/Login.js";
import Signup from "./accountPages/Signup.js";
import VerifyEmail from "./accountPages/VerifyEmail.js";
import ForgotPassword from "./accountPages/ForgotPassword";
import ResetPassword from "./accountPages/ResetPassword";
import VerifyCode from "./accountPages/VerifyCode";
import ResetSuccess from "./accountPages/ResetSuccess";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const user = false;
  
    return (
      <>
        <Stack.Navigator>
          {user ? (
            <>
            <Stack.Screen
            name="BottomNav"
            component={BottomNav}
            options={{
              headerTitle: () => <SettingsButton />,
              headerRight: () => <ProfileButton />,
              headerStyle: {
                backgroundColor: 'white',
              },
            }}
            
          />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Settings" component={Settings} />
          </>
          ) : (
              <>
            <Stack.Screen name="Login" component={Login}  options={{headerShown: false}}/>
            <Stack.Screen name="Signup" component={Signup}  options={{headerShown: false}}/>
            <Stack.Screen name="VerifyEmail" component={VerifyEmail} options={{headerShown: false}}/>
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown: false}}/>
            <Stack.Screen name="ResetPassword" component={ResetPassword} options={{headerShown: false}}/>
            <Stack.Screen name="VerifyCode" component={VerifyCode} options={{headerShown: false}}/>
            <Stack.Screen name="ResetSuccess" component={ResetSuccess} options={{headerShown: false}}/>
            </>
          )}
          
        </Stack.Navigator>
    
      </>
    );
  };
  
  export default StackNavigator;