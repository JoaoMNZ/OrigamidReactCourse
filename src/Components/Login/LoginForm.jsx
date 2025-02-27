import React from 'react'
import { Link } from 'react-router-dom'
import URL from '../../URL'
import useFetch from "../../Hooks/useFetch"
import useForm from "../../Hooks/useForm"
import Input from '../Forms/Input'
import Button from '../Forms/Button'

const LoginForm = () => {
    const username = useForm();
    const password = useForm();
    const {request} = useFetch();

    async function handleSubmit(event){
        event.preventDefault();
        if(username.validate() && password.validate()){
            const {response, json} = await request(`${URL}/jwt-auth/v1/token`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({username: username.value, password: password.value})
            })
        }
    }

    return (
        <section>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Username" id="username" type="text" value={username} {...username}/>
                <Input label="Password" id="password" type="password" value={password} {...password}/>
                <Button>Sign up</Button>
            </form>
            <Link to="/login/create">Sign up</Link>
        </section>
    )
}

export default LoginForm