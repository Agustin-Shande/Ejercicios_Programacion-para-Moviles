import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Ejercicio18 = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState(null);

  const convertirAFahrenheit = (valor) => {
    const temp = parseFloat(valor);
    if (!isNaN(temp)) {
      const resultado = (temp * 9) / 5 + 32;
      setFahrenheit(resultado);
    } else {
      setFahrenheit(null);
    }
  };

  const handleInputChange = (texto) => {
    setCelsius(texto);
    convertirAFahrenheit(texto);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Act18.- Cree un programa que permita convertir grados centígrados a grados Fahrenheit.</Text>
      <Text> </Text>
      <Text style={styles.title}>Conversión de °C a °F</Text>

      <Text>Ingrese la temperatura en grados centígrados (°C):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={celsius}
        onChangeText={handleInputChange}
        placeholder="Ej. 25"
      />

      {fahrenheit !== null && (
        <Text style={styles.resultado}>
          {celsius} °C son {fahrenheit.toFixed(2)} °F
        </Text>
      )}
    </View>
  );
};

export default Ejercicio18;

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
