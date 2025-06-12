import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Ejercicio12 = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultados, setResultados] = useState(null);

  const calcularOperaciones = (valor1, valor2) => {
    const a = parseFloat(valor1);
    const b = parseFloat(valor2);

    if (!isNaN(a) && !isNaN(b)) {
      setResultados({
        suma: a + b,
        resta: a - b,
        multiplicacion: a * b,
        division: b !== 0 ? (a / b) : 'No se puede dividir entre 0',
      });
    } else {
      setResultados(null);
    }
  };

  const manejarCambioNum1 = (texto) => {
    setNum1(texto);
    calcularOperaciones(texto, num2);
  };

  const manejarCambioNum2 = (texto) => {
    setNum2(texto);
    calcularOperaciones(num1, texto);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Act12.- Elabore un programa que permita recibir dos números y mostrar la suma, resta, multiplicación y división de esos dos números.</Text>
      <Text> </Text>
      <Text style={styles.title}>Operaciones Básicas</Text>

      <Text>Ingrese el primer número:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={num1}
        placeholder="Ej. 10"
        onChangeText={manejarCambioNum1}
      />

      <Text>Ingrese el segundo número:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={num2}
        placeholder="Ej. 5"
        onChangeText={manejarCambioNum2}
      />

      {resultados && (
        <View style={styles.resultados}>
          <Text>Suma: {resultados.suma}</Text>
          <Text>Resta: {resultados.resta}</Text>
          <Text>Multiplicación: {resultados.multiplicacion}</Text>
          <Text>División: {resultados.division}</Text>
        </View>
      )}
    </View>
  );
};

export default Ejercicio12;

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
    marginBottom: 15,
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
  resultados: {
    marginTop: 20,
  },
});
