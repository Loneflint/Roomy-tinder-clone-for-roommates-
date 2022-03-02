import React from "react";
import { View, Text, StyleSheet, ScrollView, Button, Alert } from "react-native";


const Profile = () => {
    return (
      <ScrollView style={styles.Calendar}>
        <Text>Calendar Page</Text>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    Calendar: {
      marginLeft: 20,
      marginRight: 20,
      height: 500,
      textAlign: "center",
      backgroundColor: "pink",
      borderRadius: 10,
    },
  });
  
  export default Profile;