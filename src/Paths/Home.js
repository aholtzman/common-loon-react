import React from 'react'
import styled from 'styled-components'

import Hero from '../components/Hero'

const BG = styled.div`
  background: url(${require('../images/assets/bg.jpg')});
  height: 100vh;
  color: white;
`

const Home = () => {
  return(
    <BG>
      <Hero />
      home page
    </BG>
  )
}

export default Home
