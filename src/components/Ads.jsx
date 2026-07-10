import React from 'react'
import Container from './Container';
import Ad from '../assets/Ads.jpg'
const Ads = () => {
  return (
    <div>
      <Container>
        <img className="p-20" src={Ad} alt="ads" />
      </Container>
    </div>
  )
}

export default Ads
