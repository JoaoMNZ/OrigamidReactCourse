import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
    const [title, setTitle] = React.useState();
    const {pathname} = useLocation();
    React.useEffect(() => {
      switch(pathname){
        case '/profile/stats': setTitle("Stats"); break;
        case '/profile/post': setTitle("Post your photo"); break;
        default: setTitle('My account');
      }
    }, [pathname])
  return (
    <section className={styles.header}>
        <h1 className='title'>{title}</h1>
        <UserHeaderNav/>
    </section>
  )
}

export default UserHeader