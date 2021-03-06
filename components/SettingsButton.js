import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SettingsButton = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Settings');
        }}
      >
        <Image
          source={require("../assets/Settingsc.png")}
          style={{
            width: 65,
            height: 60,
            borderRadius: 40 / 2,
            marginLeft: 0,
          }}
        />
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 40,
    marginLeft: 10,
    borderRadius: 100,
    resizeMode: 'contain'
  },
});
export default SettingsButton;