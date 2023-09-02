import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  input:{
    height: 35,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 15,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 30,
    marginTop: 10
  }, 
  titulo:{
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 600
  }, 
  botao:{
    alignSelf: 'center',
    border: '1px solid black',
    padding: 12,
    width: 200,
    textAlign: 'center',
    backgroundColor: '#6abce2',
    marginTop: 10
  }
})

export {styles};