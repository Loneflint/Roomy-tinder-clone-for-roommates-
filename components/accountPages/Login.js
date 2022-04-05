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
import {postUserLogin} from '../../axios/axios.js'


const Login = ({ value, setValue, placeholder }) => {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const VerifyEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const onLoginPressed = (data) => {
    // console.log()
    postUserLogin({data})
    navigation.navigate("BottomNav");
  };
  const onSignUpPressed = () => {
    navigation.navigate("Signup");
  }
  return (
    <View style={styles.Login}>
      <Text style={styles.Header}>Login Page</Text>
      <View style={styles.Lcontainer}>
        <Controller
          rules={{
            required: "Email Required",
            pattern: { value: VerifyEmail, message: "Invalid Email" },
          }}
          control={control}
          name="email"
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
                placeholder="Email"
              />
              {error && (
                <Text style={{ color: "red", alignSelf: "stretch" }}>
                  {error.message || "Error"}
                </Text>
              )}
            </>
          )}
        />

        <Controller
          rules={{
            required: "Password Required",
            minLength: {
              value: 7,
              message: "Password must be at least 7 characters",
            },
          }}
          control={control}
          name="password"
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <>
              <TextInput
                secureTextEntry={true}
                onChangeText={onChange}
                onBlur={onBlur}
                style={[
                  styles.Input,
                  { borderColor: error ? "red" : "#e8e8e8" },
                ]}
                placeholder="Password"
              />
              {error && (
                <Text style={{ color: "red", alignSelf: "stretch" }}>
                  {error.message || "Error"}
                </Text>
              )}
            </>
          )}
        />
        <TouchableOpacity onPress={handleSubmit(onLoginPressed)}>
          <Text style={styles.Input}>Login</Text>
        </TouchableOpacity>
        

        {/* implement later */}

        {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate("ForgotPassword");
          }}
        >
          <Text style={styles.Input}>forgot password</Text>
        </TouchableOpacity> */}

        <TouchableOpacity onPress={onSignUpPressed}>
          <Text style={styles.Input}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
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

export default Login;
