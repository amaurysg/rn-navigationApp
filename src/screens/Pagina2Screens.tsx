import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const Pagina2Screens = () => {
  const  navigator = useNavigation()
  return (
    <View style={styles.globalMargin}>
        <Text>Pagina2Screen</Text>
        <Button title='Go to screen 3' onPress={()=> navigator.navigate("Pagina3Screens") }/>
    </View>
  )
}
