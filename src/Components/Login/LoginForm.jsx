import React from 'react'
import { Link } from 'react-router-dom'
import useForm from "../../Hooks/useForm"
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import { UserContext } from '../../UserContext'
import Error from '../Helper/Error'
import styles from './LoginForm.module.css'
import buttonStyles from '../Forms/Button.module.css'

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
            <h1 className='title'>Log In</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input label="Username" id="username" type="text" value={username} {...username}/>
                <Input label="Password" id="password" type="password" value={password} {...password}/>
                {loading ? <Button disabled>Loading...</Button> : <Button>Log In</Button>}
                <Error error={error}/>
            </form>
            <Link className={styles.forgotten} to="/login/forgotten">Forgot password?</Link>
            <div className={styles.signup}>
                <h2 className={styles.subtitle}>Create a new account</h2>
                <p>Doesn't have an account yet?</p>
                <Link className={buttonStyles.button} to="/login/create">Sign Up</Link>
            </div>
            
        </section>
    )
}

export default LoginForm