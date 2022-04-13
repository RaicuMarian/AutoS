import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets_main/images/logo.png';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput';

const SignInScreen = () => {
  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn("Sign in");
  }

  const onForgotPasswordPressed = () => {
    console.warn("Forgot Password");
  }

  const onSignInFacebook = () => {
    console.warn("Signing in with Facebook");
  }

  const onSignInGoogle = () => {
    console.warn("Signing in with Google");
  }

  const onSignInApple = () => {
    console.warn("Signing in with Apple");
  }

  const onSignUpPressed = () => {
    console.warn("Registering!");
  }


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>

      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.4}]} 
        resizeMode="contain"
      />

      <CustomInput
        placeholder="Username" value={username}
        setValue={setUsername} 
      />

      <CustomInput
        placeholder="Password" 
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />

      <CustomButton text="Sign In" onPress={onSignInPressed} />

      <CustomButton 
        text="Forgot password?" 
        onPress={onForgotPasswordPressed} 
        type="TERTIARY" 
      />

      <CustomButton 
        text="Sign In with Facebook" 
        onPress={onSignInFacebook} 
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton 
        text="Sign In with Google" 
        onPress={onSignInGoogle} 
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton 
        text="Sign In with Apple" 
        onPress={onSignInApple} 
        bgColor="#e3e3e3"
        fgColor="#363636"        
      />

      <CustomButton 
        text="Don't have an account? Create One!" 
        onPress={onSignUpPressed} 
        type="TERTIARY"
      />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
    },

    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 300, 
    },
});

export default SignInScreen