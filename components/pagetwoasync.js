import React, { useState, useEffect }  from 'react';
import { SafeAreaView, ScrollView, View, Button,
         FlatList, StyleSheet, Text, TextInput, StatusBar,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';



const SongList = (props) => {
  const [textOne,setTextOne] = useState("")
  const [textTwo,setTextTwo] = useState("")
  const [textThree,setTextThree] = useState("")
  const [song,setSong]= useState([])

  useEffect(() => {getData()}
           ,[])


const getData = async () => {
     try {
       // the '@profile_info' can be any string
       const jsonValue = await AsyncStorage.getItem('@SongList')
       let data = null
       if (jsonValue!=null) {
         data = JSON.parse(jsonValue)
         setSong(data)
         console.log('just set song name, artist and genre')
       } else {
         console.log('just read a null value from Storage')
         setSong([])
         setTextOne("")
         setTextTwo("")
         setTextThree("")
       }


     } catch(e) {
       console.log("error in getData ")
       console.dir(e)
       // error reading value
     }
}
const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@SongList', jsonValue)
          console.log('just stored '+jsonValue)
        } catch (e) {
          console.log("error in storeData ")
          console.dir(e)
          // saving error
        }
}

const clearAll = async () => {
      try {
        console.log('in clearData')
        await AsyncStorage.clear()
      } catch(e) {
        console.log("error in clearData ")
        console.dir(e)
        // clear error
      }
}

const renderSong = ({item}) => {
  return (
    <View style={styles.pomodoro}>
         <Text style={styles.textcolor}> song: {item.song}  </Text>
         <Text style={styles.textcolor}> artist: {item.artist} </Text>
         <Text style={styles.textcolor}> genre: {item.genre} </Text>
    </View>
  )
}


let debug=false
const debugView =
  (<View>
    <Text style={styles.headerText}>
      DEBUGGING INFO
    </Text>
    <Text>
       song is ({textOne})
    </Text>
    <Text>
       artist is ({textTwo})
    </Text>
    <Text>
       genre is ({textThree})
    </Text>
    <Text>
       songList is {JSON.stringify(song)}
    </Text>
</View>);

  return (
    <View style={styles.container}>

      <Text style={styles.textcolorHeader}> Playlist </Text>
      <View style={{flexDirection:'column'}}>
        <Text style={styles.textcolor}> song </Text>
        <TextInput
          style={{height: 40, color: '#fff'}}
          placeholder="song name"
          onChangeText={text => {
               setTextOne(text);
             }}
          defaultValue={"rename me"}
          value = {textOne}
        />
        <Text style={styles.textcolor}> artist </Text>
        <TextInput
          style={{height: 40, color: '#fff'}}
          placeholder="artist name"
          onChangeText={text => {
               setTextTwo(text);
             }}
          defaultValue={"rename me"}
          value = {textTwo}
        />
        <Text style={styles.textcolor}> genre </Text>
        <TextInput
          style={{height: 40, color: '#fff'}}
          placeholder="genre"
          onChangeText={text => {
               setTextThree(text);
             }}
          defaultValue={"rename me"}
          value = {textThree}
        />
        <Button
             title={"Add Song"}
             color="#000"
             onPress = {() => {
               const newSong =
                 song.concat(
                   {'song': textOne,
                    'artist': textTwo,
                    'genre': textThree,
                    'completed':new Date(),
                 })
               setSong(newSong)
               storeData(newSong)
               setTextOne("")
               setTextTwo("")
               setTextThree("")
           }}
           />
           <Button
                 title={"Clear Playlist"}
                 color="gray"
                 onPress = {() => {
                   clearAll()
                   setSong([])
                 }}
                 />
        <FlatList
          data={song}
          renderItem={renderSong}
          keyExtractor={item => item.song}
          extraData={song}
        />
      </View>
      <Text style={styles.textcolor}>
         text is ({textOne}), ({textTwo}), ({textThree})
      </Text>
      <Text style={styles.textcolorInput}>
         {JSON.stringify(song)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#013220',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput:{
    margin:20,
    fontSize:20
  },
  header: {
    fontSize:40,
    color:'blue'
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textcolor:{
    color: '#e9cccb',
  },
  textcolorInput:{
    color: '#fff',
  },
  textcolorHeader:{
    textDecorationLine: 'underline',
    color: '#fff',
    fontSize: 20,
  },
  pomodoro:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  todoItem:{
    justifyContent:'center',
  },
});

export default SongList;
