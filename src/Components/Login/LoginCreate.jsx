import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import Error from '../Helper/Error'
import useForm from '../../Hooks/useForm'
import buttonStyles from '../Forms/Button.module.css'
import { UserContext } from '../../UserContext'
import Head from '../Head'

const LoginCreate = () => {
    const username = useForm();
    const email = useForm('email');
    const password = useForm('password');
    const {error, loading, userSignup} = React.useContext(UserContext);

    async function handleSubmit(event){
      event.preventDefault();
      if(username.validate() && email.validate() && password.validate()) {
        userSignup(username.value, email.value, password.value);
      }
    }

    return (
      <section>
        <Head title="Sign up"/>
        <h1 className='title'>Sign up</h1>
        <form onSubmit={handleSubmit}>
          <Input label="Username" id="username" type="text" value={username} {...username}/>
          <Input label="Email" id="email" type="email" value={email} {...email}/>
          <Input label="Password" id="password" type="password" value={password} {...password}/>
          {loading ? <Button disabled className={buttonStyles.button}>Loading...</Button> 
          : <Button className={buttonStyles.button}>Sign up</Button>}
          {error && <Error error={error}/>}
        </form>
      </section>
    )
}

export default LoginCreate