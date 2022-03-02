import React, { useState } from "react";
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
  import { useNavigation } from "@react-navigation/native";
  import { useForm, Controller } from "react-hook-form";

const VerifyCode = () => { 
const navigation = useNavigation();
const { control, handleSubmit, watch ,formState: {errors}} = useForm();


const onVerifyPressed = (data) => {
  console.warn("hello");
  console.warn({ data });
  navigation.navigate("ResetPassword");
};

return (
  <ScrollView style={styles.Login}>
    <Text style={styles.Header}>Forgot Password Page</Text>
    <View style={styles.Lcontainer}>
    <Controller
          rules={{
            required: "Code Required",
          }}
          control={control}
          name="code"
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <>
              <TextInput
                onChangeText={onChange}
                onBlur={onBlur}
                style={[
                  styles.Input,
                  { borderColor: error ? "red" : "#e8e8e8" },
                ]}
                placeholder="Enter Code"
              />
              {error && (
                <Text style={{ color: "red", alignSelf: "stretch" }}>
                  {error.message || "Error"}
                </Text>
              )}
            </>
          )}
        />
       <TouchableOpacity onPress={handleSubmit(onVerifyPressed)}>
          <Text style={styles.Input}>Reset Password</Text>
        </TouchableOpacity>
      <TouchableOpacity
      
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
          <Text style={styles.Input}>Back to Login</Text>
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
  borderRadius: 5,
  borderColor: "#e8e8e8",
  borderWidth: 1,
},
Lcontainer: {
  textAlign: "center",
  width: "100%",
  justifyContent: "space-evenly",
  paddingHorizontal: 0,
  marginTop: 70,
},
});

export default VerifyCode


