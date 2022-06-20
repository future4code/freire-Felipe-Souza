import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto from './img/foto.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= { foto } 
          nome="Felipe Souza" 
          descricao="Oi, eu sou o Felipe. Sou aluno da Labenu. Adoro tirar soneca a tarde, xingar pessoas aleatoriamente no LoL e estudar sobre tecnologia no geral."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className='card-pequeno'>
        <CardPequeno
        imagem1="https://cdn-icons-png.flaticon.com/512/561/561127.png"
        imagem2="https://cdn-icons-png.flaticon.com/512/1479/1479518.png"
        email="E-mail: united.fss@gmail.com"
        endereco="Endereço: Rua Presidente Médice 22"/>
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="FreeLance" 
          descricao="Designer gráfico e gerenciamento de mídias sociais" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="INH" 
          descricao="Recepcionista no Ilhéus North Hotel." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
