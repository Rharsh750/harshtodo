 
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import Tabs from './src/navigation/Tabs';
import { navigationRef } from './src/navigation/RootNavigation';
import CreateTask from './src/screens/CreateTask';
import SplashScreen from 'react-native-splash-screen'

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, [])
  
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="CreateTask" component={CreateTask}
         options={{headerTitleAlign: 'center', headerTintColor:'#fff', headerTransparent: true }} />
        <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}} />
      </Stack.Navigator>
  </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;