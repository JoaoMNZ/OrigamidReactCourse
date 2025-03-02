import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import MyPhotos from '../../Assets/feed.svg?react'
import Stats from '../../Assets/estatisticas.svg?react'
import PostPhoto from '../../Assets/adicionar.svg?react'
import Logout from '../../Assets/sair.svg?react'
import styles from './UserHeaderNav.module.css'

const UserHeaderNav = () => {
    const [mobile, setMobile] = React.useState(null);
    const { userLogout } = React.useContext(UserContext);

    function handleLogout(){
        userLogout()
    }
    return (
        <nav className={styles.nav}>
            <NavLink to='/profile' end><MyPhotos/> {mobile && 'My Photos'}</NavLink>
            <NavLink to='/profile/stats'><Stats/> {mobile && 'Stats'}</NavLink>
            <NavLink to='/profile/post'><PostPhoto/> {mobile && 'Post Photo'}</NavLink>
            <button onClick={handleLogout}><Logout/> {mobile && 'Logout'}</button>
        </nav>
  )
}

export default UserHeaderNav