import React from 'react';
import useFetch from './Hooks/useFetch';

const App = () => {
  const { request, error } = useFetch();
  const [ resposta, setResposta ] = React.useState(false);
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

  function handleSubmit(event) {
    event.preventDefault();
    request('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then(( {response} ) => setResposta(response.ok))
  }

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" value={form.nome} onChange={handleChange}/>

      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={form.email} onChange={handleChange}/>

      <label htmlFor="senha">Senha</label>
      <input type="password" id="senha" value={form.senha} onChange={handleChange}/>

      <label htmlFor="cep">Cep</label>
      <input type="text" id="cep" value={form.cep} onChange={handleChange}/>

      <label htmlFor="rua">Rua</label>
      <input type="text" id="rua" value={form.rua} onChange={handleChange}/>

      <label htmlFor="numero">Numero</label>
      <input type="text" id="numero" value={form.numero} onChange={handleChange}/>

      <label htmlFor="bairro">Bairro</label>
      <input type="text" id="bairro" value={form.bairro} onChange={handleChange}/>

      <label htmlFor="cidade">Cidade</label>
      <input type="text" id="cidade" value={form.cidade} onChange={handleChange}/>

      <label htmlFor="estado">Estado</label>
      <input type="text" id="estado" value={form.estado} onChange={handleChange}/>

      <button>Submit</button>
      {resposta ? <p>Enviado com sucesso</p> : null}
      {error ? <p>{error}</p> : null}
    </form>
  )
};

export default App;
