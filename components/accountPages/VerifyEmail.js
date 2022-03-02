import {
    TouchableOpacity,
    Image,
    View,
    Text,
    StyleSheet,
    ScrollView,
    Button,
    Alert,
    TextInput,
  } from "react-native";
import React , { useState } from 'react'
import { useNavigation } from "@react-navigation/native";


const VerifyEmail = () => { 
const [code, setCode] = useState("");
const navigation = useNavigation();


return (
  <ScrollView style={styles.Login}>
    <Text style={styles.Header}>Email Verification Page</Text>
    <View style={styles.Lcontainer}>
      <TextInput
        value={code}
        onChangeText={setCode}
        style={styles.Input}
        placeholder="Enter your confirmation code here"
      />
      <TouchableOpacity
      
      onPress={() => {
        navigation.navigate("Login");
      }}
    >
        <Text style={styles.Input}>Confirm</Text>
    </TouchableOpacity>
    <TouchableOpacity
      
      onPress={() => {
        console.warn("");
      }}
    >
        <Text style={styles.Input}>Resend Code</Text>
    </TouchableOpacity>
    </View>
  </ScrollView>
);
};

const styles = StyleSheet.create({
Login: {
  flex: 1,
  marginTop: 25,
  marginLeft: 20,
  marginRight: 20,
  marginBottom: 25,
  backgroundColor: "#0FEFD1",
  borderRadius: 10,
  paddingHorizontal: 20,
},
Header: {
  marginTop: 25,
  textAlign: "center",
},
Input: {
  marginBottom: 20,
  marginTop: 20,
  textAlign: "center",
  backgroundColor: "#ffffff",
  borderRadius: 10,
},
Lcontainer: {
  textAlign: "center",
  width: "100%",
  justifyContent: "space-evenly",
  paddingHorizontal: 0,
  marginTop: 70,
},
});

export default VerifyEmail