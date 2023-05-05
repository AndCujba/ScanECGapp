import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';

export default function HomePage() {
    const [isConnected, setIsConnected] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
  
    const handleConnectPress = () => {
      // TODO: handle BLE device connection
      setIsConnected(true);
    }
  
    const handleRecordPress = () => {
      // TODO: handle ECG recording
      setIsRecording(true);
    }
  
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
        <Text style={styles.title}>ECG Monitoring App</Text>
        <View style={styles.instructionsContainer}>
            <Text style={styles.instructions}>
                Please place the sensors on your chest as shown to begin monitoring your ECG.</Text>
            <Image source={require('./ssensors.png')} style={styles.sensorImage} />
            <Text style={styles.instructions}>
                Connect to BLE device by turning on Bluetooth and pressing the Connect Button. Once the connection is ready, press on Start Button that will redirectionate you to Recording Page.</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, styles.connectButton, isConnected && styles.disabledButton]}
            //   onPress={() => navigation.navigate('SignIn')}>
            disabled={isConnected}
            onPress={handleConnectPress}
          >
            <Text style={styles.buttonText}>{isConnected ? 'Connected' : 'Connect BLE'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.recordButton, !isConnected || isRecording && styles.disabledButton]}
            onPress={handleRecordPress}
            disabled={!isConnected || isRecording}
          >
            <Text style={styles.buttonText}>{isRecording ? 'Recording...' : 'Start Recording'}</Text>
          </TouchableOpacity>
        </View>
        {/* <Text>Email: {auth.currentUser?.email}</Text>
    <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
    </TouchableOpacity> */}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#fff',
      paddingTop: 70,
    },
    instructionsContainer: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 20,
        marginRight: 20,
        marginTop: 0,
        justifyContent: 'flex-start'
    },
    instructions: {
        textAlign: 'center',
        color: '#a6a6a6',
        paddingHorizontal: 20,
        fontSize: 16,
        lineHeight: 24,
    },
    sensorImage: {
        width: 220,
        height: 220,
        marginTop: 20,
        marginBottom: 30,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 20,
      marginTop: 20,
    },
    buttonsContainer: {
      flexDirection: 'row',
        bottom: 120,
    },
    button: {
      padding: 16,
      borderRadius: 8,
      marginHorizontal: 8,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#007AFF',
    },
    connectButton: {
      backgroundColor: '#007AFF',
    },
    recordButton: {
      backgroundColor: '#8BC34A',
    },
    disabledButton: {
      opacity: 0.5,
    },
    buttonText: {
      fontSize: 16,
      color: '#fff',
      fontWeight: 'bold',
    },
  });
 

