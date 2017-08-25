import React from 'react'
import { Link as A } from 'react-router-dom'
import RoundDiv from './Round'
import styled from 'styled-components'

const Link = styled(A)`
  text-decoration: none;
  color: red;
`

const SRound = styled(RoundDiv)`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 4;
  grid-row-end: 6;
`

const Shop = () => {
  return (
    <SRound><Link to='/shop'>shop</Link></SRound>
  );
}

export default Shop
