import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import md5 from 'md5';
import Toast from 'react-native-simple-toast';


import { connect } from 'react-redux';
import { editEmail, editSenha, editNome, editId } from '../../actions/AuthActions';

function Login(props) {

  const textoEspecial = "<<Ou faça seu cadastro>>";
  const navigation = useNavigation();
  const [loadLogin, setloadLogin ] = useState(false);

  async function carregaLogin(){

    let encontrou = false;
    let senha_hash = md5(props.dessenha);

    setloadLogin(true);

    await api.get(`api_witcare`)
    .then((response) => {//then

      response.data.forEach(element => {
        if( (senha_hash === element.dessenha  ) && ( props.desemail === element.desemail ) ){
 
           props.editId(element.iduser);
           props.editNome(element.desnome);
           encontrou = true;
        }
        setloadLogin(false);
      });
      
    } )//then 
    .catch( (error) => {
      setloadLogin(false);
      Toast.show(error + ': -> Sem acesso a internet.');
    } )
    
     
    

    if( encontrou === true ){
      navigation.navigate('Home');
    }else{
      Toast.show('Esse usuário não existe.');
    }

    props.editEmail('');
    props.editSenha('');
    
  }

 return (
   <KeyboardAvoidingView style={styles.container}>
       
       <View style={styles.areaImagem} >
          <Image
          style={styles.imagem}
          source={require('../../img/logo_duckbill.png')}
          />
       </View>

      <View style={styles.areaLogin}>
          <TextInput 
            placeholder="Login" 
            underlineColorAndroid = 'transparent' 
            style={styles.input} 
            value={props.desemail} 
            onChangeText={ (texto) => props.editEmail(texto) } 
          />
      </View>

      <View style={styles.areaSenha}>
          <TextInput 
            placeholder="Senha" 
            underlineColorAndroid = 'transparent' 
            secureTextEntry={true} 
            style={styles.input} 
            value={props.dessenha} 
            onChangeText={ (texto) => props.editSenha(texto) } 
          />
      </View>

      <View style={styles.areaBotaoEntrar}>
          <TouchableOpacity style={styles.botaoEntrar} onPress={() => carregaLogin()} >
            {
              loadLogin ?
              (
                <ActivityIndicator size={30} color="#fff" />
              ) :
                <Text style={styles.textoBotao}>ENTRAR</Text>
            }
            
          </TouchableOpacity>
      </View>

      <View style={styles.areaBotaoCadastro}>      
                <TouchableOpacity style={styles.botaoCadastro} onPress={() => navigation.navigate('Cadastro')}>
                  <Text style={styles.textoCadastro}> {textoEspecial} </Text>
                </TouchableOpacity>
      </View>

   </KeyboardAvoidingView>
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



const mapStateToProps = (state) => {//mapStateToProps
  return {
    iduser: state.auth.iduser,
    desnome: state.auth.desnome,
    desemail: state.auth.desemail,
    dessenha: state.auth.dessenha,
  };
};//mapStateToProps
const LoginConnect = connect(mapStateToProps, { editEmail, editSenha, editNome, editId })(Login);
export default LoginConnect;