import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';

const Ejercicio7 = () => {
  const [edad, setEdad] = useState('');
  const [datos, setDatos] = useState(null);

  const manejarCambioEdad = (texto) => {
    setEdad(texto);
    const edadNum = parseFloat(texto);
    if (!isNaN(edadNum)) {
      const decadas = Math.floor(edadNum / 10);
      const lustros = Math.floor(edadNum / 5);
      const años = edadNum;
      const meses = edadNum * 12;
      const semanas = edadNum * 52.1429; // promedio
      const dias = edadNum * 365.25; // incluye años bisiestos
      const horas = dias * 24;
      const minutos = horas * 60;

      setDatos({
        decadas,
        lustros,
        años: edadNum,
        meses: Math.floor(meses),
        semanas: Math.floor(semanas),
        dias: Math.floor(dias),
        horas: Math.floor(horas),
        minutos: Math.floor(minutos),
      });
    } else {
      setDatos(null);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Calculadora de Tiempo Vivido</Text>
      <Text>Ingrese su edad en años:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ej. 20"
        value={edad}
        onChangeText={manejarCambioEdad}
      />

      {datos && (
        <View style={styles.resultados}>
          <Text>Décadas: {datos.decadas}</Text>
          <Text>Lustros: {datos.lustros}</Text>
          <Text>Años: {datos.años}</Text>
          <Text>Meses: {datos.meses}</Text>
          <Text>Semanas: {datos.semanas}</Text>
          <Text>Días: {datos.dias}</Text>
          <Text>Horas: {datos.horas}</Text>
          <Text>Minutos: {datos.minutos}</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default Ejercicio7;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
  resultados: {
    marginTop: 20,
    alignItems: 'flex-start',
  },
});
