import React from 'react'
import FeedPhotosItem from './FeedPhotosItem'
import { UserContext } from '../../UserContext'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import styles from './FeedPhotos.module.css'

const FeedPhotos = ({setModalPhoto}) => {
    const {error, loading, getPhotos} = React.useContext(UserContext);
    const [ data, setData ] = React.useState();
    React.useEffect(() => {
        async function callGetPhotos() {
            const photos = await getPhotos();
            setData(photos);
        }
        callGetPhotos();
    }, [])
    if(error) return <Error error={error}/>
    if(loading) return <Loading/>
    if(data)
    return (
        <ul className={`${styles.feed} animeLeft`}>
            {data.map((photo) => <FeedPhotosItem setModalPhoto={setModalPhoto} key={photo.id} photo={photo}/>)} 
        </ul>
    )
    else return null;
}

export default FeedPhotos