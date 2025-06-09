import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Ejercicio9 = () => {
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [area, setArea] = useState(null);

  const calcularArea = (valorBase, valorAltura) => {
    const baseNum = parseFloat(valorBase);
    const alturaNum = parseFloat(valorAltura);

    if (!isNaN(baseNum) && !isNaN(alturaNum) && baseNum > 0 && alturaNum > 0) {
      const resultado = (baseNum * alturaNum) / 2;
      setArea(resultado);
    } else {
      setArea(null);
    }
  };

  const manejarCambioBase = (texto) => {
    setBase(texto);
    calcularArea(texto, altura);
  };

  const manejarCambioAltura = (texto) => {
    setAltura(texto);
    calcularArea(base, texto);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Área de un Triángulo</Text>
      <Text>Ingrese la base del triángulo:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={base}
        placeholder="Ej. 10"
        onChangeText={manejarCambioBase}
      />

      <Text>Ingrese la altura del triángulo:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={altura}
        placeholder="Ej. 5"
        onChangeText={manejarCambioAltura}
      />

      {area !== null && (
        <Text style={styles.resultado}>Área: {area} unidades²</Text>
      )}
    </View>
  );
};

export default Ejercicio9;

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
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
