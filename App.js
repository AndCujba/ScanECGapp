import React from 'react';

import {
SafeAreaView,
ScrollView,
StatusBar,
StyleSheet,
Text,
useColorScheme,
View,
TextInput,
TouchableOpacity,
Image,
} from 'react-native';

import {
Colors,
DebugInstructions,
Header,
LearnMoreLinks,
ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import StartPage from './components/StartPage';
import HomePage from './components/HomePage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();
  

export default function App() {
  return (
    <>
    <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="Start" component={StartPage} />
            <Stack.Screen options={{headerShown: false}} name="LogIn" component={LoginPage} />
            <Stack.Screen options={{headerShown: false}} name="SignIn" component={SignupPage} />
            <Stack.Screen options={{headerShown: false}} name="Home" component={HomePage} />
          </Stack.Navigator>
        </NavigationContainer>
    
      </>
  )  
}  
 








