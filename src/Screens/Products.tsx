import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Header } from 'react-native-elements';
import { IconButton } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import ProductList from '../Product/ProductList.jsx'

const Products = ({ navigation }: any) => {

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
    navigation.navigate('CustomerAddress')
  }

  return (
    <View style={styles.main}>
      <Header
          leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => onPressBack() }}
          centerComponent={{ text: 'Instant Invoice', style: { color: '#fff', fontSize: 25 } }}
          rightComponent={{ icon: 'home', color: '#fff', onPress:() => onPressHome() }}
          backgroundColor='#0db512'
      />
      <Text style={styles.title}>Products</Text>
      <View style={{ height: 15}}/>
      <ProductList />
      <View style={{ height: 15}}/>
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

export default Products;