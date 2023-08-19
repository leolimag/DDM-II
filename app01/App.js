import { View, Text, Image } from 'react-native';


function App(){
    let img = 'https://static3.tcdn.com.br/img/img_prod/460977/replica_boneco_billy_jogos_mortais_jigsaw_trick_or_treat_studios_48061_1_20201211175122.jpg';


  return(
     <View style={{marginTop: 20, marginLeft:30}}>
      <Image source={{ uri:img }} style={{width: 250, height: 300, marginLeft: 15, marginBottom: 10}}/>

        <Text>Dados Pessoais: </Text>
          <Text style={{marginLeft:10}}>
            - Jackeline Ferreira
          </Text>
          <Text style={{marginLeft:10}}>
            - Leonardo Lima 
          </Text>
          <Text style={{marginLeft:10}}>
            - Pedro Gregorio
          </Text>

        <Text style={{paddingTop:8}}>Formação: </Text>
          <Text style={{marginLeft:10}}>
            Técnologo em Sistemas para Internet na FATEC-RL, em Santos (2021-2023)
          </Text>
        <Text style={{paddingTop:8}}>Experiência: </Text>
          <Text style={{marginLeft:10}}>
            - Estagiária em Marketing Digital em Mamba Digital (Jackeline)
          </Text>
          <Text style={{marginLeft:10}}>
            - Desenvolvedor Back-end Java em Age Technology (Leonardo)
          </Text>
          <Text style={{marginLeft:10}}>
            - Desenvolvedor Front-end Angular em DevMagic (Pedro)
          </Text>
        <Text style={{paddingTop:8}}>Projetos: </Text>
          <Text style={{marginLeft:10}}>
            Trabalho de Conclusão de Curso - Guardiã Rosa: projeto de auxílio à mulheres em situações de risco.
          </Text>
      </View>
  )
}


export default App;