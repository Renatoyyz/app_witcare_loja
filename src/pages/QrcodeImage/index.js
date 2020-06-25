import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function QrcodeImage({ route }) {
 return (
    <View style={styles.container}>
         <QRCode
             value={route.params?.valor_qrcode}
             size={200}
         />
         <Text>{route.params?.valor_qrcode}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#DADADA',
      alignItems: 'center'
    },
  });