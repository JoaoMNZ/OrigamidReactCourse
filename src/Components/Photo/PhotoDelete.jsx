import React from 'react'
import { PHOTO_DELETE } from '../../api'
import useFetch from '../../Hooks/useFetch'
import styles from './PhotoDelete.module.css'

const PhotoDelete = ({id}) => {
    const{ loading, request } = useFetch();

    async function handleClick(){
        const confirm = window.confirm('Are you sure that you want to delete the photo?');
        if(confirm) {
            const {url, options} = PHOTO_DELETE(id);
            const {response} = await request(url,options);
            if(response.ok) window.location.reload();
        }
    }
  return (
    <>
        {loading ? <button className={styles.delete} disabled>Deleting...</button> 
        : <button onClick={handleClick} className={styles.delete}>Delete</button>}
    </>
    
  )
}

export default PhotoDelete