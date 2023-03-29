import { View, Text, StyleSheet,TouchableOpacity, Image} from 'react-native'
import React from 'react'
import ombThree from '../assets/ob3.png'
import { AntDesign } from '@expo/vector-icons'; 


import {FONT,COLORS} from '../constant/theme'
import SmallButton from '../Components/SmallButton';
import TextInput from '../Components/TextInput';

const SignUp = () => {
  return (
    <View style={styles.container}>
        <TextInput/>
        


        
        
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
container:{
    // flex:1,
    marginVertical: 15,
    marginHorizontal: 15,
},

image:{
height:384,
marginVertical:15,
// marginHorizontal:
},

textB:{
fontSize:24,
fontFamily:FONT.bold,
color:COLORS.black,
marginVertical:15
},

textp:{
    marginVertical:15,
    fontFamily:FONT.medium,
    textAlign:'center',
    fontSize:14,
    color:COLORS.black

},

dotGroup:{
    marginVertical:25,
    flexDirection:'row'

},
dotGreen:{
    margin:5,
    width:12,
    height:12,
    backgroundColor:COLORS.green,
    borderRadius:50

},

dotGray:{
    margin:5,
    width:12,
    height:12,
    backgroundColor:COLORS.gray,
    borderRadius:50
},

lowerContainer:{
    alignItems:'center',
    justifyContent:'center',


}
 
});