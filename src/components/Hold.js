import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h1 {
    color: dimgrey
  }
`

const HoldPage = () => {
  return (
    <Container>
    <h1>Common Loon</h1>
    <p>new music early 2019</p>
    </Container>
  )
}

export default HoldPage
