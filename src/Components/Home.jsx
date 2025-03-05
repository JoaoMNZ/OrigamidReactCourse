import React from 'react'
import Feed from './Feed/Feed'
import Head from './Head'

const Home = () => {
  return (
    <section className='container mainContainer'>
      <Head title='Home' description='Dogs website home'/>
      <Feed/>
    </section>
  )
}

export default Home