import React from 'react'
import Navber from '../components/Navber';
import Banner from '../components/Banner';
import New from '../components/New';
import Ads from '../components/Ads';
import Offer from '../components/Offer';
import Footer from './../components/Footer';

const Home = () => {
  return (
    <div className='bg-[#090909]'>
      <Navber/>
      <Banner/>
      <New/>
      <Ads/>
      <Offer/>
      <Footer/>
    </div>
  )
}

export default Home
