import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Ejercicio8 = () => {
  const [lado, setLado] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcular = (valor) => {
    setLado(valor);
    const ladoNum = parseFloat(valor);
    if (!isNaN(ladoNum) && ladoNum > 0) {
      const area = ladoNum * ladoNum;
      const perimetro = 4 * ladoNum;
      setResultado({ area, perimetro });
    } else {
      setResultado(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Área y Perímetro de un Cuadrado</Text>
      <Text>Ingrese el valor del lado del cuadrado:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ej. 5"
        value={lado}
        onChangeText={calcular}
      />

      {resultado && (
        <View style={styles.resultado}>
          <Text>Área: {resultado.area} unidades²</Text>
          <Text>Perímetro: {resultado.perimetro} unidades</Text>
        </View>
      )}
    </View>
  );
};

export default Ejercicio8;

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
    alignItems: 'flex-start',
  },
});
