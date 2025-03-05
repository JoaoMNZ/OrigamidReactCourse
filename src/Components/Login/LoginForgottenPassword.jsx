import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import { PASSWORD_LOST } from '../../api'
import Error from '../Helper/Error'
import Head from '../Head'

const LoginForgottenPassword = () => {
  
  const {data, loading, error, request,} = useFetch()
  const login = useForm()

  async function handleSubmit(event){
    event.preventDefault();
    if(login.validate()){
      const {url, options} = PASSWORD_LOST({login: login.value, url: window.location.href.replace('forgotten', 'reset')});
      await request(url, options);
    }
  }

  return (
    <section className='animeLeft'>
      <Head title="Password forgotten"/>
      <h1 className='title' style={{fontSize: '2.7rem'}}>Forgot your password?</h1>
      {data ? <p style={{color: '#4c1'}}>{data}</p> 
      : <form onSubmit={handleSubmit}>
          <Input label="Email" type="text" name="login" {...login}/>
          {loading ? <Button disabled>Sending...</Button> 
            : <Button>Send email</Button>}
          {error && <Error error={error}/>}
        </form>}
    </section>
  )
}

export default LoginForgottenPassword