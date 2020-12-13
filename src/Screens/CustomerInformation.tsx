import { ContactsListWrapper } from 'expo-contacts-wrapper';
import ContactsPicker from 'react-native-contacts-chooser';

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Header } from 'react-native-elements';
import { selectContact, selectContactPhone } from 'react-native-select-contact';

const CustomerInformation = ({ navigation }: any) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const onChangeFirstName = (firstName:string) => {
    setFirstName(firstName);
  }

  const onChangeLastName = (lastName:string) => {
    setLastName(lastName);
  }

  const onChangePhoneNumber = (phoneNumber:string) => {
    setPhoneNumber(phoneNumber);
  }

  const onPressHome = () => {
    navigation.navigate('Start')
  }

  const onPressNext = () => {
    navigation.navigate('CustomerAddress')
  }

  const finishSelectingContact = (selectedContact) => {
    if(selectedContact[1]) {
      alert('Please only select one contact!');
    } else if(selectedContact[0]) {
      setFirstName(selectedContact[0].firstName);
      setLastName(selectedContact[0].lastName);
      setPhoneNumber(selectedContact[0].phoneNumbers[0].number);
      if(selectedContact[0].addresses) {
        const fullAddress = selectedContact[0].addresses[0].street + ', ' + selectedContact[0].addresses[0].city + ', ' + selectedContact[0].addresses[0].region;
        setAddress(fullAddress);
      } else {
        setAddress('');
      }
    } else {
      alert('Select a contact!');
    }
  };



  return (
    <View style={styles.main}>
      <Header
          leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => onPressHome() }}
          centerComponent={{ text: 'Instant Invoice', style: { color: '#fff', fontSize: 25 } }}
          rightComponent={{ icon: 'home', color: '#fff', onPress:() => onPressHome() }}
          backgroundColor='#0db512'
      />
      <Text style={styles.text}>Customer Information</Text>
      {/* <TouchableOpacity 
        style={styles.buttonContainer}
        onPress={() => onPressGetContact()}
      >
        <Text style={styles.buttonText}>Import Contact</Text>
      </TouchableOpacity> */}
      <View style={styles.contactInput}>
        <ContactsListWrapper onFinish={finishSelectingContact} />
      </View>
      <View style={{ height: 15}}/>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={onChangeFirstName}
        placeholder='First Name'
        autoCapitalize='none'
        maxLength={15}
      />
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={onChangeLastName}
        placeholder='Last Name'
        autoCapitalize='none'
        maxLength={15}
      />
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={onChangePhoneNumber}
        placeholder='Phone Number'
        autoCapitalize='none'
        maxLength={10}
      />
      <View style={{ height: 50}}/>
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
  contactInput: {
    borderBottomColor: 'black',
    borderRadius: 6,
    borderWidth: 1,
    height: 250,
    padding: 5,
    width: '80%',
  },
  heading: {
    fontSize: 20,
    paddingBottom: '1%',
    paddingTop: '15%',
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    fontSize: 20,
    height: '5%',
    margin: '4%',
    paddingHorizontal: '2%',
    width: '65%',
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

export default CustomerInformation;