import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Switch, ScrollView } from 'react-native';
import { styles } from './styles'
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

function App(){
  let initial_escolaridade = [
    {id: 1, nome: 'Ensino Fundamental completo'},
    {id: 2, nome: 'Ensino Médio completo'},
    {id: 3, nome: 'Superior incompleto'},
    {id: 4, nome: 'Superior completo'},
    {id: 5, nome: 'Mestrado'},
  ]

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [value, setValue] = useState(0);
  const [escolaridade, setEscolaridade] = useState(0);
  const [sexo, setSexo] = useState('');
  const [escolaridades, setEscolaridades] = useState(initial_escolaridade);
  const [status, setStatus] = useState(false);
  const [resultado, setResultado] = useState('');

  let escolaridadeItem = escolaridades.map( (valor, chave) => {
    return <Picker.Item key={chave} value={valor.id} label={valor.nome} />
  })

  function getResultado() {
    let brasileiro = (status) ? 'Sim' : 'Não';

    setResultado("Nome: " + nome + "\nIdade:" + idade + "\nSexo: " + sexo
    + "\nEscolaridade: " + escolaridades[escolaridade].nome + "\nLimite: " + value.toFixed(0) + "\nBrasileiro: " + brasileiro);
  }

  return(
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}> Abertura de Conta </Text>
  
        <TextInput
        style={styles.input}
        placeholder="Nome: "
        onChangeText={setNome}
        />

        <TextInput
        style={styles.input}
        placeholder="Idade: "
        onChangeText={setIdade}
        />

        Sexo: <Picker
        selectedValue={sexo}
        onValueChange={ (itemValue, itemIndex) => setSexo(itemValue) }
        >
          <Picker.Item key={1} value={"Masculino"} label="Masculino" />
          <Picker.Item key={2} value={"Feminino"} label="Feminino" />
        </Picker>
        
        Escolaridade: <Picker
          selectedValue={escolaridade+1}
          onValueChange={ (itemValue, itemIndex) => setEscolaridade(itemValue) }
          >
          {escolaridadeItem}
        </Picker>

        Limite: 
        <Slider
          minimumValue={0}
          maximumValue={100}
          onValueChange={(value) => setValue(value)}
          value={value}
        />
        <Text style={styles.texto}> {value.toFixed(0)} </Text>

        Brasileiro: 
        <Switch
          value={status}
          onValueChange={ (valorSwitch) => setStatus(valorSwitch) }
        />

        <Pressable style={styles.botao} onPress={getResultado}>
          <Text style={{ color : 'white'}}>Confirmar</Text>
        </Pressable>


        {resultado}
      </ScrollView>
    </View>
  );
}

export default App;