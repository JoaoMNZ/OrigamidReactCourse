import React from 'react';
import { FormDatasProvider } from './Form/FormDatas';
import Form from './Form/Form';
import FormField from './Form/FormField';

const App = () => {
  const formFields = [
    { type: "text", id: "nome", labelName: "Nome" },
    { type: "email", id: "email", labelName: "Email" },
    { type: "password", id: "senha", labelName: "Senha" },
    { type: "text", id: "cep", labelName: "Cep" },
    { type: "text", id: "rua", labelName: "Rua" },
    { type: "text", id: "numero", labelName: "Numero" },
    { type: "text", id: "bairro", labelName: "Bairro" },
    { type: "text", id: "cidade", labelName: "Cidade" },
    { type: "text", id: "estado", labelName: "Estado" },
  ];

  return(
    <FormDatasProvider>
      <Form>
        {formFields.map(({ type,id,labelName }) => <FormField key={id} type={type} id={id} labelName={labelName}/>)}
      </Form>
    </FormDatasProvider>
  )
};

export default App;
