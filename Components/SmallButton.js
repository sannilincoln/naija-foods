import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


import {FONT,COLORS} from '../constant/theme'

const SmallButton = ({title,Onpress}) => {
  return (
    <TouchableOpacity
    onPress={Onpress}
    style={styles.container}>
      <Text style={styles.Txt}>{title}</Text>
    </TouchableOpacity>
  
  )
}

export default SmallButton

const styles = StyleSheet.create({
container:{
    height:75,
    width:215,
    borderRadius:10,
    backgroundColor:COLORS.green,
    alignItems:'center',
    justifyContent:'center'
   
},
Txt:{
fontFamily:FONT.semiBold,
color:COLORS.white
}
})