import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Ejercicio16 from './pantallas_ejercicios/Ejercicio16';
import Ejercicio17 from './pantallas_ejercicios/Ejercicio17';
import Ejercicio18 from './pantallas_ejercicios/Ejercicio18';
import Ejercicio19 from './pantallas_ejercicios/Ejercicio19';

const Stack = createNativeStackNavigator();

// Pantalla de inicio / presentación
const Presentacion = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clase de Programación para Móviles II</Text>
      <Text style={styles.subtitle}>Esta app contiene ejercicios prácticos.</Text>

      <Button
        title="Ir al Ejercicio 16"
        onPress={() => navigation.navigate('Ejercicio16')}
      />
      <View style={{ marginVertical: 5 }} />
      <Button
        title="Ir al Ejercicio 17"
        onPress={() => navigation.navigate('Ejercicio17')}
      />
      <View style={{ marginVertical: 5 }} />
      <Button
        title="Ir al Ejercicio 18"
        onPress={() => navigation.navigate('Ejercicio18')}
      />
      <View style={{ marginVertical: 5 }} />
      <Button
        title="Ir al Ejercicio 19"
        onPress={() => navigation.navigate('Ejercicio19')}
      />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Presentacion} />
        <Stack.Screen name="Ejercicio16" component={Ejercicio16} />
        <Stack.Screen name="Ejercicio17" component={Ejercicio17} />
        <Stack.Screen name="Ejercicio18" component={Ejercicio18} />
        <Stack.Screen name="Ejercicio19" component={Ejercicio19} />
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
