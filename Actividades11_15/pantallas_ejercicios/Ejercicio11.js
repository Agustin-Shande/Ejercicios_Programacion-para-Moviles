import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Ejercicio11 = () => {
  const [kilogramos, setKilogramos] = useState('');
  const [libras, setLibras] = useState(null);

  const convertir = (valor) => {
    setKilogramos(valor);
    const kg = parseFloat(valor);
    if (!isNaN(kg) && kg >= 0) {
      setLibras(kg * 2.2);
    } else {
      setLibras(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Act11.- Cree un programa que permita convertir kilogramos a libras "1 kilogramo = 2.2 libras". </Text>
      <Text> </Text>     
      <Text style={styles.title}>Conversión de Kilogramos a Libras</Text>
      <Text>Ingrese el peso en kilogramos:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={kilogramos}
        onChangeText={convertir}
        placeholder="Ej. 10"
      />

      {libras !== null && (
        <Text style={styles.resultado}>
          {kilogramos} kg equivalen a {libras.toFixed(2)} libras.
        </Text>
      )}
    </View>
  );
};

export default Ejercicio11;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    width: 200,
    borderRadius: 5,
    marginVertical: 10,
    textAlign: 'center',
  },
  resultado: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
