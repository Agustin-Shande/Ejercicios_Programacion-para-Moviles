import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Ejercicio6 = () => {
  const [horaActual, setHoraActual] = useState('');
  const [horasAdelante, setHorasAdelante] = useState('');
  const [horaFinal, setHoraFinal] = useState(null);

  const calcularHoraFinal = (t, h) => {
    const actual = parseInt(t);
    const adicional = parseInt(h);

    if (!isNaN(actual) && !isNaN(adicional)) {
      const resultado = (actual + adicional) % 24;
      setHoraFinal(resultado);
    } else {
      setHoraFinal(null);
    }
  };

  const manejarCambioHora = (texto) => {
    setHoraActual(texto);
    calcularHoraFinal(texto, horasAdelante);
  };

  const manejarCambioAdicional = (texto) => {
    setHorasAdelante(texto);
    calcularHoraFinal(horaActual, texto);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Hora Futura</Text>
      <Text>Ingrese la hora actual (0 - 23):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ej. 10"
        value={horaActual}
        onChangeText={manejarCambioHora}
      />

      <Text>¿Cuántas horas adelante desea calcular?</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ej. 5"
        value={horasAdelante}
        onChangeText={manejarCambioAdicional}
      />

      {horaFinal !== null && (
        <Text style={styles.resultado}>
          En {horasAdelante} hora(s), el reloj marcará las {horaFinal}:00
        </Text>
      )}
    </View>
  );
};

export default Ejercicio6;

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

