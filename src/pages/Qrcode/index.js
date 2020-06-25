import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';

export default function Qrcode() {

    const navigation = useNavigation();

 return (
   <View style={styles.container}>
       <Text>Qrcode</Text>
       <Button
       title="Ir para Home"
       onPress={ () => navigation.dispatch(StackActions.popToTop() ) }
       />
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#DADADA'
    },
  });