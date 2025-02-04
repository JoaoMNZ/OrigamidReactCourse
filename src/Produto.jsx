import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const {dados, limparDados} = React.useContext(GlobalContext);
  if(dados){
    return (
      <div>
        <p>{dados.map((dado,index) => <li key={index}>{dado.nome}</li>)}</p>
        <button onClick={limparDados}>Limpar dados</button>
      </div>
    )
  }
  return null;
};

export default Produto;
