import React, { useState } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');

  console.log(name, year, 'myData')
  const handleSubmit = () => {

  }

  {/* for google placeholder */ }
  // const handlePlaceSelection = (data, details = null) => {
  //   console.log('Selected Place:', data);
  //   console.log('Place Details:', details);
  // };

  return (
    <View style={styles.container}>

      {/* for google placeholder */}
      {/* <GooglePlacesAutocomplete
        placeholder='Search'
        onPress={handlePlaceSelection}
        query={{
          key: 'AIzaSyB3QpMvb2IXZtJ6VI_pfH5687HyHCGVnUs',
          language: 'en',
        }}
        styles={{
          textInputContainer: {
            backgroundColor: 'grey',
          },
          textInput: {
            height: 38,
            color: '#5d5d5d',
            fontSize: 16,
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
        
      /> */}
      <Text style={{ fontWeight: '800', fontSize: 30, color: '#5d5d5d', textAlign: 'center' }}>Add Books</Text>

      <View>
        <TextInput
          style={styles.input}
          placeholder='Enter a book name'
          onChangeText={setName}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder='Enter a book publish year'
          onChangeText={setYear}
          value={year}
        />


      </View>
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.text}>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 25
    // alignItems: 'center',
  },
  input: {
    backgroundColor: '#ffffff',
    width: '90%',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    borderWidth: 1,
    borderColor: '#cccccc',
    alignSelf: 'center'
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center'

  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default App;
