import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import Logo from '../../../assets_main/images/logo.png';

const SignInScreen = () => {
  return (
    <View style={styles.root}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
    },

    logo: {
        width: '70%',
        height: 280,
    },
});

export default SignInScreen