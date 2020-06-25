Projeto: APP_WITCARE_LOJA
Autor: Renato Oliveira
Data de inicio: 24/06/2020

Pacotes para esse projeto:

1 - yarn add styled-components => nao_ok
2 - yarn add firebase => nao_ok 
3 - yarn add react-native-vector-icons => nao_ok
4 - yarn add react-native-community/async-storage => nao_ok
5 - yarn add @react-navigation/native => ok
6 - yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view => ok

    - Se for usar ios instalar pods (via Cocoapods) 
      npx pod-install ios => ok
    - Garantir o import:
      import 'react-native-gesture-handler';
      Tem que ser no topo do arquivo de entrada do projeto ( index.js ou App.js por exemplo )

7 - yarn add react-native-camera => ok
8 - yarn add react-native-qrcode-scanner => ok
9 - yarn add react-native-permissions => ok

#Para gerar imagens QRCode = link de referencia: https://www.npmjs.com/package/react-native-qrcode-svg
10 - yarn add react-native-svg => ok
11 - yarn add react-native-qrcode-svg => n_ok


12 - yarn add @react-navigation/stack => nao_ok
13 - yarn add @react-navigation/drawer => nao_ok
14 - yarn add react-native-picker-select => nao_ok
15 - yarn add date-fns => nao_ok
16 - yarn add @react-native-community/datetimepicker

16 - react-native link => nao_ok

Para rodar em ios:

1 - instalar cocoapods:
    sudo gem install cocoapods
    link = https://cocoapods.org
2 - certificar se tem o sdk iphoneos:
    xcrun -k --sdk iphoneos --show-sdk-path
    se der erros:
    xcrun:_ error: SDK "iphoneos" cannot be located
    xcrun: error: SDK "iphoneos" cannot be located
    xcrun: error: unable to lookup item 'Path' in SDK 'iphoneos'

    então rodar:
    sudo xcode-select --switch /Applications/Xcode.app
    Link da discussão do problema:
    https://github.com/facebook/react-native/issues/18408
3 - Rodar no diretorio ios do projeto:
    pod instal

4 - voltar para projeto e rodar:
    yarn react-native run-ios