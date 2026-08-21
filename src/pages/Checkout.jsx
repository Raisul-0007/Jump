import React, { useState } from 'react'
import Container from '../components/Container'

const Checkout = () => {
  let [showPopUp, setShowPopUp] = useState(false)

  let [name, setName] = useState("")
  let [number, setNumber] = useState("")
  let [email, setEmail] = useState("")
  let [checked, setChecked] = useState(false)

  let handleName = (e)=>{
    setName(e.target.value)
  }
  let handleEmail = (e)=>{
    setEmail(e.target.value)
  }
  let handlePayment = (e)=>{
    e.preventDefault()
    setName("")
    setNumber("")
    setEmail("")
    setChecked(false)
  }
  let handlePopUp = ()=>{
    window.location.reload()
  }
  return (
    <div>
      <Container>
        Chekout
      </Container>
    </div>
  )
}

export default Checkout
