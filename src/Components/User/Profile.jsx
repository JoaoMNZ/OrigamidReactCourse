import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Feed from '../Feed/Feed'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'
import UserHeader from './UserHeader'
import { UserContext } from '../../UserContext'
import NotFound from '../NotFound'
import Head from '../Head'

const Profile = () => {
  const {data} = React.useContext(UserContext);
  const {pathname} = useLocation();
  React.useEffect(() => {},[pathname])
  return (
    <section className='container'>
      <Head title="My account"/>
      <UserHeader/>
      <Routes>
        <Route path='/' element={<Feed user={data.id}/>}></Route>
        <Route path='/stats' element={<UserStats/>}/>
        <Route path='/post' element={<UserPhotoPost/>}/>
        <Route path='*' element={<NotFound/>}/>
       </Routes>
    </section>
  )
}

export default Profile 