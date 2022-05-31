import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screens = ({navigation}: Props) => {
  console.log(navigation);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1=Screen</Text>
      <Button
        title="Go to screen 2"
        onPress={() => navigation.navigate('Pagina2Screens')}
      />
      {/* <Button
        title="Persona screen"
        onPress={() => navigation.navigate('PersonaScreens')}
      /> */}
      <Text>Navegar con argumentos</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.personalButton, backgroundColor:'pink'}}
          onPress={() =>
            navigation.navigate('PersonaScreens', {id: 1, name: 'Amaury'})
          }>
          <Text>Amaury</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.personalButton}
          onPress={() =>
            navigation.navigate('PersonaScreens', {id: 2, name: 'Lore'})
          }>
          <Text>Lore</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
