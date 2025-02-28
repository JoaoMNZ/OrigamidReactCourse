import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginForgottenPassword from './LoginForgottenPassword'
import LoginResetPassword from './LoginResetPassword'
import { UserContext } from '../../UserContext'
import styles from './Login.module.css'

const Login = () => {
  const {login} = React.useContext(UserContext);
  
  if(login) return <Navigate to="/profile"/>
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
            <Route path='/' element={<LoginForm/>}/>
            <Route path='/create' element={<LoginCreate/>}/>
            <Route path='/forgotten' element={<LoginForgottenPassword/>}/>
            <Route path='/reset' element={<LoginResetPassword/>}/>
        </Routes>
      </div>
    </section>
  )
}

export default Login