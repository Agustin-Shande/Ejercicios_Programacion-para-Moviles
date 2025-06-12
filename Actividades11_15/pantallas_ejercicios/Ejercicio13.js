import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Ejercicio13 = () => {
  const [pagoHora, setPagoHora] = useState('');
  const [salario, setSalario] = useState(null);

  const horasPorDia = 8;
  const diasQuincena = 15;

  const calcularSalario = (valor) => {
    const pago = parseFloat(valor);
    if (!isNaN(pago)) {
      const horasTotales = horasPorDia * diasQuincena;
      const salarioBruto = horasTotales * pago;
      const compensacion = salarioBruto * 0.02;
      const descuentoIMSS = salarioBruto * 0.015;
      const descuentoISPT = salarioBruto * 0.012;
      const salarioNeto = salarioBruto + compensacion - descuentoIMSS - descuentoISPT;

      setSalario({
        horasTotales,
        salarioBruto,
        compensacion,
        descuentoIMSS,
        descuentoISPT,
        salarioNeto,
      });
    } else {
      setSalario(null);
    }
  };

  const handleInputChange = (texto) => {
    setPagoHora(texto);
    calcularSalario(texto);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Act13.- Un obrero trabaja 8 horas diarias por quincena y le pagan 50 pesos la hora y de su salario tiene una compensación del 2% y un descuento del 1.5% del IMSS Y 1.2% del ISPT. Escriba un programa que permita calcular el salario neto del trabajador.</Text>
      <Text> </Text>
      <Text style={styles.title}>Cálculo de Salario Neto</Text>

      <Text>¿Cuánto gana por hora?</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={pagoHora}
        onChangeText={handleInputChange}
        placeholder="Ej. 50"
      />

      {salario && (
        <View style={styles.resultados}>
          <Text>Horas trabajadas por quincena: {salario.horasTotales}</Text>
          <Text>Salario bruto: ${salario.salarioBruto.toFixed(2)}</Text>
          <Text>Compensación (2%): +${salario.compensacion.toFixed(2)}</Text>
          <Text>Descuento IMSS (1.5%): -${salario.descuentoIMSS.toFixed(2)}</Text>
          <Text>Descuento ISPT (1.2%): -${salario.descuentoISPT.toFixed(2)}</Text>
          <Text style={styles.total}>Salario neto: ${salario.salarioNeto.toFixed(2)}</Text>
        </View>
      )}
    </View>
  );
};

export default Ejercicio13;

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
    alignItems: 'center',
  },
  total: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
});

