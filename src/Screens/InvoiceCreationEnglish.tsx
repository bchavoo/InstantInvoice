import { ContactsListWrapper } from 'expo-contacts-wrapper';
import ContactsPicker from 'react-native-contacts-chooser';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Header } from 'react-native-elements';
import { selectContact, selectContactPhone } from 'react-native-select-contact';

const InvoiceCreatinEnglish = ({ navigation }: any) => {
  const onPressHome = () => {
    navigation.navigate('Start')
  }

  const onPressGetContact = () => {
    const phone = getPhoneNumber();
    console.log(phone);
  }

  const finishSelectingContacts = (selectedContacts) => {
    console.log("Selected Contacts", selectedContacts);
  };

  function getPhoneNumber() {
    return selectContactPhone()
      .then(selection => {
        if (!selection) {
          return null;
        }
        
        let { contact, selectedPhone } = selection;
        console.log(`Selected ${selectedPhone.type} phone number ${selectedPhone.number} from ${contact.name}`);
        return selectedPhone.number;
      })
      .catch((error) => {
        console.error(error);
      });  
}

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
        <ContactsListWrapper onFinish={finishSelectingContacts} />
      </View>
      <View style={{ height: 15}}/>
      <TextInput
        style={styles.input}
        placeholder='First Name'
        autoCapitalize='none'
        maxLength={15}
      />
      <TextInput
        style={styles.input}
        placeholder='Last Name'
        autoCapitalize='none'
        maxLength={15}
      />
      <TextInput
        style={styles.input}
        placeholder='Phone Number'
        autoCapitalize='none'
        maxLength={10}
      />
      <TextInput
        style={styles.input}
        placeholder='Address'
        autoCapitalize='none'
        maxLength={50}
      />
      <TextInput
        style={styles.input}
        placeholder='Email'
        autoCapitalize='none'
        maxLength={25}
      />
      <View style={{ height: 80}}/>
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
  contactInput: {
    borderBottomColor: 'black',
    borderRadius: 6,
    borderWidth: 1,
    height: 150,
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

export default InvoiceCreatinEnglish;