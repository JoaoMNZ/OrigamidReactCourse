import React from 'react'
import Produto from "./Produto"

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo


const App = () => {
  const [carregando, setCarregando] = React.useState(false);
  const [dados, setDados] = React.useState(null);

  React.useEffect( () => {
    const storageDatas = localStorage.getItem("produto");
    storageDatas && fetchUrl(`https://ranekapi.origamid.dev/json/api/produto/${storageDatas}`)
  }, []);

  async function fetchUrl (url){
    try {
      setCarregando(true)
      const resposta = await fetch(url);
      const dados = await resposta.json();
      localStorage.setItem("produto", dados.id);
      setDados(dados);
    } catch (erro) {
      console.error("Erro ao buscar dados:", erro);
    }finally{
      setCarregando(false);
    }
  }

  return (
    <section>
      <h1>Preferência: {localStorage.getItem("produto")}</h1>
      <button style={{margin: "0.5rem"}} onClick={ () => fetchUrl("https://ranekapi.origamid.dev/json/api/produto/smartphone")}>Smartphone</button>
      <button style={{margin: "0.5rem"}} onClick={ () => fetchUrl("https://ranekapi.origamid.dev/json/api/produto/notebook")}>Notebook</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </section>
  )
};

export default App
