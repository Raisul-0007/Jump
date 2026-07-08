import React from 'react'
import Navber from '../components/Navber';
import Banner from '../components/Banner';
import New from '../components/New';

const Home = () => {
  return (
    <div className='bg-[#090909]'>
      <Navber/>
      <Banner/>
      <New/>
    </div>
  )
}

export default Home
