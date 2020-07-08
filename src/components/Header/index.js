import React from 'react';
import { View, TouchableWithoutFeedback, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
//import Icon from 'react-native-vector-icons/Feather';

export default function Header() {
const navigation = useNavigation();
 return (
   <SafeAreaView style={styles.conteinerHeader}>
       <TouchableWithoutFeedback style={styles.btVoltar} onPress={ () => navigation.dispatch(StackActions.popToTop()) } >
           <Text style={styles.txVoltar}>Sair</Text>
       </TouchableWithoutFeedback>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({

    conteinerHeader:{
        marginTop: -50,
        marginBottom: 15,
        width: '95%',
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        //backgroundColor: '#00ff00'
    },
    btVoltar:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    txVoltar:{
        fontSize: 20,
    },
    btLogOut:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    txLogout:{
        fontSize: 20,
    },

});