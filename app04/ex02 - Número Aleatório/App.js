import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import { styles } from './styles';

export default function App() {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');

  let img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD3dPkPPBZ3u29KXxWJ9cUmISsHrOUdjY74T77-0ubeQ&s';

  function getRandomNumber() {
    let numeroAleatorio = Math.floor(Math.random() * 11);

    if (numero <= 0 || numero > 10) {
      setResultado('Utilize valores de 0 a 10.');
      return;
    }

    if (numero == numeroAleatorio) {
      setResultado('Resposta correta!');
      return;
    }
    setResultado('Resposta incorreta...');
  }

  return (
    <View>
      <Text style={styles.titulo}>Jogo do Número Aleatório</Text>

      <Image
        source={{ uri: img }}
        style={{ width: 250, height: 150, alignSelf: 'center' }}
      />

      <Text style={styles.texto}> Pense em um número de 0 a 10 </Text>

      <TextInput
        style={styles.input}
        onChangeText={setNumero}
      />

      <Pressable style={styles.botao} onPress={getRandomNumber}>
        <Text style={{ color: 'white' }}>Descobrir</Text>
      </Pressable>

      <Text style={styles.texto}> {resultado} </Text>
    </View>
  );
}
