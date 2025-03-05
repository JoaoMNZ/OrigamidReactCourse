import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginForgottenPassword from './LoginForgottenPassword'
import LoginResetPassword from './LoginResetPassword'
import styles from './Login.module.css'
import NotFound from '../NotFound'

const Login = () => {
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
            <Route path='/' element={<LoginForm/>}/>
            <Route path='/create' element={<LoginCreate/>}/>
            <Route path='/forgotten' element={<LoginForgottenPassword/>}/>
            <Route path='/reset' element={<LoginResetPassword/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </section>
  )
}

export default Login