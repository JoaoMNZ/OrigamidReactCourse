import React from 'react'
import Ul from '../Header/Ul'

const Produto = ({produto}) => {
  return (
    <div style={ {border: "1px solid gray", margin: "1rem 0", padding: "1rem"} }>
        <p>{produto.nome}</p>
        <Ul>
            {produto.propriedades.map( (propriedade,index) => <li key={index}>{propriedade}</li>)}
        </Ul>
    </div>
  )
}

export default Produto