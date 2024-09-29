import React from 'react';
import { StyleSheet, Text, TextInput, View, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Rate from './rating';

const Box3 = () =>
{
  return (
    <View style={styles.box}>
     
      <Icon name="user-md" color={'#dcdcdc'} size={80} />
      <Text style={{ fontSize: 15, color: 'black' }}>Dr Anna Dinn</Text>
      <Text style={{ fontSize: 10, color: 'grey' }}>Psychologist</Text>
       <Rate rating="4.9" />
      </View>
  )
}
const styles = StyleSheet.create({
    box:
    {
  
        width: 150,
        height: 180,
        paddingTop: 10,
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 50,
    
    
    },
});
export default Box3;