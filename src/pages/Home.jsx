import React from 'react'
import Navber from '../components/Navber';
import Banner from '../components/Banner';
import New from '../components/New';
import Ads from '../components/Ads';

const Home = () => {
  return (
    <div className='bg-[#090909]'>
      <Navber/>
      <Banner/>
      <New/>
      <Ads/>
    </div>
  )
}

export default Home
