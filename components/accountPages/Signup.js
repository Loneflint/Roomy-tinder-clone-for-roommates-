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
import {getUser} from '../../axios/axios.js'

const VerifyEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Signup = () => {
  const { control, handleSubmit, watch ,formState: {errors}} = useForm();
  const navigation = useNavigation();
  const Pwd = watch("Password");

  const onSignUpPressed = (data) => {
    console.warn("hello");
    console.warn({ data });
    getUser()
    navigation.navigate("VerifyEmail");
  };

  return (
    <ScrollView style={styles.Login}>
      <Text style={styles.Header}>SignUp Page</Text>
      <View style={styles.Lcontainer}>
        <Controller
          rules={{
            required: "Username Required",
          }}
          control={control}
          name="username"
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
                placeholder="username"
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
              value: 8,
              message: "Password must be at least 8 characters",
            },
          }}
          control={control}
          name="Password"
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
        <Controller
          rules={{
            required: "Must Repeat Password",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            validate: (value) => value === Pwd || `passwords Don't Match`,
          }}
          control={control}
          name="Password Repaeat"
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
                placeholder="Repeat Password"
              />
              {error && (
                <Text style={{ color: "red", alignSelf: "stretch" }}>
                  {error.message || "Error"}
                </Text>
              )}
            </>
          )}
        />
        <TouchableOpacity onPress={handleSubmit(onSignUpPressed)}>
          <Text style={styles.Input}>Sign Up</Text>
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

export default Signup;
