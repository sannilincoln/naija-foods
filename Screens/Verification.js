import { View, Text, StyleSheet,TouchableOpacity, Image, TextInput} from 'react-native'
import React from 'react'
import ombThree from '../assets/ob3.png'
import { AntDesign } from '@expo/vector-icons'; 


import {FONT,COLORS} from '../constant/theme'
import SmallButton from '../Components/SmallButton';
import BigButton from '../Components/BigButton';
import BigButtonWhite from '../Components/BigButtonWhite';
import { SafeAreaView } from 'react-native-safe-area-context';

const Verification = ({navigation}) => {
  return (
    <SafeAreaView>
    <View style={styles.container}>
        
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <TouchableOpacity>
        <AntDesign name="arrowleft" size={30} color={COLORS.black} marginLeft={15} />
        </TouchableOpacity>
        {/* <TouchableOpacity>
    <Text style={{ fontFamily:FONT.bold, color:COLORS.green}}>Skip</Text>
        </TouchableOpacity> */}
            </View>
           
        <View style={styles.bigGreen}>
            <Text style={styles.txt}>Enter the OTP sent to +234567820122</Text>

    
    <View style={{flexDirection:'row',gap:15}}>
        
        <View style={styles.otpBox}>
            <Text style={styles.otpTxt}>4</Text>
        </View>
        <View style={styles.otpBox}>
            <Text style={styles.otpTxt}>4</Text>
        </View>
        <View style={styles.otpBox}>
            <Text style={styles.otpTxt}>4</Text>
        </View>
        <View style={styles.otpBox}>
            <Text style={styles.otpTxt}>4</Text>
        </View>       
    </View>
        <Text style={styles.txt}>Didnt get the OTP?   Resend</Text>

        <View style={styles.keybd}>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.otpkey}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.otpkey}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.otpkey}>3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.otpkey}>4</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.otpkey}>5</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.otpkey}>6</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.otpkey}>7</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.otpkey}>8</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.otpkey}>9</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.otpkey}>0</Text>
      </TouchableOpacity>
    </View> 

            <BigButtonWhite
            title={'Verify'}
            onPress={() => navigation.navigate('Sign In')}
            />
        </View>
      

        
    </View>

    </SafeAreaView>
  )
}

export default Verification

const styles = StyleSheet.create({
container:{
    // flex:1,
    marginVertical: 15,
    // marginHorizontal: 15,
},
bigGreen:{
    marginTop:25,
    marginLeft:-15,
    height:843,
    width:425,
    backgroundColor:COLORS.green,
    // justifyContent:'center',
    alignItems:'center'
},
keybd:{
     flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 20,
},
txt:{
    color:COLORS.white,
    fontFamily:FONT.bold,
    marginVertical:30
},
otpBox:{
    width:60,
    height:60,
    backgroundColor:COLORS.white,
    alignItems:'center',
    justifyContent:'center',
    // margin:10
    
},
otpTxt:{
   fontFamily:FONT.bold,
   color:COLORS.black
},
otpkey:{
   fontFamily:FONT.bold,
   color:COLORS.white,
   fontSize:33,
},
button: {
    width: '30%',
    aspectRatio: 2,
    // borderRadius: 50,
    // backgroundColor: '#EEE',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },


 
});