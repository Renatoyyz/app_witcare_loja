import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

import { connect } from 'react-redux';


 function Home(props) {//

const navigation = useNavigation();

//console.warn('Entrou em Home');

 return (
   <View style={styles.container}>

     <Header/>

     <StatusBar backgroundColor="#DADADA" barStyle="light-content" />

      <View style={styles.areaImagem} >
        <Image
          style={styles.imagem}
          source={require('../../img/logo_duckbill.png')}
        />
      </View>

      <View style={styles.areaTexto}>
         <Text style={styles.textoBemVindo}>Bem-vindo {props.desnome}</Text>
      </View>

      <View style={styles.areaBotaoScanear}>
          <TouchableOpacity style={styles.botaoScanear} onPress={() => navigation.navigate('Qrcode')}>
            <Text style={styles.textoScanear}>SCANEAR ITEM</Text>
          </TouchableOpacity>
      </View>
       
   </View>
  );
}//Home

const styles = StyleSheet.create({
  container:{
    flexGrow:1,
    backgroundColor: '#DADADA',
    alignItems: 'center',
    paddingTop: 60,
  },
  areaImagem:{
    flexGrow:1,
  },
  areaTexto:{
    flexGrow: 1,
  },
  areaBotaoScanear:{
    flexGrow:1,
    paddingTop: 10,
    paddingBottom: 1,
    alignItems: 'center',
    //justifyContent: 'space-between',
    width: '100%',
  },
  imagem:{
    width: 232,
    height: 136
  },
  textoBemVindo:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  botaoScanear:{
    borderWidth: 1,
    borderRadius: 8,
    width: '90%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#84202D',
  },
  textoScanear:{
    fontSize: 20,
    color: '#fff'
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

const HomeConnect = connect(mapStateToProps)(Home);

export default HomeConnect;