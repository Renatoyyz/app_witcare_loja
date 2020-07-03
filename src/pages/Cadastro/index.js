import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import md5 from 'md5';
import api from '../../services/api';
import { validaEmail, validaNome, validaSenha } from '../../services/validation';

import { connect } from 'react-redux';
import { editEmail, editSenha, editNome, editId } from '../../actions/AuthActions';


 function Cadastro(props) {//Cadastro

//  let hash_loc =  md5('123');
//  console.log(hash_loc);


const [gravar, setGravar] = useState(false);


useEffect( () => {

    if( gravar ){//if gravar

        setGravar(false);
        console.log('Pode gravar: Hash = '+props.dessenha);
        save();
    
     }//if gravar

}, [props.dessenha] );

async function save(){//save

    const dados = {
        desnome: props.desnome,
        desemail: props.desemail,
        dessenha: props.dessenha
    };

    const response = await api.post(`api_witcare`, dados);

    if( response ){

    }else{
        alert('não deu');
    }

}//save

function cadastrar(){//cadastrar
    setGravar(false);

    validaNome
        .isValid({ nome: props.desnome })
        .then(valid => {//validaNome
            if (!valid) {
                alert('Formato de nome inválido.!!!!!');
            } else {//1
                validaEmail
                    .isValid({ email: props.desemail })
                    .then(valid => {//validaEmail
                        if (!valid) {
                            alert('Email Inválido.!!!!!');
                        } else {//2
                            validaSenha
                                .isValid({ senha: props.dessenha })
                                .then(valid => {//validaSenha
                                    if (!valid) {
                                        alert('Formato de senha inválido.\nTem que ter mai de 6 caracteres');
                                    } else {//3
                                        setGravar(true);
                                        props.editSenha( md5(props.dessenha) );
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
                 <Text style={styles.textoBotao}>CADASTRAR</Text>
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