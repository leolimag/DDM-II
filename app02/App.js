import { View, Text, Button} from 'react-native';
import { useState } from 'react';
import {styles} from './styles.js';
 



function App(){
  let [counter, setCounter] = useState(0);

  function soma(){
    setCounter(valor => valor+1);
  }


  function subtracao(){
    if (counter > 0) {
      setCounter(valor => valor-1);
    }
  }

  return(
    <View style={styles.container}>
      <Text style={{textAlign: 'center', marginBottom: 10}}> Pessoas: {counter} </Text>

      <View style={styles.button}>
        <Button color='green' title='+' onPress={soma} style={styles.button}/>
      </View>

      <View style={styles.button}>
        <Button color='red' title='-' onPress={subtracao} style={styles.button}/>
      </View>
      
    </View>
  );
}


export default App;

