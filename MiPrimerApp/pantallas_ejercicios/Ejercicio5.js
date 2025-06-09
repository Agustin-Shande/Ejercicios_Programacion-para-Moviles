import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Ejercicio5 = () => {
  const [catetoA, setCatetoA] = useState('');
  const [catetoB, setCatetoB] = useState('');
  const [hipotenusa, setHipotenusa] = useState(null);

  const calcularHipotenusa = (a, b) => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (!isNaN(numA) && !isNaN(numB)) {
      const h = Math.sqrt(numA ** 2 + numB ** 2);
      setHipotenusa(h.toFixed(2));
    } else {
      setHipotenusa(null);
    }
  };

  const cambioA = (texto) => {
    setCatetoA(texto);
    calcularHipotenusa(texto, catetoB);
  };

  const cambioB = (texto) => {
    setCatetoB(texto);
    calcularHipotenusa(catetoA, texto);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Act5.-  Escriba un programa que reciba como entrada las longitudes de los dos catetos aa y bb de un triángulo rectángulo, y que entregue como salida el largo de la hipotenusa cc del triangulo, dado por el teorema de Pitágoras</Text>
      <Text>Ingrese las longitudes de los dos catetos:</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Cateto A"
        value={catetoA}
        onChangeText={cambioA}
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Cateto B"
        value={catetoB}
        onChangeText={cambioB}
      />

      {hipotenusa !== null && (
        <Text style={styles.resultado}>
          Hipotenusa C = {hipotenusa}
        </Text>
      )}
    </View>
  );
};

export default Ejercicio5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginVertical: 10,
    textAlign: 'center',
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
