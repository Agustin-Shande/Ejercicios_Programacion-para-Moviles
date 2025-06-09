import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Ejercicio3 = () => {
  const [notas, setNotas] = useState(['', '', '', '']);
  const [promedio, setPromedio] = useState(null);

  const manejarCambio = (texto, indice) => {
    const nuevasNotas = [...notas];
    nuevasNotas[indice] = texto;
    setNotas(nuevasNotas);

    const numeros = nuevasNotas.map((n) => parseFloat(n));
    if (numeros.every((n) => !isNaN(n))) {
      const suma = numeros.reduce((acc, val) => acc + val, 0);
      setPromedio((suma / 4).toFixed(2));
    } else {
      setPromedio(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Act3.- Cree un programa que permita calcular el promedio de cuatro calificaciones ingresadas por el usuario</Text>
      <Text>Ingrese 4 calificaciones:</Text>
      {notas.map((nota, i) => (
        <TextInput
          key={i}
          style={styles.input}
          keyboardType="numeric"
          placeholder={`Nota ${i + 1}`}
          value={nota}
          onChangeText={(texto) => manejarCambio(texto, i)}
        />
      ))}
      {promedio !== null && (
        <Text style={styles.resultado}>Promedio: {promedio}</Text>
      )}
    </View>
  );
};

export default Ejercicio3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 22,
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
    marginVertical: 5,
    textAlign: 'center',
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
