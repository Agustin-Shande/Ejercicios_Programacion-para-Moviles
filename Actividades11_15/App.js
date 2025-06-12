import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Ejercicio11 from './pantallas_ejercicios/Ejercicio11';
import Ejercicio12 from './pantallas_ejercicios/Ejercicio12';
import Ejercicio13 from './pantallas_ejercicios/Ejercicio13';
import Ejercicio14 from './pantallas_ejercicios/Ejercicio14';
import Ejercicio15 from './pantallas_ejercicios/Ejercicio15';

const Stack = createNativeStackNavigator();

// Pantalla de inicio / presentación
const Presentacion = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clase de Programación para Móviles II</Text>
      <Text style={styles.subtitle}>Esta app contiene ejercicios prácticos.</Text>

      <Button
        title="Ir al Ejercicio 11"
        onPress={() => navigation.navigate('Ejercicio11')}
      />
      <View style={{ marginVertical: 5 }} />
      <Button
        title="Ir al Ejercicio 12"
        onPress={() => navigation.navigate('Ejercicio12')}
      />
      <View style={{ marginVertical: 5 }} />
      <Button
        title="Ir al Ejercicio 13"
        onPress={() => navigation.navigate('Ejercicio13')}
      />
      <View style={{ marginVertical: 5 }} />
      <Button
        title="Ir al Ejercicio 14"
        onPress={() => navigation.navigate('Ejercicio14')}
      />
      <View style={{ marginVertical: 5 }} />
      <Button
        title="Ir al Ejercicio 15"
        onPress={() => navigation.navigate('Ejercicio15')}
      />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Presentacion} />
        <Stack.Screen name="Ejercicio11" component={Ejercicio11} />
        <Stack.Screen name="Ejercicio12" component={Ejercicio12} />
        <Stack.Screen name="Ejercicio13" component={Ejercicio13} />
        <Stack.Screen name="Ejercicio14" component={Ejercicio14} />
        <Stack.Screen name="Ejercicio15" component={Ejercicio15} />
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
