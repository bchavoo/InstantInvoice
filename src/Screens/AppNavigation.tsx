import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import InvoiceCreationEnglish from './InvoiceCreationEnglish';
import Start from './Start';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="InvoiceCreationEnglish" component={InvoiceCreationEnglish} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;