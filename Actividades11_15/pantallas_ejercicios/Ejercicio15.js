import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Ejercicio15 = () => {
  const [pulgadas, setPulgadas] = useState('');
  const [metros, setMetros] = useState(null);

  const convertirAMetros = (valor) => {
    const cantidad = parseFloat(valor);
    if (!isNaN(cantidad)) {
      setMetros(cantidad * 0.0254);
    } else {
      setMetros(null);
    }
  };

  const handleInputChange = (texto) => {
    setPulgadas(texto);
    convertirAMetros(texto);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Act15.- Cree un programa que permita convertir N pulgadas a M metros. 1 Pulgada = 2.54 cm/100 = 0.0254.</Text>
      <Text> </Text>
      <Text style={styles.title}>Conversión de Pulgadas a Metros</Text>

      <Text>Ingrese la cantidad en pulgadas:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={pulgadas}
        onChangeText={handleInputChange}
        placeholder="Ej. 20"
      />

      {metros !== null && (
        <Text style={styles.resultado}>
          {pulgadas} pulgadas son {metros.toFixed(4)} metros.
        </Text>
      )}
    </View>
  );
};

export default Ejercicio15;

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
