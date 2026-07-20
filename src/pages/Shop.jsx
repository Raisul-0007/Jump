import React from 'react'
import Container from '../components/Container';
import Filter from '../components/Filter';

const Shop = () => {
  return (
    <div>
      <Container>
        <div className="py-20">
          <h2 className="text-5xl italic">Shop</h2>
        </div>
          <div className="">
          <Filter/>
          </div>
        </Container>
    </div>
  )
}

export default Shop
