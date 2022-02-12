import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Settings from "./components/Settings.js";
import Feed from "./components/Feed.js";
import ProfileButton from "./components/ProfileButton.js";
import SettingsButton from "./components/SettingsButton.js";
import Profile from "./components/Profile.js";
import BottomNav from "./components/BottomNav.js";

const App = () => {
  const Stack = createNativeStackNavigator();
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: () => <SettingsButton />,
            headerRight: () => <ProfileButton />,
          }}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default App;
