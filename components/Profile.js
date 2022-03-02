import React from "react";
import { View, Text, StyleSheet, ScrollView, Button, Alert } from "react-native";


const Profile = () => {
    return (
      <View style={styles.Feed}>
        <Text>Profile Page</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    Feed: {
      flex: 1,
      marginTop: 25,
      marginLeft: 20,
      marginRight: 20,
      height: 500,
      textAlign: 'center',
      backgroundColor: "#0FEFD1",
      borderRadius: 10,
    },
  });
  
  export default Profile;