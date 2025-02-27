import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginForgottenPassword from './LoginForgottenPassword'
import LoginResetPassword from './LoginResetPassword'

const Login = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<LoginForm/>}/>
            <Route path='/create' element={<LoginCreate/>}/>
            <Route path='/forgotten' element={<LoginForgottenPassword/>}/>
            <Route path='/reset' element={<LoginResetPassword/>}/>
        </Routes>
    </div>
  )
}

export default Login