import React from 'react'
import styles from './PhotoContent.module.css'
import { Link } from 'react-router-dom';
import PhotoComments from './PhotoComments';
import { UserContext } from '../../UserContext'
import PhotoDelete from './PhotoDelete';
import Image from '../Helper/Image';

const PhotoContent = ({data, single}) => {
  const {photo, comments} = data;
  const user = React.useContext(UserContext)
  return (
    <div className={`${styles.photo} ${single ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title}/>
      </div>  
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.login && user.data.username === photo.author ? <PhotoDelete id={photo.id}/> 
            : <Link to={`/profiles/${photo.author}`}>@{photo.author}</Link>}
            <span className={styles.views}>{photo.acessos}</span>
          </p>
          <h1 className='title'>
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} lb</li>
            <li>{photo.idade} {photo.idade > 1 ? 'years old' : 'year old'}</li>
          </ul>
        </div>
      </div>
      <PhotoComments single={single} id={photo.id} comments={comments} />
    </div>
  )
}

export default PhotoContent