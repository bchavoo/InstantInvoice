import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Header } from 'react-native-elements';

const Start  = ({ navigation }: any) =>{

  const onPressHandler = () => {
    navigation.navigate('InvoiceCreationEnglish')
  }

  return (
    <View style={styles.main}>
      <Header
          centerComponent={{ text: 'Instant Invoice', style: { color: '#fff', fontSize: 25 } }}
          rightComponent={{ icon: 'home', color: '#fff', onPress: () => alert('You are already home!') }}
          backgroundColor="#0db512"
        />
      <Text style={styles.text}>Welcome to Instant Invoice!</Text>
      <Text style={styles.subtext}>¡Bienvenido a Instant Invoice!</Text>
      <Text style={styles.heading}>Press below for English:</Text>
      <TouchableOpacity 
        style={styles.buttonContainer}
        onPress={() => onPressHandler()}
      >
        <Text style={styles.buttonText}>Create Invoice</Text>
      </TouchableOpacity>
      <Text style={styles.heading}>Oprima abajo para Español:</Text>
      <TouchableOpacity 
        style={styles.buttonContainer}
        onPress={() => alert('Coming soon!')}
      >
        <Text style={styles.buttonText}>Crear Recibo</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#0db512',
    borderColor: 'black',
    borderRadius: 8,
    borderWidth: 2,
    height: '10%',
    justifyContent: 'center',
    padding: 5,
    width: '75%',
  },
  buttonText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 34,
    },  
  heading: {
    fontSize: 20,
    paddingBottom: '1%',
    paddingTop: '15%',
  }, 
  main: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
  },
  subtext: {
    fontSize: 25,
    paddingBottom: '15%',
    textAlign: 'center',
  },
  text: {
    fontSize: 32,
    paddingVertical: '2.5%',
    textAlign: 'center',
  },
});

export default Start;