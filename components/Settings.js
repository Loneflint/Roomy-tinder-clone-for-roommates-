import React from "react";
import { View, Text, StyleSheet, ScrollView, Button, Alert } from "react-native";


const Settings = () => {
    return (
      <ScrollView style={styles.Feed}>
        <Text>Settings Page</Text>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    Feed: {
      marginLeft: 20,
      marginRight: 20,
      height: 500,
      textAlign: "center",
      backgroundColor: "blue",
      borderRadius: 10,
    },
  });
  
  export default Settings;