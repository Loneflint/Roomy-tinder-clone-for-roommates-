import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  Alert,
  TextInput,
  Input,
  Form,
  Switch,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { postListing } from "../axios/axios.js";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

const Post = () => {
  const {
    control,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigation = useNavigation();

  const onPostListingPressed = (data) => {
    console.log(postListing({ data }));
    navigation.navigate("Home");
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);
  const [imageSource, setImageSource] = useState(null);


  const options = {
    title: "You can choose one image",
    mediaType: "photo",
    includeBase64: true,
    storageOptions: {
      skipBackup: true,
    },
  };

  const openPicker = () => {
    launchImageLibrary(options, (response) => {
      // Use launchImageLibrary to open image gallery
      // console.log('Response = ', response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        let source = {
          uri: "data:image/jpeg;base64," + response.assets[0].base64,
        };
        setValue("pic", response.assets[0].base64);
        setImageSource(source.uri);
      }
    });
  };

  return (
    <ScrollView style={styles.Login}>
      <Text style={styles.Header}>Add a post</Text>
      <Text style={styles.Header}></Text>
      <StatusBar barStyle="light-content" />
      <Image
        source={{ uri: imageSource }}
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          width: 100,
          height: 100,
        }}
      />
      <View style={styles.Lcontainer}>
        <Controller
          rules={{}}
          control={control}
          name="pic"
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <>
              <Button
                title="Image"
                style={[styles.Input]}
                onPress={openPicker}
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
            required: "Description Required",
          }}
          control={control}
          name="description"
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <>
              <TextInput
                placeholder="description"
                onChangeText={onChange}
                onBlur={onBlur}
                style={[
                  styles.Input,
                  { borderColor: error ? "red" : "#e8e8e8" },
                ]}
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
            required: "Address Required",
          }}
          control={control}
          name="address"
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <>
              <TextInput
                placeholder="address"
                onChangeText={onChange}
                onBlur={onBlur}
                style={[
                  styles.Input,
                  { borderColor: error ? "red" : "#e8e8e8" },
                ]}
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
            required: "Price Required",
          }}
          control={control}
          name="price"
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <>
              <TextInput
                placeholder="price"
                onChangeText={onChange}
                onBlur={onBlur}
                style={[
                  styles.Input,
                  { borderColor: error ? "red" : "#e8e8e8" },
                ]}
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
          control={control}
          name="pets"
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <>
              <Text style={{
                  textAlign: "center",
                  marginBottom: -25,
                  flex: 1,
                }}>Pets Allowed?</Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
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
          control={control}
          name="smoking"
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <>
              <Text
                style={{
                  textAlign: "center",
                  marginTop: 20,
                  marginBottom: -25,
                  flex: 1,
                }}
              >
                Smoking Allowed?
              </Text>
              <Switch
              style={{
                textAlign: "center",
                flex: 1,
              }}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch2}
                value={isEnabled2}
              />
              {error && (
                <Text style={{ color: "red", alignSelf: "stretch" }}>
                  {error.message || "Error"}
                </Text>
              )}
            </>
          )}
        />

        <TouchableOpacity onPress={handleSubmit(onPostListingPressed)}>
          <Text style={styles.Input}>Post Listing</Text>
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
    marginTop: 25,
  },
});

export default Post;
