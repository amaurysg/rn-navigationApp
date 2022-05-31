import React, {useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {parseAsync} from '@babel/core';
import {RootStackParams} from '../navigator/StackNavigator';

//Good practice, define here RootStackParams as Prop and PersonaScreens as string (replace any, any)
interface Props extends StackScreenProps<RootStackParams, 'PersonaScreens'> {}
/* interface RouterParams {
  id: number; 
  name: string
} */

export const PersonaScreens = ({navigation, route}: Props) => {
  //console.log(route.params?.name)
  //const {name} = route.params
  //console.log('---',name)
  //const params = route.params as RouterParams;
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params?.name,
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>

      <Button title="Pagina 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};
