import React from 'react'
import RoundDiv from './Round'
import styled from 'styled-components'

const Link = styled.a`
  text-decoration: none;
  color: white;
  font-size: 22px;
`

const SRound = styled(RoundDiv)`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 4;
  grid-row-end: 6;
  z-index: 5;
`

const Shop = () => {
  return (
    <SRound><Link href='https://squareup.com/store/common-loon' target="_blank">shop</Link></SRound>
  );
}

export default Shop
