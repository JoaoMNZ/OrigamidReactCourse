import React from 'react'
import FeedModal from './FeedModal'
import FeedPhotos from './FeedPhotos'
import PropTypes, { number } from 'prop-types'

const Feed = ({user = 0}) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);

  React.useEffect(() => {
    let wait = false;
    
    function infiniteScroll(){
      if(infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if(scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }  
    }
    window.addEventListener('scroll', infiniteScroll);
    window.addEventListener('wheel', infiniteScroll);
    return () => {
      window.removeEventListener('scroll',infiniteScroll);
      window.removeEventListener('wheel',infiniteScroll);
    }
  }, [infinite]);

  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto}/>}
      {pages.map((page) => <FeedPhotos key={page} user={user} page={page} setModalPhoto={setModalPhoto} setInfinite={setInfinite}/>)}
    </div>
  )
}

Feed.propTypes = {
  user: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
}

export default Feed