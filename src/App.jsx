import React from 'react';
import Input from './Form/Input'
import Select from './Form/Select'
import Radio from './Form/Radio';
import Checkbox from './Form/Checkbox'

const App = () => {
  const [name,setName] = React.useState("");
  const [select,setSelect] = React.useState("");
  const [radio,setRadio] = React.useState("");
  const [cores,setCores] = React.useState([]);

  return (
    <form>
      <Input id="name" label="Name" value={name} setValue={setName} required="required"/>
      <Select value={select} setValue={setSelect} options={["Notebook","Smartphone","Tablet"]}/>
      <Radio value={radio} setValue={setRadio} options={["Masculino","Feminino"]}/>
      <Checkbox value={cores} setValue={setCores} options={["Vermelho","Azul"]}/>
    </form>
  );
};

export default App;
