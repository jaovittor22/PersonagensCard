import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';



function App() {

  const times = [
    {
      nome: 'Desenhos',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Filmes',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Séries',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Seriados',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    }
  ]


  const [personagens, setPersonagens] = useState([])

  const aoNovoPersonagemAdicionado = (personagem) => {
    setPersonagens([...personagens, personagem])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times = {times.map(time => time.nome)}  aoPersonagemCadastrado = {personagem => aoNovoPersonagemAdicionado(personagem)} />

      {times.map(time => <Time 
      key = {time.nome} 
      nome={time.nome} 
      corPrimaria = {time.corPrimaria} 
      corSecundaria = {time.corSecundaria}
      personagens = {personagens.filter (personagem => personagem.time === time.nome)}
       />)}
      <Rodape />


    </div>
  );
}

export default App;
