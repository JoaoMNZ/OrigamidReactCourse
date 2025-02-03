import React from 'react'

const Li = ({path, name}) => {
  return (
    <li><a href={path}>{name}</a></li>
  )
}

export default Li