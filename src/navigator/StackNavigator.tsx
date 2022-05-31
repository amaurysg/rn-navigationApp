import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Pagina1Screens} from '../screens/Pagina1Screens';
import {Pagina2Screens} from '../screens/Pagina2Screens';
import {Pagina3Screens} from '../screens/Pagina3Screens';
import {PersonaScreens} from '../screens/PersonaScreen';

//Good practice, define the RootStackParams!
export type RootStackParams = {
  Pagina1Screens: undefined;
  Pagina2Screens: undefined;
  Pagina3Screens: undefined;
  PersonaScreens: {id: number; name: string}; //also can be a isolated interface,
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      //initialRouteName="Pagina2Screens"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="Pagina1Screens"
        options={{title: 'Página 1'}}
        component={Pagina1Screens}
      />
      <Stack.Screen
        name="Pagina2Screens"
        options={{title: 'Página 2'}}
        component={Pagina2Screens}
      />
      <Stack.Screen
        name="Pagina3Screens"
        options={{title: 'Página 3'}}
        component={Pagina3Screens}
      />
      <Stack.Screen
        name="PersonaScreens"
        options={{title: 'Persona'}}
        component={PersonaScreens}
      />
    </Stack.Navigator>
  );
};
