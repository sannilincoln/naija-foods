import { View, Text, StyleSheet,TouchableOpacity, Image} from 'react-native'
import React from 'react'
import ombThree from '../assets/ob3.png'
import { AntDesign } from '@expo/vector-icons'; 


import {FONT,COLORS} from '../constant/theme'
import SmallButton from '../Components/SmallButton';

const OnBoardingThree = () => {
  return (
    <View style={styles.container}>
        
        <View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <TouchableOpacity>
        <AntDesign name="arrowleft" size={24} color={COLORS.green} />
        </TouchableOpacity>
        {/* <TouchableOpacity>
    <Text style={{ fontFamily:FONT.bold, color:COLORS.green}}>Skip</Text>
        </TouchableOpacity> */}

            </View>
            <Image
            style={styles.image}
            source={ombThree}
            resizeMode={'contain'}
            />

            <View style={styles.lowerContainer}>
            <Text style={styles.textB}>Get Delivery</Text>
            <Text style={styles.textp}>Get your food delivered and enjoy your meal with friends and family</Text>
            
            <View style={styles.dotGroup}>
                <View style={styles.dotGray}/>
                <View style={styles.dotGray}/>
                <View style={styles.dotGreen}/>
            </View>

                <View style={{marginTop:25,}}>
                    <SmallButton
                        title={'Get Started'}
                        Onpress={() => console.log('hdfk')}
                    />
                </View>
            </View>


        </View>

        
    </View>
  )
}

export default OnBoardingThree

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