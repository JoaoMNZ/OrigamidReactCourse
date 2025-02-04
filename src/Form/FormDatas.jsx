import React from 'react';

export const FormDatasContext = React.createContext();

export const FormDatasProvider = ({ children }) => {
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: ""
  })

  function handleChange({target}){
    const {value, id} = target;
    setForm({...form, [id]: value})
  }

  return (
    <FormDatasContext.Provider value={{ form, handleChange }}>
      {children}
    </FormDatasContext.Provider>
  );
};