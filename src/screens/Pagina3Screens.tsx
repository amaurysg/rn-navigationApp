import React from 'react'
import {  StackScreenProps } from '@react-navigation/stack'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any>{}

export const Pagina3Screens = ({navigation}:Props) => {
  return (
    <View style={styles .globalMargin}>
        <Text style={styles.title}>Pagina3Screen</Text>
        <Button title='Regresar' onPress={()=> navigation.pop()}/>
        <Button title='Pagina 1'  onPress={()=> navigation.popToTop()}/>
    </View>
  )
}
