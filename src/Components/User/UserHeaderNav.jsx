import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import MyPhotos from '../../Assets/feed.svg?react'
import Stats from '../../Assets/estatisticas.svg?react'
import PostPhoto from '../../Assets/adicionar.svg?react'
import Logout from '../../Assets/sair.svg?react'
import useMedia from '../../Hooks/useMedia'
import styles from './UserHeaderNav.module.css'

const UserHeaderNav = () => {
    const mobile = useMedia('(max-width: 40rem');
    const [mobileMenu, setMobileMenu] = React.useState(false);
    const { userLogout } = React.useContext(UserContext);

    const {pathname} = useLocation();

    function handleLogout(){
        userLogout()
    }

    React.useEffect(() => {
        setMobileMenu(false);
    }, [pathname]);

    return (
        <>
            {mobile && <button className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} 
            aria-label='Menu' onClick={() => setMobileMenu(!mobileMenu)}></button>}
            <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
                <NavLink to='/profile' end> <MyPhotos/> {mobile && 'My Photos'} </NavLink>
                <NavLink to='/profile/stats'> <Stats/> {mobile && 'My Stats'} </NavLink>
                <NavLink to='/profile/post'> <PostPhoto/> {mobile && 'Post Photo'} </NavLink>
                <button onClick={handleLogout}> <Logout/> {mobile && 'Logout'} </button>
            </nav>
        </>
  )
}

export default UserHeaderNav