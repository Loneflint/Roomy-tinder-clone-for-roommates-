import createBottomTabNavigator from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const BottomNav = () => {
  const Tab = createBottomTabNavigator();
  return (
    
      <Tab.Navigator>
        <Tab.Screen name="Footer" component={Footer} />
        <Tab.Screen name="Header" component={Header} />
      </Tab.Navigator>
    
  );
};

export default BottomNav;
