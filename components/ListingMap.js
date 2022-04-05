import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import Room from '../assets/room.jpg'

const ListingMap = () => {
  const Listing = [
    {
      key: '1',
      img: Room,
      desc: 'Looking for a roommate. close to the college. pets are allowed, but no smoking  ',
      address: 'Scottsbluff Nebraska',
      price: '500 a month',
      pets: '',
      smoking: '',
    },
  ];

  const list = () => {
    return Listing.map((element) => {
      return (
        <View key={element.key} style={{margin: 10}}>
          <Image
           source={element.img}
           style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          width: 370,
          height: 325,
          borderRadius: 10,
          marginLeft: -10,
          marginTop: -10
        }}
      />
      <Text style={styles.Text}></Text>
      <Text style={styles.Text}>price</Text>
      <Text style={styles.Text}>{element.price}</Text>
      <Text style={styles.Text}></Text>
      <Text style={styles.Text}>Address</Text>
      <Text style={styles.Text}>{element.address}</Text>
      <Text style={styles.Text}></Text>
      <Text style={styles.Text}>{element.desc}</Text>
        </View>
      );
    });
  };

  return <View>{list()}</View>;
};


const styles = StyleSheet.create({
  Text: {
    textAlign: "center",
  },
});

export default ListingMap;