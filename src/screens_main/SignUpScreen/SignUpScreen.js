import React, {useState} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput';

const SignUpScreen = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [marcaMasina, setMarcaMasina] = useState('');
  const [anMasina, setAnMasina] = useState('');
  const [combustibilMasina, setCombustibilMasina] = useState('');
  const [selectedValue, setSelectedValue] = useState("Combustibil");


  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  


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

      <Text style={styles.title}>
        Create an account:
      </Text>

      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername} 
      />

      <CustomInput
        placeholder="Marca Masina"
        value={marcaMasina}
        setValue={setMarcaMasina} 
      />

      <CustomInput
        placeholder="An Masina"
        value={anMasina}
        setValue={setAnMasina} 
      />

      <CustomInput
        placeholder="Combustibil Masina"
        value={combustibilMasina}
        setValue={setCombustibilMasina} 
      />

      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Benzina" value="benzina" />
        <Picker.Item label="Diesel" value="benzina" />
        <Picker.Item label="Hibrid" value="hibrid" />
        <Picker.Item label="Electrica" value="electrica" />
      </Picker>

      <CustomInput
        placeholder="Email"
        value={email}
        setValue={setEmail} 
      />

      <CustomInput
        placeholder="Password" 
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />

      <CustomInput
        placeholder="Repeat Password" 
        value={passwordRepeat}
        setValue={setPasswordRepeat}
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
    
    title: {
      fontSize: 24, 
      fontWeight: 'bold',
      color: '#6eacc9',
      margin: 25,
    }


});

export default SignUpScreen