import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {View, Text, Image} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Chat from "./Chat"
import Calendar from "./Calendar"
import Home from "./Home"
import Post from "./Post"


const Tab = createBottomTabNavigator();

const BottomNav = (Stack) => {
  return (
    <Tab.Navigator initialRouteName={"Home"} screenOptions={{ headerShown: false, tabBarShowLabel: false}}>
      
      <Tab.Screen name="Home" component={Home}
       options={{tabBarIcon: ({}) => (
        <Image
        source={require("../assets/Home1c.png")}
        style={{
          width: 40,
          height: 40,
          borderRadius: 40 / 2,
          marginLeft: 0,
        }}
      />
      )
    }} />
    <Tab.Screen name="Post" component={Post} 
      options={{tabBarIcon: ({}) => (
          <Image
          source={require("../assets/Postc.png")}
          style={{
            width: 40,
            height: 40,
            borderRadius: 40 / 2,
            marginLeft: 0,
          }}
        />
        )
      }}/>
      <Tab.Screen name="Calendar" component={Calendar}
       options={{tabBarIcon: ({}) => (
        <Image
        source={require("../assets/Calendarc.png")}
        style={{
          width: 40,
          height: 40,
          borderRadius: 40 / 2,
          marginLeft: 0,
        }}
      />
      )
    }} />
    </Tab.Navigator>
  );
};

export default BottomNav;