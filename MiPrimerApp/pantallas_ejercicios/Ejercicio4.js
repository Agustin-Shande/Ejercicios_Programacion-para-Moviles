import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Ejercicio4 = () => {
  const [cm, setCm] = useState('');
  const [pulgadas, setPulgadas] = useState(null);

  const manejarCambio = (texto) => {
    setCm(texto);
    const valor = parseFloat(texto);
    if (!isNaN(valor)) {
      const resultado = valor / 2.54;
      setPulgadas(resultado.toFixed(2));
    } else {
      setPulgadas(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Act4.- Cree un programa que convierta de centímetros a pulgadas. Recuerda que una pulgada es igual a 2.54 centímetros</Text>
      <Text>Ingrese una medida en centímetros:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ej. 10"
        value={cm}
        onChangeText={manejarCambio}
      />
      {pulgadas !== null && (
        <Text style={styles.resultado}>
          {cm} cm = {pulgadas} pulgadas
        </Text>
      )}
    </View>
  );
};

export default Ejercicio4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
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
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
