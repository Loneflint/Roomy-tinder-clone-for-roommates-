import React from "react";
import { View, Text, StyleSheet, ScrollView, Button, Alert } from "react-native";


const Profile = () => {
    return (
      <ScrollView style={styles.Chat}>
        <Text>Chat Page</Text>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    Chat: {
      marginLeft: 20,
      marginRight: 20,
      height: 500,
      textAlign: "center",
      backgroundColor: "lime",
      borderRadius: 10,
    },
  });
  
  export default Profile;