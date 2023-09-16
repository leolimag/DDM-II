import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import { styles } from './styles';

export default function App() {
  let [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [classificacao, setClassificacao] = useState('');
  const [resultado, setResultado] = useState('');

  let img = 'https://www.etiqueteando.com/wp-content/uploads/2021/07/IMC-2.jpg';

  function calculaIMC() {
    if (altura <= 0 || peso <= 0) {
      setClassificacao('Não utilize valores menores ou iguais a 0.');
      return;
    }

    if (!isDecimal(altura)) {
      altura = (altura / 100).toFixed(2);
    }

    let resultado = parseFloat(peso / (altura * altura)).toFixed(2);

    if (resultado < 18.5) {
      setClassificacao('Abaixo do Peso');
    } else if (resultado <= 24.9) {
      setClassificacao('Peso Normal');
    } else if (resultado <= 29.9) {
      setClassificacao('Sobrepeso');
    } else if (resultado <= 34.9) {
      setClassificacao('Obesidade Grau I');
    } else if (resultado <= 39.9) {
      setClassificacao('Obesidade Grau II');
    } else {
      setClassificacao('Obesidade Grau III ou Mórbida');
    }
  }

  function isDecimal(texto) {
    return texto.match(/^-?\d+\.\d+$/);
  }

  return (
    <View>
      <Text style={styles.titulo}> Cálculo IMC </Text>

      <Image
        source={{ uri: img }}
        style={{ width: 250, height: 150, alignSelf: 'center' }}
      />

      <TextInput
        style={styles.input}
        placeholder="Peso: "
        onChangeText={setPeso}
      />

      <TextInput
        style={styles.input}
        placeholder="Altura: "
        onChangeText={setAltura}
      />

      <Pressable style={styles.botao} onPress={calculaIMC}>
        <Text style={{ color: 'white' }}>Calcular</Text>
      </Pressable>

      <Text style={styles.texto}> {classificacao} </Text>
      <Text style={styles.texto}> {resultado} </Text>
    </View>
  );
}
