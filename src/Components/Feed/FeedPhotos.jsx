import React from 'react'
import FeedPhotosItem from './FeedPhotosItem'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import styles from './FeedPhotos.module.css'
import useFetch from '../../Hooks/useFetch'
import { PHOTOS_GET } from '../../api'

const FeedPhotos = ({user, page, setModalPhoto, setInfinite}) => {
    const {data, error, loading, request} = useFetch();

    React.useEffect(() => {
        async function callGetPhotos() {
            const total = 6;
            const {url, options} = PHOTOS_GET({page, total, user});
            const {response, json} = await request(url, options);
            if(response && response.ok && json.length < total) setInfinite(false);
        }
        callGetPhotos();
    }, [request,user,page, setInfinite])

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