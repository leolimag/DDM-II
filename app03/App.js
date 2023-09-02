import React, { useState } from 'react';
import { View, Text, TextInput, Pressable} from 'react-native';
import { styles } from './styles'


function App(){
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState('');


  function multiplica(){
    setResultado('Resultado: ' + valor1*valor2);
  }


  return(
    <View>

      <Text style={styles.titulo}> Multiplicador de Números </Text>

      <TextInput
      style={styles.input}
      placeholder="Digite o primeiro número: "
      onChangeText={setValor1}
      />

      <TextInput
      style={styles.input}
      placeholder="Digite o segundo número: "
      onChangeText={setValor2}
      />

      <Pressable style={styles.botao} onPress={multiplica}>
        <Text>Calcular</Text>
      </Pressable>


      <Text style={styles.texto}> {resultado} </Text>
    </View>
  );
}

export default App;
