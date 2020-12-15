import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Header } from 'react-native-elements';
import { IconButton } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';

const CustomerAddress = ({ navigation }: any) => {

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

  const onPressHome = () =>
    Alert.alert(
      "Are you sure?",
      "This will erase any current customer data.",
      [
        {
          text: "Cancel",
        },
        { text: "Yes", onPress: () => navigation.navigate('Start') }
      ],
      { cancelable: false }
    );

  const onPressBack = () => {
    navigation.navigate('CustomerInformation')
  }

  const onPressNext = () => {
    navigation.navigate('Products')
  }

  const onPressMapMarker = async () => {
   try {
     const LOCATION = {
       latitude: latitude,
       longitude: longitude
     }

     let result = await Location.reverseGeocodeAsync(LOCATION);
      console.log(result);
      setAddress(result[0].name);
      setCityState(result[0].city + ', ' + result[0].region);
      setZip(result[0].postalCode);
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
      <Text style={styles.title}>Customer Address</Text>
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
      <IconButton
        icon="map-marker"
        color='red'
        size={75}
        onPress={() => onPressMapMarker()}
      />
      <Text style={styles.warning}>*Address based on GPS location.</Text>
      <TouchableOpacity 
        style={styles.nextButton}
        onPress={() => onPressNext()}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 27,
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
  title: {
    fontSize: 32,
    paddingVertical: '2.5%',
    textAlign: 'center',
  },
  warning: {
    color: 'red',
    fontSize: 14,
    paddingBottom: '40%',
  },
});

export default CustomerAddress;