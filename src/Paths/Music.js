import React from 'react'
import Album1 from '../components/Album1'
import Album2 from '../components/Album2'
import BG from '../components/BG'
import BackButton from '../components/BackButton'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 60px;
`

const Music = () => {
  return(
    <BG>
    <BackButton />
    <Wrapper>
      <Album2 />
      <Album1 />
    </Wrapper>
  </BG>
  )
}

export default Music
