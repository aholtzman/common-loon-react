
import React from 'react'
import styled from 'styled-components'
import MediaGrid from './MediaGrid'
import About from './About'
import Shop from './Shop'
import Hero from './Hero'

const Grid = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 200px 120px 110px 70px 50px;
  grid-template-columns: 172px 28px 205px 120px 19px 28px 92;
`
const HomeGrid = () => {
    return (
      <Grid>
        <Hero />
        <MediaGrid />
        <Video />
        <About />
        <Shop />
      </Grid>
    );
}

export default HomeGrid
