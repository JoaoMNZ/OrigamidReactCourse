import React from 'react'
import Ul from './Ul'
import Li from './Li'

const Header = () => {
  return (
    <header>
        <Ul>
          <Li path="/" name="Home"/>
          <Li path="/produtos" name="Produtos"/>
        </Ul>
    </header>
  )
}

export default Header