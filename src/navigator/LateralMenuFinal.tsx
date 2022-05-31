import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {SettingsScreens} from '../screens/SettingsScreens';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {styles} from '../theme/appTheme';

const Drawer = createDrawerNavigator();
export const LateralMenuFinal = () => {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
      drawerContent={props => <InternalMenu {...props} />}>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsScreens"
        options={{title: 'Settings'}}
        component={SettingsScreens}
      />
    </Drawer.Navigator>
  );
};

const InternalMenu = ({navigation}: DrawerContentComponentProps) => {
  return (
    <>
      <DrawerContentScrollView>
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/147/147140.png',
            }}
            style={styles.avatar}
          />
        </View>
        <View style={styles.menuLateralOptions}>
          <TouchableOpacity style={styles.menuButtonOptions} onPress={()=>navigation.navigate('Pagina1Screens')}>
            <Text style={styles.menuTextOptions}>Navegacion</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButtonOptions} onPress={()=>navigation.navigate('SettingsScreens')}>
            <Text style={styles.menuTextOptions}>Ajustes</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </>
  );
};
