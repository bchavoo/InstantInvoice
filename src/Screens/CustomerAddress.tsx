import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Button, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons';
import * as Location from 'expo-location';


const CustomerAddress = ({ navigation }: any) => {

  const [accuracy, setAccuracy] = useState(100);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [address, setAddress] = useState('');
  const [cityState, setCityState] = useState('');
  const [zip, setZip] = useState('');

  const onChangeAddress = (address:string) => {
    setAddress(address);
  }

  const onChangeCityState = (cityState:string) => {
    setCityState(cityState);
  }

  const onChangeZip = (zip:string) => {
    setZip(zip);
  }

  const onPressHome = () => {
    //Add a are you sure alert? It will reset customer information
    navigation.navigate('Start')
  }

  const onPressBack = () => {
    navigation.navigate('CustomerInformation')
  }

  const onPressGetAddress = async () => {
   try {
     const LOCATION = {
       latitude: latitude,
       longitude: longitude
     }

     let result = await Location.reverseGeocodeAsync(LOCATION);
      console.log(result);
   } catch (error) {
     console.error(error);
   }
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access location was denied');
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        console.log(location);
        setLatitude(+location.coords.latitude);
        setLongitude(+location.coords.longitude);
        setAccuracy(+location.coords.accuracy);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <View style={styles.main}>
      <Header
          leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => onPressBack() }}
          centerComponent={{ text: 'Instant Invoice', style: { color: '#fff', fontSize: 25 } }}
          rightComponent={{ icon: 'home', color: '#fff', onPress:() => onPressHome() }}
          backgroundColor='#0db512'
      />
      <Text style={styles.text}>Customer Information</Text>
      <View style={{ height: 15}}/>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={onChangeAddress}
        placeholder='Street'
        autoCapitalize='none'
        maxLength={30}
      />
      <TextInput
        style={styles.input}
        value={cityState}
        onChangeText={onChangeCityState}
        placeholder='City, State'
        autoCapitalize='none'
        maxLength={30}
      />
      <TextInput
        style={styles.input}
        value={zip}
        onChangeText={onChangeZip}
        placeholder='Zip code'
        autoCapitalize='none'
        maxLength={12}
      />
      <TouchableOpacity 
        style={styles.nextButton}
        onPress={() => onPressGetAddress()}
      >
        <Text style={styles.buttonText}>Get Address</Text>
      </TouchableOpacity>
      <View style={{ height: 50}}/>
      <TouchableOpacity 
        style={styles.nextButton}
        onPress={() => alert('Button pressed!')}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <StatusBar style='auto' />
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
    height: '8%',
    justifyContent: 'center',
    padding: 5,
    width: '50%',
  },
  buttonText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 27,
  },
  heading: {
    fontSize: 20,
    paddingBottom: '1%',
    paddingTop: '15%',
  },
  icon: {
    height: 250,
    width: 250,
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    fontSize: 20,
    height: '5%',
    margin: '4%',
    paddingHorizontal: '2%',
    width: '85%',
  },
  main: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
  },
  nextButton: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#0db512',
    borderColor: 'black',
    borderRadius: 8,
    borderWidth: 2,
    height: '8%',
    justifyContent: 'center',
    padding: 5,
    width: '50%',
  },
  placeholderText: {
    fontSize: 20,
    paddingTop: '6%',
    paddingRight: '35%',
  },
  text: {
    fontSize: 32,
    paddingVertical: '2.5%',
    textAlign: 'center',
  },
  textSpanish: {
    fontSize: 25,
    paddingBottom: '15%',
    textAlign: 'center',
  },
});

export default CustomerAddress;