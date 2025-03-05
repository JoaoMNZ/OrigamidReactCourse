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
import Photo from './Components/Photo/Photo';
import UserProfile from './Components/User/UserProfile';
import NotFound from './Components/NotFound';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <UserStorage>
        <Header/>
        <main className='AppBody'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login/*" element={<ProtectedRoute path='/profile' order={false}><Login/></ProtectedRoute>}/>
            <Route path="/profile/*" element={<ProtectedRoute path='/login' order={true}><Profile/></ProtectedRoute>}/>
            <Route path="/profiles/:user" element={<UserProfile/>}/>
            <Route path="/photo/:id" element={<Photo/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </main>
        <Footer/>
      </UserStorage>
    </BrowserRouter>
    </div>
    
  );
};

export default App;
