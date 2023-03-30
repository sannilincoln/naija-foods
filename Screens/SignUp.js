import { View, Text, StyleSheet,TouchableOpacity, Image, Pressable} from 'react-native'
import React from 'react'
import ombThree from '../assets/ob3.png'
import { AntDesign } from '@expo/vector-icons'; 


import {FONT,COLORS} from '../constant/theme'
import SmallButton from '../Components/SmallButton';
import TextBox from '../Components/TextBox';
import BigButton from '../Components/BigButton';
import HorizontalRule from '../Components/HorizontalRule';
import SocialIcons from '../Components/SocialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUp = ({navigation}) => {
  return (
    <SafeAreaView>
    <View style={styles.container}>
        <Text style={{fontFamily:FONT.semiBold,fontSize:16,color:COLORS.black,marginVertical:6}}>
            Create an account</Text>
        <TextBox
        placeholder={'Ritzy'}
        icon={'person-circle-outline'}
        />
        <TextBox
        placeholder={'UserName'}
        icon={'person-circle-outline'}
        />
        <TextBox
        placeholder={'Email'}
        icon={'mail-open-outline'}
        />
        <TextBox
        placeholder={'Phone Number'}
        icon={'md-call-outline'}
        />
        <TextBox
        placeholder={'Password'}
        icon={'md-lock-closed-outline'}
        />
        <TextBox
        placeholder={'Location'}
        icon={'location-outline'}
        />
        
        <BigButton
        title={'Create Account'}
        onPress={() => navigation.navigate('Verification')}
        />
        <HorizontalRule/>

        <SocialIcons/>

        <TouchableOpacity onPress={() => navigation.navigate('Sign In')}>
            <Text style={styles.txt}>Already registered? 

                <Text style={styles.signIn} > Sign in</Text>
            
            </Text>

        </TouchableOpacity>
        
    </View>

    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({
container:{
    // flex:1,
    marginTop:40,
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