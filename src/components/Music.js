import React from 'react'
import { Link } from 'react-router-dom'
import RoundDiv from './Round'
import styled from 'styled-components'

const MRound = styled(RoundDiv)`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
`

const Music = () => {
  return (
    <MRound><Link to='/music'>music</Link></MRound>
  );
}

export default Music
