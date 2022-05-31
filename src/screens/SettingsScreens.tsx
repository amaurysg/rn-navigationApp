import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { RootStackParams } from '../navigator/StackNavigator'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<RootStackParams, 'SettingsScreens'> {}
export const SettingsScreens = ({navigation}: Props) => {
  //const {top} =useSafeAreaInsets()
  return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                Settings Screen
            </Text>
            <Button title='Home' onPress={()=>navigation.navigate('Pagina1Screens')}></Button>
        </View>
  )
}
