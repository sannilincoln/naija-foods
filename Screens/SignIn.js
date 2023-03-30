import { View, Text, StyleSheet} from 'react-native'
import React from 'react'


import {FONT,COLORS} from '../constant/theme'
import TextBox from '../Components/TextBox';
import BigButton from '../Components/BigButton';
import HorizontalRule from '../Components/HorizontalRule';
import SocialIcons from '../Components/SocialIcons';

const SignIn = () => {
  return (
    <View style={styles.container}>
      
      
        <TextBox
        placeholder={'Phone Number'}
        icon={'md-call-outline'}
        />
        <TextBox
        placeholder={'Password'}
        icon={'md-lock-closed-outline'}
        />
        
        
        <BigButton
        title={'Create Account'}
        />
        <HorizontalRule/>

        <SocialIcons/>

        <View >
            <Text style={styles.txt}>Already registered? 

                <Text style={styles.signIn} > Sign in</Text>
            
            </Text>

        </View>
        
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
container:{
    // flex:1,
    marginTop:50,
    // marginVertical: 25,
    justifyContent:'center',
    alignItems:'center'
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
txt:{
    // marginVertical:15,
    fontFamily:FONT.regular,
    textAlign:'center',
    fontSize:14,
    color:COLORS.black,

},
signIn:{
    // marginVertical:15,
    fontFamily:FONT.bold,
    textAlign:'center',
    fontSize:14,
    color:COLORS.black,

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