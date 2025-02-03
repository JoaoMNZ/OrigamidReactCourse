import React from 'react'
import Produto from './Produto'

const Produtos = ({produtos}) => {
  return (
    <section>
        <h1 style={ {color: "green"} }>Produtos</h1>
        {produtos.map( (produto) => <Produto key={produto.nome} produto={produto}/> )}
    </section>
  )
}

export default Produtos