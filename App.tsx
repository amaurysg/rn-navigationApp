import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LateralMenuFinal} from './src/navigator/LateralMenuFinal';
import { AuthProvider } from './src/context/AuthContext';
/* import {AuthProvider} from './src/context/authContext'; */

const App = () => {
  return (
    <NavigationContainer>
      <AppState>

        {/*  <StackNavigator /> */}
        <LateralMenuFinal />
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};
export default App;
