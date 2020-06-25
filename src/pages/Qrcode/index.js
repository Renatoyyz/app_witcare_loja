import React from 'react';
import { View, Text, StyleSheet, Button,TouchableOpacity } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

export default function Qrcode() {
   let scanner;
    alert('Entrou');

    const navigation = useNavigation();

    function onSuccess(e){
        alert('OK...'+e.data);
        //navigation.dispatch(StackActions.popToTop() );
        navigation.navigate('QrcodeImage', {
            valor_qrcode: e.data
        });
    }

 return (
   <View style={styles.container}>
       
       <QRCodeScanner
        onRead={(e) => onSuccess(e)}
        //flashMode={RNCamera.Constants.FlashMode.torch}
        showMarker={true}
        ref={ (node) => scanner = node }
        reactivate={false}
        bottomContent={
          <TouchableOpacity onPress={() => scanner.reactivate() }>
            <Text>OK. Got it!</Text>
          </TouchableOpacity>
        }
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