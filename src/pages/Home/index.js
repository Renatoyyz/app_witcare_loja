import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Home() {

  const navigation = useNavigation();

 return (
   <View style={styles.container}>
       <Text>Home</Text>
       <Button
       title="Ir para Login"
       onPress={ () => navigation.navigate('Qrcode') }
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