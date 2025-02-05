import React from 'react'

const Select = ({value, setValue, options, ...props}) => {
  return (
    <select value={value} onChange={({ target }) => setValue(target.value)} {...props}>
        <option value="" disabled>Selecione</option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
    </select>
  )
}

export default Select