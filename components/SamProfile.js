import React from 'react';
import {Button, Text, StyleSheet, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function SamProfile({route,navigation}) {
  return (
    <View style={styles.container}>
    <Button title="Home"
        onPress={() => navigation.navigate('Home')}
        color= '#000'
        backgroundColor= '#d8d4e3'
        />
      <Text style={styles.headerText}> Samantha's Profile </Text>
      <Text style={{color: '#fff'}}> I'm Samantha, I'm going into my junior year. English and possibly CS major, pre-law. I like coffee.
      </Text>

      <Image
        style= {{ width: 200, height: 200}}
        source=  {require('../assets/sampicture.jpg')}
        alt = "sam"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#013220',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 40,
    color: '#e9cccb',
  },

});
