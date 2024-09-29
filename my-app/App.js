import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,  } from 'react-native';
import Searchbar from './Components/SearchBar.jsx';
import Box1 from './Components/Box1.jsx';
import Box2 from './Components/Box2.jsx';
import Box3 from './Components/Box3.jsx';
import Box4 from './Components/Box4.jsx';


const App = () => {
  return (
    <View style={styles.container}>
      <Searchbar />
      <Text style={{ fontSize: 25, color: 'black', marginTop:10 , marginBottom:5}}>Let's find your doctor</Text>
      <View style={{ flexDirection: "row", justifyContent: 'space-between',marginBottom:5}}>
        <Box1 />
        <Box2 />
      </View>
      <View style={{flexDirection:"row", alignContent:'space-between', justifyContent:'space-between',marginBottom:10}}>
        <Box3 />
        <Box4 />
      </View>
    
     
     <StatusBar style="auto" />
      </View>
  );
};




const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: 'lavender',
    padding: 10,
    margin:10,
  },
  
});
export default App;
