import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

import {FONT,COLORS} from '../constant/theme'


const TextInput = () => {
  return (
    <View>
      <Text>TextInput</Text>
    </View>
  )
}

export default TextInput

const styles = StyleSheet.create({
container:{
    height:75,
    width:215,
    borderRadius:10,
    backgroundColor:COLORS.green,
   
   
},

})