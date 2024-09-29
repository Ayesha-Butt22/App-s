import React from "react";
import { View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Rate = (props) => {
    return (
        <View style={styles.rate}>
        <Icon name="star" color={'yellow'} size={15}/>
            <Text style={{ fontSize: 14, color: "white", alignContent: "center", justifyContent: 'center' }}>{props.rating}</Text>
        
        </View>
    );};
const styles = StyleSheet.create({
  rate:
  {
    flexDirection:'row',
    width: 60,
    height: 30,
   backgroundColor: 'purple',
    borderRadius: 10,
        alignItems: 'center',
    justifyContent:'center',
    },
});
export default Rate;
