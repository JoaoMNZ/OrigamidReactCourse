import React from 'react'
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_RESET } from '../../api';
import Error from '../Helper/Error';
import { useNavigate } from 'react-router-dom';
import Head from '../Head';

const LoginResetPassword = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const password = useForm('password')
  const {error, loading, request} = useFetch();
  const navigate = useNavigate();
  console.log(key);

  async function handleSubmit(event){
    event.preventDefault();
    if(password.validate()){
      const {url, options} = PASSWORD_RESET({login, key, password: password.value});
      const {response} = await request(url, options);
      if(response.ok) navigate('/login');
    }
  }

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key');
    const login = params.get('login');
    if(key) setKey(key);
    if(login) setLogin(login);
  }, [])

  return (
    <section className='animeLeft'>
      <Head title="Password reset"/>
      <h1 className='title' style={{fontSize: '2.7rem'}}>Reset your password </h1>
      <form onSubmit={handleSubmit}>
        <Input label="New password" type="password" name="password" {...password}/>
        {loading ? <Button disabled>Reseting...</Button> : <Button>Reset</Button>}
        {error && <Error error={error}/>}
      </form>
    </section>
  )
}

export default LoginResetPassword