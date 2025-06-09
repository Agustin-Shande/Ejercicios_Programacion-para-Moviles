import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Ejercicio1 from './pantallas_ejercicios/Ejercicio1';
import Ejercicio2 from './pantallas_ejercicios/Ejercicio2';
import Ejercicio3 from './pantallas_ejercicios/Ejercicio3';
import Ejercicio4 from './pantallas_ejercicios/Ejercicio4';
import Ejercicio5 from './pantallas_ejercicios/Ejercicio5';

const Stack = createNativeStackNavigator();


const Presentacion = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Clase de Programación para Móviles II</Text>
      <Text style={styles.subtitulo}>Esta app contiene ejercicios prácticos.</Text>

      <Button
        title="Ir al Ejercicio 1"
        onPress={() => navigation.navigate('Ejercicio 1')}
      />
      <View style={{ marginVertical: 5 }} />
      <Button
        title="Ir al Ejercicio 2"
        onPress={() => navigation.navigate('Ejercicio 2')}
      />
      <View style={{ marginVertical: 5 }} />
      <Button
        title="Ir al Ejercicio 3"
        onPress={() => navigation.navigate('Ejercicio 3')}
      />
      <View style={{ marginVertical: 5 }} />
      <Button
        title="Ir al Ejercicio 4"
        onPress={() => navigation.navigate('Ejercicio 4')}
      />
      <View style={{ marginVertical: 5 }} />
      <Button
        title="Ir al Ejercicio 5"
        onPress={() => navigation.navigate('Ejercicio 5')}
      />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Presentacion} />
        <Stack.Screen name="Ejercicio 1" component={Ejercicio1} />
        <Stack.Screen name="Ejercicio 2" component={Ejercicio2} />
        <Stack.Screen name="Ejercicio 3" component={Ejercicio3} />
        <Stack.Screen name="Ejercicio 4" component={Ejercicio4} />
        <Stack.Screen name="Ejercicio 5" component={Ejercicio5} />
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
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 25,
  },
});
