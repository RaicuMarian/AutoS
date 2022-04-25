import React, {useState} from 'react'
import { View, Text, StyleSheet, ScrollView, } from 'react-native';
import {Picker} from '@react-native-picker/picker';

import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput';
import PickerAnFabricatie from '../../components/PickerAnFabricatie'

const SignUpScreen = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [selectedValue, setSelectedValue] = useState('Combustibil');

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

      {/* <CustomInput
        placeholder="Marca Masina"
        value={marcaMasina}
        setValue={setMarcaMasina} 
      /> */}

      <View style={styles.containerCombustibil}>
        <Text style={{
         width: '90%', 
          backgroundColor: 'white', 
          padding: 7,
           }}>Producator masina:</Text>
       <Picker
         selectedValue={selectedValue}
          style={{ width: '90%', backgroundColor: 'white', }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
       >
        <Picker.Item label="Abarth" value="Abarth" />
        <Picker.Item label="Alfa Romeo" value="Alfa Romeo"/>
        <Picker.Item label="Aston Martin" value="Aston Martin"/>
        <Picker.Item label="Audi" value="Audi"/>
        <Picker.Item label="Bentley" value="Bentley"/>
        <Picker.Item label="BMW" value="BMW"/>
        <Picker.Item label="Bugatti" value="Bugatti"/>
        <Picker.Item label="Cadillac" value="Cadillac"/>
        <Picker.Item label="Chevrolet" value="Chevrolet"/>
        <Picker.Item label="Chrysler" value="Chrysler"/>
        <Picker.Item label="Citroën" value="Citroën"/>
        <Picker.Item label="Dacia" value="Dacia"/>
        <Picker.Item label="Daewoo" value="Daewoo"/>
        <Picker.Item label="Daihatsu" value="Daihatsu"/>
        <Picker.Item label="Dodge" value="Dodge"/>
        <Picker.Item label="Donkervoort" value="Donkervoort"/>
        <Picker.Item label="DS" value="DS"/>
        <Picker.Item label="Ferrari" value="Ferrari"/>
        <Picker.Item label="Fiat" valuvalue="Fiat"/>
        <Picker.Item label="Fisker" value="Fisker"/>
        <Picker.Item label="Ford" value="Ford"/>
        <Picker.Item label="Honda" value="Honda"/>
        <Picker.Item label="Hummer" value="Hummer"/>
        <Picker.Item label="Hyundai" value="Hyundai"/>
        <Picker.Item label="Infiniti" value="Infiniti"/>
        <Picker.Item label="Iveco" value="Iveco"/>
        <Picker.Item label="Jaguar" value="Jaguar"/>
        <Picker.Item label="Jeep" value="Jeep"/>
        <Picker.Item label="Kia" value="Kia"/>
        <Picker.Item label="KTM" value="KTM"/>
        <Picker.Item label="Lada" value="Lada"/>
        <Picker.Item label="Lamborghini" value="Lamborghini"/>
        <Picker.Item label="Lancia" value="Lancia"/>
        <Picker.Item label="Land Rover" value="Land Rover"/>
        <Picker.Item label="Landwind" value="Landwind"/>
        <Picker.Item label="Lexus" value="Lexus"/>
        <Picker.Item label="Lotus" value="Lotus"/>
        <Picker.Item label="Maserati" value="Maserati"/>
        <Picker.Item label="Maybach" value="Maybach"/>
        <Picker.Item label="Mazda" value="Mazda"/>
        <Picker.Item label="McLaren" value="McLaren"/>
        <Picker.Item label="Mercedes-Benz" value="Mercedes-Benz"/>
        <Picker.Item label="MG" value="MG"/>
        <Picker.Item label="Mini" value="Mini"/>
        <Picker.Item label="Mitsubishi" value="Mitsubishi"/>
        <Picker.Item label="Morgan" value="Morgan"/>
        <Picker.Item label="Nissan" value="Nissan"/>
        <Picker.Item label="Opel" value="Opel"/>
        <Picker.Item label="Peugeot" value="Peugeot"/>
        <Picker.Item label="Porsche" value="Porsche"/>
        <Picker.Item label="Renault" value="Renault"/>
        <Picker.Item label="Rolls-Royce" value="Rolls-Royce"/>
        <Picker.Item label="Rover" value="Rover"/>
        <Picker.Item label="Saab" value="Saab"/>
        <Picker.Item label="Seat" value="Seat"/>
        <Picker.Item label="Skoda" value="Skoda"/>
        <Picker.Item label="Smart" value="Smart"/>
        <Picker.Item label="SsangYong" value="SsangYong"/>
        <Picker.Item label="Subaru" value="Subaru"/>
        <Picker.Item label="Suzuki" value="Suzuki"/>
        <Picker.Item label="Tesla" value="Tesla"/>
        <Picker.Item label="Toyota" value="Toyota"/>
        <Picker.Item label="Volkswagen" value="Volkswagen"/>
        <Picker.Item label="Volvo" value="Volvo"/>
      </Picker>
    </View>

      

      {/* <CustomInput
        placeholder="An Masina"
        value={anMasina}
        setValue={setAnMasina} 
      /> */}


      {/* Am incercat sa fac componente separate cu pickerele, dar se pare ca am o gramada de erori. o sa trebuiasca sa sterg tot ce am facut pana acum.  de umblat in sign up screen si in componente.*/}

    <PickerAnFabricatie />

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