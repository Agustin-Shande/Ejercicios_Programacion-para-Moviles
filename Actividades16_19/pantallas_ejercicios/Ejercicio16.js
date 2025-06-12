import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Ejercicio16 = () => {
  const [pies, setPies] = useState('');
  const [pulgadas, setPulgadas] = useState(null);

  const convertirAPulgadas = (valor) => {
    const cantidad = parseFloat(valor);
    if (!isNaN(cantidad)) {
      setPulgadas(cantidad * 12);
    } else {
      setPulgadas(null);
    }
  };

  const handleInputChange = (texto) => {
    setPies(texto);
    convertirAPulgadas(texto);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Act16.- Cree un programa que permita convertir X pies a N pulgadas. 1 pie = a 12 pulgadas.</Text>
      <Text> </Text>
      <Text style={styles.title}>Conversión de Pies a Pulgadas</Text>

      <Text>Ingrese la cantidad en pies:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={pies}
        onChangeText={handleInputChange}
        placeholder="Ej. 5"
      />

      {pulgadas !== null && (
        <Text style={styles.resultado}>
          {pies} pies son {pulgadas.toFixed(2)} pulgadas.
        </Text>
      )}
    </View>
  );
};

export default Ejercicio16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
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
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
});
