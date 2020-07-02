import 'react-native-gesture-handler';

//Desabilitar Warning
//console.disableYellowBox = true;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Reducers from './src/Reducers';


//Import das telas
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Qrcode from './src/pages/Qrcode';
import QrcodeImage from './src/pages/QrcodeImage';

let store = createStore(Reducers);

const Stack = createStackNavigator();

export default function App(){//App

  return(//return

    <Provider store={store}>

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
                  headerStyle: {
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

    </Provider>

  );//return

}//App
