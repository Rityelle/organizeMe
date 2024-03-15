import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './app/home';
import Inital from './app/register';

const Stack = createNativeStackNavigator();

const Routes: React.FC = () =>  {
  return (
  
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Initial" component={Inital} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

export default Routes;