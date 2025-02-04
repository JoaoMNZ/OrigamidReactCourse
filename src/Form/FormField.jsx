import React from 'react'
import { FormDatasContext } from './FormDatas';

const FormField = ({type, id, labelName}) => {
const {form, handleChange} = React.useContext(FormDatasContext);
  return (
    <>
        <label htmlFor={id}>{labelName}</label>
        <input type={type} id={id} value={form[id]} onChange={handleChange}/>
    </>
  )
}

export default FormField