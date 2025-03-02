import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import Profile from './Components/User/Profile'
import { UserStorage } from './UserContext';
import ProtectedRoute from './Components/Helper/ProtectedRoute';

const App = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login/*" element={<ProtectedRoute path='/profile' order={false}><Login/></ProtectedRoute>}/>
          <Route path="/profile/*" element={<ProtectedRoute path='/login' order={true}><Profile/></ProtectedRoute>}/>
        </Routes>
        <Footer/>
      </UserStorage>
    </BrowserRouter>
  );
};

export default App;
