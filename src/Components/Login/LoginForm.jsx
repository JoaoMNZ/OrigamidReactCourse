import React from 'react'
import { Link } from 'react-router-dom'
import useForm from "../../Hooks/useForm"
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import { UserContext } from '../../UserContext'
import Error from '../Helper/Error'
import styles from './LoginForm.module.css'
import buttonStyles from '../Forms/Button.module.css'
import Head from '../Head'

const LoginForm = () => {
    const username = useForm();
    const password = useForm();
    const {userLogin, error, loading} = React.useContext(UserContext);

    async function handleSubmit(event){
        event.preventDefault();
        if(username.validate() && password.validate()){
            userLogin(username.value, password.value);
        }
    }

    return (
        <section className="animeLeft">
            <Head title="Log in"/>
            <h1 className='title'>Log in</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input label="Username" id="username" type="text" value={username} {...username}/>
                <Input label="Password" id="password" type="password" value={password} {...password}/>
                {loading ? <Button disabled>Loading...</Button> : <Button>Log in</Button>}
                <Error error={error && 'Incorrect username or password.'}/>
            </form>
            <Link className={styles.forgotten} to="/login/forgotten">Forgot password?</Link>
            <div className={styles.signup}>
                <h2 className={styles.subtitle}>Create a new account</h2>
                <p>Doesn't have an account yet?</p>
                <Link className={buttonStyles.button} to="/login/create">Sign up</Link>
            </div>
            
        </section>
    )
}

export default LoginForm