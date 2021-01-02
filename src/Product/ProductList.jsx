import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

class ProductList extends Component{
  state = {
    products: [
      {
        id: 0,
        name: 'Example Product',
        price: 50,
      },
      {
        id: 1,
        name: 'Example Product 2',
        price: 100,
      }
    ]
  }

  render() {
    return (
      <View>
        {
          this.state.products.map((item, index) => (
            <TouchableOpacity
              key = {item.id}
              style = {styles.container}
              onPress = {() => alert('Pressed!')}>
                <Text style = {styles.text}>
                  {item.name + ' - ' +  '$' + item.price}
                </Text>
            </TouchableOpacity>
          ))
        }
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  container: {
     padding: 10,
     marginTop: 3,
     backgroundColor: '#d9f9b1',
     borderWidth: 2,
     alignItems: 'center',
  },
  text: {
     color: '#4f603c',
     fontSize: 25,
  }
});

export default ProductList;