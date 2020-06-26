import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Tb_user from '../../models/Tb_user';

export default function Login() {

  const textoEspecial = "<<Ou faça seu cadastro>>";
  const navigation = useNavigation();

  function testeBanco(){

    // const user = await Tb_user.create({
    //   desnome: 'Renato Oliveira',
    //   desemail: 'renato@renato.com.br',
    //   dessenha: '123123',
    // });

    alert('Teste');
  }

 return (
   <View style={styles.container}>
       
       <View style={styles.areaImagem} >
          <Image
          style={styles.imagem}
          source={require('../../img/logo_duckbill.png')}
          />
       </View>

      <View style={styles.areaLogin}>
          <TextInput placeholder="Login" style={styles.input} />
      </View>

      <View style={styles.areaSenha}>
          <TextInput placeholder="Senha" style={styles.input} />
      </View>

      <View style={styles.areaBotaoEntrar}>
          <TouchableOpacity style={styles.botaoEntrar} onPress={() => testeBanco()} >
            <Text style={styles.textoBotao}>ENTRAR</Text>
          </TouchableOpacity>
      </View>

      <View style={styles.areaBotaoCadastro}>
          <TouchableOpacity style={styles.botaoCadastro}>
            <Text style={styles.textoCadastro}> {textoEspecial} </Text>
          </TouchableOpacity>
      </View>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#DADADA',
    alignItems: 'center',
    paddingTop: 60,
  },
  areaImagem:{
    flex:1,
  },
  areaLogin:{
    flex:1,
    paddingTop: 110,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
  },
  areaSenha:{
    flex:1,
    paddingTop: 5,
    paddingBottom: 1,
    alignItems: 'center',
    width: '100%',
  },
  areaBotaoEntrar:{
    flex:1,
    paddingTop: 10,
    paddingBottom: 1,
    alignItems: 'center',
    //justifyContent: 'space-between',
    width: '100%',
  },
  areaBotaoCadastro:{
    flex: 1,
  },
  imagem:{
    width: 232,
    height: 136
  },
  input:{
    backgroundColor: '#fff',
    width: '80%',
    height: 40,
    borderRadius: 8,
    textAlign: 'center'
  },

  botaoEntrar:{
    borderWidth: 1,
    borderRadius: 8,
    width: '90%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#84202D',
  },
  textoBotao:{
    fontSize: 20,
    color: '#fff'
  },
  botaoCadastro:{
    alignItems: 'center',
  },
  textoCadastro:{
    fontSize: 14,
    fontWeight: 'bold'
  },

});