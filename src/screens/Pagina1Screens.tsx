import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {Button, Text, View} from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screens = ({navigation}: Props) => {
  console.log(navigation);
  return (
    <View style={styles.globalMargin}>
      <Text>Pagina1Screen</Text>
      <Button
        title="Go to screen 2"
        onPress={() => navigation.navigate('Pagina2Screens')}
      />
    </View>
  );
};
