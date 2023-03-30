import { View, Text, StyleSheet,TouchableOpacity, Image} from 'react-native'
import React from 'react'
import ombOne from '../assets/ob1.png'
import { AntDesign } from '@expo/vector-icons'; 


import {FONT,COLORS} from '../constant/theme'
import { SafeAreaView } from 'react-native-safe-area-context';

const OnBoardingOne = ({navigation}) => {
  return (  
     <SafeAreaView>

    
    <View style={styles.container}>
        
        <View>
            <TouchableOpacity
             onPress={()=> navigation.navigate('Sign Up')}

            >
      <Text style={{textAlign:'right', fontFamily:FONT.bold, color:COLORS.green}}>Skip</Text>
            </TouchableOpacity>
            <Image
            style={styles.image}
            source={ombOne}
            resizeMode={'contain'}
            />

            <View style={styles.lowerContainer}>
            <Text style={styles.textB}>Give Your Location</Text>
            <Text style={styles.textp}>Help us find the best of Nigerian Restaurants close to you by giving us access to your location.</Text>
            
            <View style={styles.dotGroup}>
                <View style={styles.dotGreen}/>
                <View style={styles.dotGray}/>
                <View style={styles.dotGray}/>
            </View>

                <TouchableOpacity
                 style={{marginTop:25,}} 
                onPress={()=> navigation.navigate('Onboarding Two')}
>

                <AntDesign name="rightcircle" size={60} color={COLORS.green} />
                </TouchableOpacity>
            </View>


        </View>

        
    </View>
</SafeAreaView>
  )
}

export default OnBoardingOne

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