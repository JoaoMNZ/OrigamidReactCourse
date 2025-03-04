import React from 'react'
import styles from './FeedPhotosItem.module.css'
import Image from '../Helper/Image'

const FeedPhotosItem = ({photo, setModalPhoto}) => {
  return (
    <li onClick={() => setModalPhoto(photo)} className={styles.photo}>
      <Image src={photo.src} alt={photo.title}/>
      <span className={styles.views}>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem