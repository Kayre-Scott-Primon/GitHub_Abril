import React from "react";
import Home from "./screens/Home";
import Repository from "./screens/Repository";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Stack.Screen name='Repository' component={Repository} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Routes