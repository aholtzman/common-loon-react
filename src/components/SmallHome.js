import React from 'react'
import styled from 'styled-components'

import Music from './Music'
import Videos from './Videos'
import About from './About'
import Shop from './Shop'
import CommonLoon from './Flicker'

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

const Wrapper = styled.div`
  display: none;

  @media (max-width: 750px) {
    display: flex;
    height: 100%;
    width: 100%;
    overflow: hidden;
    flex-direction: column;
  }
`

const SmallHome = () => {
  return (
    <Wrapper>
      <CommonLoon />
      <InnerBox>
        <Music />
        <Videos />
        <About />
        <Shop />
      </InnerBox>
    </Wrapper>
  );
}

export default SmallHome
