import React from "react";
import { View, Text, StyleSheet, ScrollView, Button, Alert } from "react-native";

const Feed = () => {
  return (
    <ScrollView style={styles.Feed}>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Feed: {
    marginLeft: 20,
    marginRight: 20,
    height: 500,
    textAlign: "center",
    backgroundColor: "lightgrey",
    borderRadius: 10,
  },
});

export default Feed;
