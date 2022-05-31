import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {StackNavigator} from './src/navigator/StackNavigator';
import { LateralMenu } from './src/navigator/LateralMenu';
import { LateralMenuFinal } from './src/navigator/LateralMenuFinal';

const App = () => {
  return (
    <NavigationContainer>
     {/*  <StackNavigator /> */}
<LateralMenuFinal/>
    </NavigationContainer>
  );
};

export default App;
