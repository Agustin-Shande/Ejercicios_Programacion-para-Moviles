import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Ejercicio14 = () => {
  const [pies, setPies] = useState('');
  const [metros, setMetros] = useState(null);

  const convertirAMetros = (valor) => {
    const cantidad = parseFloat(valor);
    if (!isNaN(cantidad)) {
      setMetros(cantidad * 0.3048);
    } else {
      setMetros(null);
    }
  };

  const handleInputChange = (texto) => {
    setPies(texto);
    convertirAMetros(texto);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Act14.- Cree un programa que permita convertir Convertir X pies a M metros. P=0.3048.</Text>
      <Text> </Text>
      <Text style={styles.title}>Conversión de Pies a Metros</Text>
      
      <Text>Ingrese la cantidad en pies:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={pies}
        onChangeText={handleInputChange}
        placeholder="Ej. 10"
      />

      {metros !== null && (
        <Text style={styles.resultado}>
          {pies} pies son {metros.toFixed(4)} metros.
        </Text>
      )}
    </View>
  );
};

export default Ejercicio14;

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
