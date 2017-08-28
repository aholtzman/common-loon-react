import React from 'react'
import { Link as A } from 'react-router-dom'
import RoundDiv from './Round'
import styled from 'styled-components'

const Link = styled(A)`
  text-decoration: none;
  color: white;
  font-size: 22px;
`

const VRound = styled(RoundDiv)`
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 4;
`

const Video = () => {
  return (
    <VRound><Link to='/videos'>videos</Link></VRound>
  );
}

export default Video
