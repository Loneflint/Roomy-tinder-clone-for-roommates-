import React, {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./components/StackNavigator.js";
import AuthProvider from "./hooks/useAuth.js";
import AuthContext from "./components/AuthContext"



const App = () => {
  const [auth, setAuth] = useState(true)
  return (
    <NavigationContainer>
      {/* <AuthContext.Provider value={auth, setAuth}> */}
        <StackNavigator />
      {/* </AuthContext.Provider> */}
    </NavigationContainer>
  );
};

export default App;
