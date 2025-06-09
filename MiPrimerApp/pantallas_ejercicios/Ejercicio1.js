// screens/Ejercicio1.js
import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const Ejercicio1 = () => {
  const [text, setText] = useState('');

  const handleInputChange = (newText) => {
    setText(newText);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Act1.- Cree un programa que solicita el nombre del usuario y lo salude por su nombre</Text>
      <Text>Ingrese su nombre:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleInputChange}
        value={text}
        placeholder="Ingresa el texto aquí"
      />
      <Text style={styles.output}>Hola: {text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    width: 200,
    borderRadius: 5,
    marginVertical: 10,
  },
  output: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Ejercicio1;
