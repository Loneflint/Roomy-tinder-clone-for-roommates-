import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Footer = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>I am Footer</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    header: {
      marginTop: 10,
      padding: 5,
      justifyContent: 'center',
    },
    text: {
      height: 50,
      fontSize: 24,
      textAlign: 'center',
      borderRadius: 50,
    },
  });
  
export default Footer;