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
  opacity: 0;
  height: 0;
  width: 0;

  @media (max-width: 750px) {
    opacity: 1;
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
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
