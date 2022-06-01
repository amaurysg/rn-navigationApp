import React, {useContext} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AuthContext} from '../context/AuthContext';

interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screens = ({navigation}: Props) => {
  //console.log(navigation);
  const {
    signIn,
    logOut,
    authState: {isLoggedIn},
  } = useContext(AuthContext);
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
          style={{...styles.personalButton, backgroundColor: 'pink'}}
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
      {isLoggedIn ? <Button title="Log Out" onPress={logOut}></Button> : <Button title="Sign In" onPress={signIn}></Button>  }
       
    </View>
  );
};
