import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from "./screens/Home";
import Repository from "./screens/Repository";

const Stack = createNativeStackNavigator()

const App = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
            <Stack.Screen name='Repository' component={Repository} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
)

export default App