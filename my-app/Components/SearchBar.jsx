import React from "react";
import {  StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Searchbar = () => {
  return (
    <View style ={styles.Searchbar}>
      <Icon name="search" color={'#dcdcdc'} size={18}  />
      <TextInput style={{ fontSize: 12, color:'#dcdcdc', marginHorizontal:10}} placeholder='Search conditions , doctors...'/> 
  </View>
    
   );
};
const styles = StyleSheet.create({
  Searchbar:
  {
    flexDirection: 'row',
    height: '7%',
    width: '100%',
    padding: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor:'white',
    borderRadius: 10,
    marginTop:20,
  },
 

});


export default Searchbar;