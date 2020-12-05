import { StyleSheet, View } from 'react-native';
import AppNavigation from './src/Screens/AppNavigation';
import React from 'react';



const App = () => {
  return (
    <View style={styles.container}>
      <AppNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default App;