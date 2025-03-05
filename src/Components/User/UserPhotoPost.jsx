import React from 'react'
import styles from './UserPhotoPost.module.css'
import Input from '../../Components/Forms/Input'
import Button from '../../Components/Forms/Button'
import buttonStyles from '../../Components/Forms/Button.module.css'
import useForm from '../../Hooks/useForm'
import { UserContext } from '../../UserContext'
import { useNavigate } from 'react-router-dom'
import Error from '../Helper/Error'
import Head from '../Head'

const UserPhotoPost = () => {
  const {loading, error, postPhoto} = React.useContext(UserContext);
  const name = useForm();
  const weight = useForm('number');
  const age = useForm('number');
  const [img, setImg] = React.useState({preview: undefined, raw: undefined});
  const navigate = useNavigate()

  async function handleSubmit(event){
    event.preventDefault();
    if(name.validate(), weight.validate(), age.validate()){
      const formData = new FormData();
      formData.append('nome', name.value);
      formData.append('peso', weight.value);
      formData.append('idade', age.value);
      formData.append('img', img.raw);
      const response = await postPhoto(formData)
      if(response) navigate('/profile');
    }
  }

  function handleImgChange({target}){
    setImg({
      preview: target.files[0] && URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    })
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Post your photo"/>
      <form onSubmit={handleSubmit}>
        <Input label="Name" id="name" type="text" {...name}/>
        <Input label="Weight" id="weight" type="number" {...weight}/>
        <Input label="Age" id="age" type="number" {...age}/>
        <input type="file" name="img" id="img" onChange={handleImgChange} required accept="image/*"/>
        {loading ? <Button disabled className={buttonStyles.button}>Sending...</Button> 
        : <Button className={buttonStyles.button}>Send</Button>}
        {error && <Error error={error}/>}
      </form>
      <div>
        {img.preview && <div className={styles.preview} style={{backgroundImage: `url('${img.preview}')`}}></div> }
      </div>
    </section>
  )
}

export default UserPhotoPost