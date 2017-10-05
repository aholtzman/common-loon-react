import React from 'react'
import styled from 'styled-components'
import CommonLoon from './Flicker'

const InnerBox = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 2;
`

  const Wrap = styled.div`
    width: 400px;
    height: 500px;
    display: block;
    position: relative;
    background: url(${require('../images/assets/CLgiff500px.gif')});
    grid-column-start: 2;
    grid-column-end: 7;
    grid-row-start: 1;
    grid-row-end: 5;
    z-index: 1;
  `

  const Hero = () => {
    return(
      <Wrap>
        <InnerBox>
          <CommonLoon />
        </InnerBox>
      </Wrap>
    );
  }

  export default Hero
