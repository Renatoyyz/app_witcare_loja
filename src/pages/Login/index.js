import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {

  const navigation = useNavigation();

 return (
   <View style={styles.container}>
       <Text>Login</Text>
       <Button
       title="Ir para Home"
       onPress={ () => navigation.navigate('Home') }
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