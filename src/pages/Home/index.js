import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { connect } from 'react-redux';


 function Home(props) {

  const navigation = useNavigation();

 return (
   <View style={styles.container}>
       <Text>Home</Text>
       <Text>{props.desnome}</Text>
       <Text>{props.iduser}</Text>
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

const mapStateToProps = (state) => {

  return {
    iduser: state.auth.iduser,
    desnome: state.auth.desnome,
    desemail: state.auth.desemail,
    dessenha: state.auth.dessenha,
  };

};

const LoginConnect = connect(mapStateToProps)(Home);

export default LoginConnect;