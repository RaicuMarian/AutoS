/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {SafeAreaView, StyleSheet, Text} from 'react-native';
 import SignInScreen from './src/screens_main/SignInScreen';
 import SignUpScreen from './src/screens_main/SignUpScreen';

// Onboarding-ul este linia de cod de mai jos.

//  import { Onboarding } from './app/screens';
 
 
 const App = () => {
   return (
    //  <Onboarding />     - Tot pentru onboarding
    <SafeAreaView style={styles.root}>
      <SignUpScreen />
    </SafeAreaView>
   );
 };

 const styles = StyleSheet.create({
   root: {
     flex: 1,
     backgroundColor: '#F9FBFC'
   },
 });
 
 export default App;