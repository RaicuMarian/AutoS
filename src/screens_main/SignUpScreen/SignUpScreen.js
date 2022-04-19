import React, {useState} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {Picker, CheckBox} from '@react-native-picker/picker';
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

     <View style={styles.containerCombustibil}>
      <Text style={{
        width: '90%', 
        backgroundColor: 'white', 
        padding: 7,
         }}>Combustibil:</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ width: '90%', backgroundColor: 'white', }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Benzina" value="benzina" />
        <Picker.Item label="Diesel" value="benzina" />
        <Picker.Item label="Hibrid" value="hibrid" />
        <Picker.Item label="Electrica" value="electrica" />
      </Picker>
     </View>

      {/* De veridicat maine codul pentru checker care este asta de jos. */}

     <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Do you like React Native?</Text>
      </View>
      <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text>
    </View>

    {/* Pana aici */}

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
    },

// Style copiat din pagina de Custom input, folosit pentru pickerul de combustibil.

    containerCombustibil: {
      
      backgroundColor: 'white',
      width: '90%',

      borderColor: '#e8e8e8',
      borderWidth: 1,
      borderRadius: 5,

      paddingHorizontal: 15,
      marginVertical: 5,
  },


});

export default SignUpScreen