import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppLoading from 'expo-app-loading';
import { useFonts,Montserrat_400Regular,  Montserrat_500Medium,Montserrat_600SemiBold, Montserrat_700Bold,} from '@expo-google-fonts/montserrat';

import OnBoardingOne from './Screens/OnBoardingOne';
import OnBoardingTwo from './Screens/OnBoardingTwo';
import OnBoardingThree from './Screens/OnBoardingThree';
import SignUp from './Screens/SignUp';

export default function App() {
  let [fontsLoaded] = useFonts({ Montserrat_400Regular,  Montserrat_500Medium, Montserrat_700Bold,Montserrat_600SemiBold });

   if (!fontsLoaded) {
    return null;
  } else {
  return (
    <SafeAreaView>
    <View >

      {/* <OnBoardingOne/> */}
      {/* <OnBoardingTwo/> */}
      {/* <OnBoardingThree/> */}
      <SignUp/>
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
 
});
