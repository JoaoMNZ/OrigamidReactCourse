import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Feed from '../Feed/Feed'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'
import UserHeader from './UserHeader'

const Profile = () => {
  return (
    <section className='container'>
      <UserHeader/>
      <Routes>
        <Route path='/' element={<Feed/>}></Route>
        <Route path='/stats' element={<UserStats/>}/>
        <Route path='/post' element={<UserPhotoPost/>}/>
       </Routes>
    </section>
  )
}

export default Profile 