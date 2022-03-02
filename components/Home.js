import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {View, Text} from 'react-native';
import Feed from './Feed'
import Header from './Header.js'
import Footer from './Footer.js'


const Home = (Stack) => {
  return (
    <View>
      <Feed/>
    </View>
   
  );
};

export default Home;