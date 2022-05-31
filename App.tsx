import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LateralMenuFinal} from './src/navigator/LateralMenuFinal';

const App = () => {
  return (
    <NavigationContainer>
      {/*  <StackNavigator /> */}
      <LateralMenuFinal />
    </NavigationContainer>
  );
};

export default App;
