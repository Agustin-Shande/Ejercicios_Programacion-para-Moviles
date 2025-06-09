import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Ejercicio6 from './pantallas_ejercicios/Ejercicio6';
import Ejercicio7 from './pantallas_ejercicios/Ejercicio7';
import Ejercicio8 from './pantallas_ejercicios/Ejercicio8';
import Ejercicio9 from './pantallas_ejercicios/Ejercicio9';
import Ejercicio10 from './pantallas_ejercicios/Ejercicio10';

const Stack = createNativeStackNavigator();

// Pantalla de inicio / presentación
const Presentacion = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clase de Programación para Móviles II</Text>
      <Text style={styles.subtitle}>Esta app contiene ejercicios prácticos.</Text>

      <Button
        title="Ir al Ejercicio 6"
        onPress={() => navigation.navigate('Ejercicio6')}
      />
      <View style={{ marginVertical: 5 }} />
      <Button
        title="Ir al Ejercicio 7"
        onPress={() => navigation.navigate('Ejercicio7')}
      />
      <View style={{ marginVertical: 5 }} />
      <Button
        title="Ir al Ejercicio 8"
        onPress={() => navigation.navigate('Ejercicio8')}
      />
      <View style={{ marginVertical: 5 }} />
      <Button
        title="Ir al Ejercicio 9"
        onPress={() => navigation.navigate('Ejercicio9')}
      />
      <View style={{ marginVertical: 5 }} />
      <Button
        title="Ir al Ejercicio 10"
        onPress={() => navigation.navigate('Ejercicio10')}
      />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Presentacion} />
        <Stack.Screen name="Ejercicio6" component={Ejercicio6} />
        <Stack.Screen name="Ejercicio7" component={Ejercicio7} />
        <Stack.Screen name="Ejercicio8" component={Ejercicio8} />
        <Stack.Screen name="Ejercicio9" component={Ejercicio9} />
        <Stack.Screen name="Ejercicio10" component={Ejercicio10} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 25,
  },
});
