import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';

import {
StyleSheet,
Text,
View,
TextInput,
TouchableOpacity,
Image,
} from 'react-native';
import { auth } from '../firebase';



export default function HomePage() {
   
    const navigation = useNavigation()

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("Start")
            })
            .catch(error => alert(error.message))
    }

  return ( 
  <View style={styles.container}>
    <Text>Email: {auth.currentUser?.email}</Text>
    <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
    </TouchableOpacity>
  </View>
  )
  }

  const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        width:"80%",
        backgroundColor:"#F55050",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        marginBottom:10
        },
    buttonText:{
        color:"black",
        fontSize:16,
        margin:0,
        }
  });
