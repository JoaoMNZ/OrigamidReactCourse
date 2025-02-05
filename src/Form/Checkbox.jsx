import React from 'react'

const Checkbox = ({value, setValue, options}) => {
    function handleChange({ target }) {
        if (target.checked) {
            setValue([...value, target.value]);
        } else {
            setValue(value.filter((valueElement) => valueElement !== target.value));
        }
      }
      
      function handleChecked(option) {
        return value.includes(option);
      }

  return (
    options.map( (option) => 
        <label key={option} style={{textTransform: "capitalize"}}>
            <input type="checkbox" value={option} checked={handleChecked(option)} onChange={handleChange}/> 
            {option}
        </label>)
  )
}

export default Checkbox