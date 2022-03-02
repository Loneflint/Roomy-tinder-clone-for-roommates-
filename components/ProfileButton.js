import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileButton = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile');
        }}
      >
        <Image
          source={require("../assets/placeholderc.png")}
          style={{
            width: 40,
            height: 40,
            borderRadius: 40 / 2,
            marginLeft: -70,
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
export default ProfileButton;
