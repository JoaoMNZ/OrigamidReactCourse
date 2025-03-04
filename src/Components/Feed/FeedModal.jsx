import React from 'react'
import styles from './FeedModal.module.css'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import PhotoContent from '../Photo/PhotoContent'
import useFetch from '../../Hooks/useFetch'
import { PHOTO_GET } from '../../api'

const FeedModal = ({photo, setModalPhoto}) => {
  const { data, request, error, loading }= useFetch();
  React.useEffect(() => {
    async function callGetPhoto(){
      const { url, options } = PHOTO_GET(photo.id); 
      await request(url, options);
    }
    callGetPhoto();
  }, [photo]);

  function handleOutsideClick({target, currentTarget}){
    if(target === currentTarget) setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error}/>}
      {loading && <Loading/>}
      {data && <PhotoContent data={data}/>}
    </div>
  )
}

export default FeedModal