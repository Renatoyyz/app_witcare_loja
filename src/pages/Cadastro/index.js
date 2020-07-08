import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import md5 from 'md5';
import Toast from 'react-native-simple-toast';
import { useNavigation, StackActions } from '@react-navigation/native';
import api from '../../services/api';
import { validaEmail, validaNome, validaSenha } from '../../services/validation';

import { connect } from 'react-redux';
import { editEmail, editSenha, editNome, editId } from '../../actions/AuthActions';


 function Cadastro(props) {//Cadastro

const [gravar, setGravar] = useState(false);
const navigation = useNavigation();
const [loadLogin, setloadLogin ] = useState(false);

useEffect( () => {

    async function save(){//save
        setloadLogin(true);

        const dados = {
            desnome: props.desnome,
            desemail: props.desemail,
            dessenha: md5(props.dessenha)
        };
    
        await api.post(`api_witcare`, dados)
        .then(function(response){//then
            if( response.data.iduser > 0 ){//
                    props.editId( response.data.iduser );
                    Toast.show('Dados gravados com sucesso.');
                    setloadLogin(false);
                    navigation.dispatch(StackActions.push('Home') );
                }//
                else{
                    setloadLogin(false);
                    Toast.show('Esse usuário já existe.');
                }
    
        })//then
        .catch( (error) => {
            Toast.show(error + ": Erro de rede de Internet");
        } )
    
    }//save

    if( gravar ){//if gravar

        setGravar(false);
        save();
    
     }//if gravar

}, [gravar] );

function cadastrar(){//cadastrar
    setGravar(false);
    
    validaNome
        .isValid({ nome: props.desnome })
        .then(valid => {//validaNome
            if (!valid) {
                Toast.show('Formato de nome inválido.!!!!!');
            } else {//1
                validaEmail
                    .isValid({ email: props.desemail })
                    .then(valid => {//validaEmail
                        if (!valid) {
                            Toast.show('Email Inválido.!!!!!');
                        } else {//2
                            validaSenha
                                .isValid({ senha: props.dessenha })
                                .then(valid => {//validaSenha
                                    if (!valid) {
                                        Toast.show('Formato de senha inválido.\nTem que ter mai de 6 caracteres');
                                    } else {//3
                                        setGravar(true);
                                    }//3
                                })//validaSenha
                        }//2
                    })//validaEmail

                   }//1
        })//validaNome
    
 }//cadastrar

 return (
     <View style={styles.container}>

         <View style={styles.areaImagem} >
             <Image
                 style={styles.imagem}
                 source={require('../../img/logo_duckbill.png')}
             />
         </View>

         <View style={styles.areaNome}>
             <TextInput
                 placeholder="Nome"
                 underlineColorAndroid='transparent'
                 style={styles.input}
                 value={props.desnome}
                 onChangeText={(texto) => {props.editNome(texto)} }
             />
         </View>

         <View style={styles.areaEmail}>
             <TextInput
                 placeholder="Email"
                 underlineColorAndroid='transparent'
                 style={styles.input}
                 value={props.desemail}
                 onChangeText={(texto) => {props.editEmail(texto)}}
             />
         </View>

         <View style={styles.areaSenha}>
             <TextInput
                 placeholder="Senha"
                 underlineColorAndroid='transparent'
                 secureTextEntry={true}
                 style={styles.input}
                 value={props.dessenha}
                 onChangeText={(texto) => {props.editSenha(texto)}}
             />
         </View>

         <View style={styles.areaBotaoCadastrar}>
             <TouchableOpacity style={styles.botaoCadastrar} onPress={() => {cadastrar() }} >
                 {
                     loadLogin ?
                     (
                        <ActivityIndicator size={30} color="#fff" />
                     ) :
                     (
                        <Text style={styles.textoBotao}>CADASTRAR</Text>
                     )
                 }
                 
             </TouchableOpacity>
         </View>

     </View>
  );
}//Cadastro

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#DADADA',
        alignItems: 'center',
        paddingTop: 40,
    },
    areaImagem:{
        flex:1,
    },
    areaNome:{
        flex:1,
        paddingTop: 110,
        paddingBottom: 10,
        alignItems: 'center',
        //justifyContent: 'flex-end',
        width: '100%',
    },
    areaEmail:{
        flex:1,
        paddingTop: 5,
        paddingBottom: 1,
        alignItems: 'center',
        width: '100%',
    },
    areaSenha:{
        flex:1,
        paddingTop: 5,
        paddingBottom: 1,
        alignItems: 'center',
        width: '100%',
    },
    areaBotaoCadastrar:{
        flex:1,
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
        //justifyContent: 'space-between',
        width: '100%',
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
    botaoCadastrar:{
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
})

const mapStateToProps = (state) => {//mapStateToProps
    return {
      iduser: state.auth.iduser,
      desnome: state.auth.desnome,
      desemail: state.auth.desemail,
      dessenha: state.auth.dessenha,
    };
  };//mapStateToProps
const LoginConnect = connect(mapStateToProps, { editEmail, editSenha, editNome, editId })(Cadastro);
export default LoginConnect;