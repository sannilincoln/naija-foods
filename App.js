import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';



import AppLoading from 'expo-app-loading';
import { useFonts,Montserrat_400Regular,  Montserrat_500Medium,Montserrat_600SemiBold, Montserrat_700Bold,} from '@expo-google-fonts/montserrat';
import MyStack from './Navigation/MainNav';
import { COLORS } from './constant/theme';
// import SignUp from './Screens/SignUp';

export default function App() {
  let [fontsLoaded] = useFonts({ Montserrat_400Regular,  Montserrat_500Medium, Montserrat_700Bold,Montserrat_600SemiBold });

   if (!fontsLoaded) {
    return null;
  } else {
  return (
    <NavigationContainer>
       
       <MyStack>
       
       </MyStack>
          
            
          <StatusBar style="auto" />
        

      </NavigationContainer>
  );
}
}

const styles = StyleSheet.create({
 
});
