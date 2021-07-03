import React from 'react';
import {Button, Text, StyleSheet, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function Goals ({route,navigation}){
  return(
    <View style={styles.container}>
    <Button title="Home"
        onPress={() => navigation.navigate('Home')}
        color= '#000'
        backgroundColor= '#d8d4e3'
        />
    <Text style={styles.goals}>
        Connect to Soundcloud or LastFm APIs. {"\n"}
        Better design.
    </Text>
    <Image
      style= {{ width: 468, height: 310}}
      source=  {{uri: 'https://i.pinimg.com/564x/29/f2/30/29f2302d98fd0b3c8924e540e3f3614a.jpg' }}
      alt = "sam"
    />
    </View>
  );
}





const styles = StyleSheet.create({
  goals:{
    backgroundColor: '#e0c4b0',
    padding: 20,
  },
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
