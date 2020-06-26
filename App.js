import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import './src/database';


//Import das telas
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Qrcode from './src/pages/Qrcode';
import QrcodeImage from './src/pages/QrcodeImage';

const Stack = createStackNavigator();

export default function App(){//App

  return(//return
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
           <Stack.Screen 
           name="Login" 
           component={Login} 
           options={{
             headerShown: false
           }}
           />

           <Stack.Screen 
           name="Home" 
           component={Home} 
           options={{
             headerShown: false
           }}
           />

          <Stack.Screen
            name="Qrcode"
            component={Qrcode}
            options={{
              title: 'VOLTAR',
             headerStyle:{
               backgroundColor: '#DADADA',
             },
             headerTintColor: '#84202D'
            }}
          />

          <Stack.Screen
            name="QrcodeImage"
            component={QrcodeImage}
            options={{
              title: 'VOLTAR',
              headerStyle: {
                backgroundColor: '#DADADA',
              },
              headerTintColor: '#84202D'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );//return

}//App
