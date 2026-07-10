import React from 'react'
import Container from './Container';
import Ad from '../assets/Ads.jpg'
import Ad1 from '../assets/Ads1.jpg'
import Ad2 from '../assets/Ads2.jpg'


const Ads = () => {
  return (
    <div className="py-12.5">
      <Container className="">
        <div className="flex py-2">
          <div className="w-1/2 ">
            <img className="w-full max-h-100" src={Ad} alt="ads" />
          </div>
          <div className="w-1/2 ">
            <img className="w-full max-h-100" src={Ad2} alt="ads" />
          </div>
        </div>
        <div className="">
          <img className="w-full" src={Ad1} alt="ads" />
        </div>
      </Container>
    </div>
  )
}

export default Ads
