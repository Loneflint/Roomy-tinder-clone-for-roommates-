import React from "react";
import { View, Text, StyleSheet, Button, Alert, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Animated } from "react-native";
import Profile from "./ProfileButton.js";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={ header }>
      <Profile/>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
});
export default Header;
