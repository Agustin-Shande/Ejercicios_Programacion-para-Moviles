import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Ejercicio17 = () => {
  const [galones, setGalones] = useState('');
  const [litros, setLitros] = useState(null);

  const convertirALitros = (valor) => {
    const cantidad = parseFloat(valor);
    if (!isNaN(cantidad)) {
      setLitros(cantidad * 3.78541);
    } else {
      setLitros(null);
    }
  };

  const handleInputChange = (texto) => {
    setGalones(texto);
    convertirALitros(texto);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Act17.- Cree un programa que permita convertir G galones a L litros.</Text>
      <Text> </Text>      
      <Text style={styles.title}>Conversión de Galones a Litros</Text>

      <Text>Ingrese la cantidad en galones:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={galones}
        onChangeText={handleInputChange}
        placeholder="Ej. 10"
      />

      {litros !== null && (
        <Text style={styles.resultado}>
          {galones} galones son {litros.toFixed(4)} litros.
        </Text>
      )}
    </View>
  );
};

export default Ejercicio17;

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
