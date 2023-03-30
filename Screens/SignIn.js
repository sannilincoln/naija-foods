import { View, Text, StyleSheet} from 'react-native'
import React from 'react'


import {FONT,COLORS} from '../constant/theme'
import TextBox from '../Components/TextBox';
import BigButton from '../Components/BigButton';
import HorizontalRule from '../Components/HorizontalRule';
import SocialIcons from '../Components/SocialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignIn = () => {
  return (
    <SafeAreaView>

    <View style={styles.container}>
      <Text style={{fontFamily:FONT.semiBold,fontSize:16,color:COLORS.black,marginVertical:6}}>
            Create an account</Text>
      
        <TextBox
        placeholder={'Phone Number'}
        icon={'md-call-outline'}
        />
        <TextBox
        placeholder={'Password'}
        icon={'md-lock-closed-outline'}
        />
        
        
        <BigButton
        title={'Sign in'}
        />

        <Text style={styles.textf}>Forgot password?</Text>


        <HorizontalRule/>

        <SocialIcons/>

        <View style={{marginTop:150}}>
            <Text style={styles.txt}>Not registered yet ?  

                <Text style={styles.signIn} > Sign up</Text>
            
            </Text>

        </View>
        
    </View>

    </SafeAreaView>

  )
}

export default SignIn

const styles = StyleSheet.create({
container:{
    // flex:1,
    marginTop:100,
    // marginVertical: 25,
    // justifyContent:'center',
    alignItems:'center'
},



textf:{
// fontSize:15,
fontFamily:FONT.medium,
color:COLORS.red,
marginLeft:210,
marginBottom:70

// marginVertical:15
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
    fontFamily:FONT.medium,
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