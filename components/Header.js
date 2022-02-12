import React from "react";
import { View, Text, StyleSheet, Button, Alert, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Animated } from "react-native";
import Profile from "./ProfileButton.js";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flexDirection: "row" }}>
      <Profile/>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    marginTop: 0,
    marginBottom: 0,
    padding: 10,
    justifyContent: "center",
  },
  text: {
    height: 50,
    fontSize: 24,
    textAlign: "center",
    borderRadius: 50,
  },
  button: {
    fex: 1,
    height: 20,
    width: 20,
    backgroundColor: "red",
  },
  buttonbox: {
    flex: 1,
  },
});
export default Header;
