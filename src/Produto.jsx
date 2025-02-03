import React from 'react'

const Produto = ({dados}) => {
  return (
    <div>
        <h1>{dados.nome}</h1>
        <p>R$ {dados.preco}</p>
        {dados.fotos.map( (foto) => <img key={foto.titulo} src={foto.src} alt={foto.titulo} />)}
    </div>
  )
}

export default Produto