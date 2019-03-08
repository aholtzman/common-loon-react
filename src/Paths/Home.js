import React from 'react'
import styled from 'styled-components'

import HomeGrid from '../components/HomeGrid'
import BG from '../components/BG'
import SmallHome from '../components/SmallHome'
import HoldPage from '../components/Hold'

const HomeBG = styled(BG)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Home = () => {
  return(
    // <HomeBG>
    //   <HomeGrid />
    //   <SmallHome />
    // </HomeBG>
    <HoldPage />
  )
}

export default Home
