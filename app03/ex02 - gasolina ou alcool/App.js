import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Image} from 'react-native';
import { styles } from './styles'


function App(){
  const [gasolina, setGasolina] = useState('');
  const [alcool, setAlcool] = useState('');
  const [resultado, setResultado] = useState('');

  let img = 'https://www.ontruck.com.br/images/noticias/12621/17379c6c815382892a5ee6545fb1655a.jpg';


  function compara(){
    let resultado = alcool / gasolina;

    if (resultado >= 0.7) {
      setResultado('Compensa utilizar gasolina.');
      return;
    }
      setResultado('Compensa utilizar álcool.');
  }


  return(
    <View>

      <Text style={styles.titulo}> Álcool || Gasolina </Text>

      <Image source={{ uri: img }} style={{ width: 250, height: 150, 
      alignSelf: 'center'}}/>
 

      <TextInput
      style={styles.input}
      placeholder="Preço do álcool: "
      onChangeText={setAlcool}
      />

      <TextInput
      style={styles.input}
      placeholder="Preço da gasolina: "
      onChangeText={setGasolina}
      />

      <Pressable style={styles.botao} onPress={compara}>
        <Text style={{ color : 'white'}}>Verificar</Text>
      </Pressable>

      <Text style={styles.texto}> {resultado} </Text>
    </View>
  );
}

export default App;
