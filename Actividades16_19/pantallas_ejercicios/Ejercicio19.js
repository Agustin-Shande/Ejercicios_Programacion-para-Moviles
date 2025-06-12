import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, Platform } from 'react-native';

const patronesLetras = {
  A: [
    'AAAAAAAAAAA',
    '                A          A',
    '                A          A',
    '                A          A',
    'AAAAAAAAAAA',
  ],
  B: [
    'BBBBBBBBBBB',
    'B               B          B',
    'B               B          B',
    'B               B          B',
    'BBBBB     BBB',
  ],
  C: [
    'CCCCCCCCCCC',
    'C                          C',
    'C                          C',
    'C                          C',
    'C                          C',
  ],
  D: [
    'DDDDDDDDDD',
    'D                          D',
    'D                          D',
    'D                          D',
    '      DDDDDD',
  ],
  E: [
    'EEEEEEEEEEEE',
    'E              E           E',
    'E              E           E',
    'E                            E',
    'E                  ',
  ],
  F: [
    'FFFFFFFFFFFF',
    '               F           F',
    '               F           F',
    '               F           F',
    '                             F',
  ],
  G: [
    'GGGGGGGGGG',
    'G                          G',
    'G       G                G',
    'G       G                G',
    'GGGG                G',
  ],
  H: [
    'HHHHHHHHHH',
    '              H         ',
    '              H         ',
    '              H         ',
    'HHHHHHHHHH',
  ],
  I: [
    'I                            I',
    'I                            I',
    'IIIIIIIIIIIIIIIIIIIIIII',
    'I                            I',
    'I                            I',
  ],
  J: [
    'JJJJJJ              J',
    'J                          J',
    'J                          J',
    'JJJJJJJJJJJJ J', 
    '                             J',
  ],
  K: [
    'KKKKKKKKKKKK',
    '               K         ',
    '          K        K      ',
    '      K                 K   ',
    'K                           K',
  ],
  L: [
    'LLLLLLLLLLLLL',
    'L                  ',
    'L                  ',
    'L                  ',
  ],
  M: [
    'MMMMMMMMM',
    '                          M    ',
    '                     M         ',
    '                          M    ',
    'MMMMMMMMM',
  ],
  N: [
    'NNNNNNNNNNNNNNNNNNN',
    '                  N',
    '         N         ',
    'N                  ',
    'NNNNNNNNNNNNNNNNNNN',
  ],
  O: [
    'OOOOOOOOOOOOOOOOOOO',
    'O                 O',
    'O                 O',
    'O                 O',
    'OOOOOOOOOOOOOOOOOOO',
  ],
  P: [
    'PPPPPPPPPPPPPPPPPPP',
    '          P       P',
    '          P       P',
    '          P       P',
    '          PPPPPPPPP',
  ],
  Q: [
    'QQQQQQQQQQQQQQQQQQQ',
    'Q                 Q',
    'Q   Q             Q',
    'QQQQQQQQQQQQQQQQQQQ',
    '  Q                ',
  ],
  R: [
    'RRRRRRRRRRRRRRRRRRR',
    '          R       R',
    '       R  R       R',
    '    R     R       R',
    'R          RRRRRRR ',
  ],
  S: [
    'S              SSSSSS',
    'S              S          S',
    'S              S          S',
    'S              S          S',
    'SSSSSSS           S',
  ],
  T: [
    '                             T',
    'TTTTTTTTTTT',
    '                             T',
  ],
  U: [
    'UUUUUUUUUUUUUUUUUUU',
    'U                  ',
    'U                  ',
    'U                  ',
    'UUUUUUUUUUUUUUUUUUU',
  ],
  V: [
    '         VVVVVVVVVV',
    '    V              ',
    'V                  ',
    '    V              ',
    '         VVVVVVVVVV',
  ],
  W: [
    'WWWWWWWWWWWWWWWWWWW',
    '   W               ',
    '       W           ',
    '   W               ',
    'WWWWWWWWWWWWWWWWWWW',
  ],
  X: [
    'X                 X',
    '    X         X    ',
    '         X         ',
    '    X         X    ',
    'X                 X',
  ],
  Y: [
    '                  Y',
    '              Y    ',
    'YYYYYYYYYYYYY      ',
    '              Y    ',
    '                  Y',
  ],
  Z: [
    'Z                 Z',
    'Z    Z            Z',
    'Z        Z        Z',
    'Z            Z    Z',
    'Z                 Z',
  ],

};

const Ejercicio19 = () => {
  const [iniciales, setIniciales] = useState('');
  const [resultado, setResultado] = useState([]);

  const generarIniciales = () => {
    const letras = iniciales.toUpperCase().split('');
    let resultadoTemporal = [];

    letras.forEach(letra => {
      const patron = patronesLetras[letra];
      if (patron) {
        resultadoTemporal = [...resultadoTemporal, ...patron, '']; // '': espacio entre letras
      } else {
        resultadoTemporal.push('[Letra no soportada]', '');
      }
    });

    setResultado(resultadoTemporal);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>
        Act19.- Cree un programa que imprima sus iniciales en mayúsculas de imprenta, de manera que apunten hacia la parte inferior de la página (acostadas).
      </Text>

      <Text style={styles.title}>Iniciales Verticales</Text>
      <Text>Ingrese sus iniciales (por ejemplo: AJM):</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tus iniciales"
        value={iniciales}
        onChangeText={setIniciales}
      />
      <Button title="Mostrar Iniciales" onPress={generarIniciales} />

      <View style={{ marginTop: 20 }}>
        {resultado.map((linea, index) => (
          <Text key={index} style={styles.text}>{linea}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default Ejercicio19;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'flex-start',
  },
  titulo: {
    fontSize: 16,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    width: '100%',
    marginVertical: 10,
    borderRadius: 5,
  },
  text: {
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    fontSize: 16,
    lineHeight: 20,
  },
});