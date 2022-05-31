import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Pagina1Screens} from '../screens/Pagina1Screens';
import {Pagina2Screens} from '../screens/Pagina2Screens';
import {Pagina3Screens} from '../screens/Pagina3Screens';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pagina1Screens" component={Pagina1Screens} />
      <Stack.Screen name="Pagina2Screens" component={Pagina2Screens} />
      <Stack.Screen name="Pagina3Screens" component={Pagina3Screens} />
    </Stack.Navigator>
  );
};
