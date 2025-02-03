import React from 'react'
import Produto from "./Produto"

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const App = () => {
  const [carregando, setCarregando] = React.useState(false);
  const [dados, setDados] = React.useState(null);

  async function fetchUrl (url){
    try {
      setCarregando(true)
      const resposta = await fetch(url);
      const dados = await resposta.json();
      setDados(dados);
    } catch (erro) {
      console.error("Erro ao buscar dados:", erro);
    }finally{
      setCarregando(false);
    }
  }

  return (
    <section>
      <button style={{margin: "0.5rem"}} onClick={ () => fetchUrl("https://ranekapi.origamid.dev/json/api/produto/tablet")}>Tablet</button>
      <button style={{margin: "0.5rem"}} onClick={ () => fetchUrl("https://ranekapi.origamid.dev/json/api/produto/smartphone")}>Smartphone</button>
      <button style={{margin: "0.5rem"}} onClick={ () => fetchUrl("https://ranekapi.origamid.dev/json/api/produto/notebook")}>Notebook</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </section>
  )
};

export default App
