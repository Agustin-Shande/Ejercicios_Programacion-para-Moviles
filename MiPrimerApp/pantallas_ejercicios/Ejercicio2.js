import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Ejercicio2 = () => {
  const [radio, setRadio] = useState('');
  const [area, setArea] = useState(null);
  const [perimetro, setPerimetro] = useState(null);

  const calcular = (valor) => {
    const r = parseFloat(valor);
    if (!isNaN(r)) {
      const p = 2 * Math.PI * r;
      const a = Math.PI * r * r;
      setPerimetro(p.toFixed(2));
      setArea(a.toFixed(2));
    } else {
      setPerimetro(null);
      setArea(null);
    }
  };

  const handleChange = (texto) => {
    setRadio(texto);
    calcular(texto);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Act2.- Cree un programa que solicite la radio de un círculo y entregue como salida el perímetro y el área</Text>
      <Text>Ingrese el radio del círculo:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={radio}
        onChangeText={handleChange}
        placeholder="Ej. 3.5"
      />
      {area && perimetro && (
        <View style={styles.resultados}>
          <Text>Radio: {radio}</Text>
          <Text>Perímetro: {perimetro}</Text>
          <Text>Área: {area}</Text>
        </View>
      )}
    </View>
  );
};

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
  resultados: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default Ejercicio2;