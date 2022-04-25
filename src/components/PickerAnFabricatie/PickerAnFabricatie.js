import { View, Text, StyleSheet, ScrollView, } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React from 'react'

const PickerAnFabricatie = () => {
  const [selectedValue, setSelectedValue] = useState('AnFabricatie');

  return (
   <View style={styles.containerCombustibil}>
      <Text style={{
        width: '90%', 
        backgroundColor: 'white', 
        padding: 7,
         }}>Anul fabricatiei:</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ width: '90%', backgroundColor: 'white', }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label='1990' value="1990" />
        <Picker.Item label='1991' value="1991" />
        <Picker.Item label='1992' value="1992" />
        <Picker.Item label='1993' value="1993" />
        <Picker.Item label='1994' value="1994" />
        <Picker.Item label='1995' value="1995" />
        <Picker.Item label='1996' value="1996" />
        <Picker.Item label='1997' value="1997" />
        <Picker.Item label='1998' value="1998" />
        <Picker.Item label='1999' value="1999" />
        <Picker.Item label='2000' value="2000" />
        <Picker.Item label='2001' value="2001" />
        <Picker.Item label='2002' value="2002" />
        <Picker.Item label='2003' value="2003" />
        <Picker.Item label='2004' value="2004" />
        <Picker.Item label='2005' value="2005" />
        <Picker.Item label='2006' value="2006" />
        <Picker.Item label='2007' value="2007" />
        <Picker.Item label='2008' value="2008" />
        <Picker.Item label='2009' value="2009" />
        <Picker.Item label='2010' value="2010" />
        <Picker.Item label='2011' value="2011" />
        <Picker.Item label='2012' value="2012" />
        <Picker.Item label='2013' value="2013" />
        <Picker.Item label='2014' value="2014" />
        <Picker.Item label='2015' value="2015" />
        <Picker.Item label='2016' value="2016" />
        <Picker.Item label='2017' value="2017" />
        <Picker.Item label='2018' value="2018" />
        <Picker.Item label='2019' value="2019" />
        <Picker.Item label='2020' value="2020" />
        <Picker.Item label='2021' value="2021" />
        <Picker.Item label='2022' value="2022" />
      </Picker>
    </View>
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


export default PickerAnFabricatie;