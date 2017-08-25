import React from 'react'
import styled from 'styled-components'

import HomeGrid from '../components/HomeGrid'

const BG = styled.div`
  background: url(${require('../images/assets/bg.jpg')});
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Home = () => {
  return(
    <BG>
      <HomeGrid />
      <h1>home page</h1>
    </BG>
  )
}

export default Home
