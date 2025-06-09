import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Ejercicio10 = () => {
  const numeros = [19, 17, 21, 9, 12, 7];
  const suma = numeros.reduce((acc, num) => acc + num, 0);
  const promedio = suma / numeros.length;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Promedio de Números</Text>
      <Text style={styles.texto}>
        Los números son: {numeros.join(', ')}
      </Text>
      <Text style={styles.texto}>
        El promedio es: {promedio.toFixed(2)}
      </Text>
    </View>
  );
};

export default Ejercicio10;

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
  texto: {
    fontSize: 16,
    marginVertical: 5,
  },
});
