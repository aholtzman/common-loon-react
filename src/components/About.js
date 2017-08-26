import React from 'react'
import { Link as A } from 'react-router-dom'
import RoundDiv from './Round'
import styled from 'styled-components'

const Link = styled(A)`
  text-decoration: none;
  color: #282828;
  font-size: 22px;
`

const ARound = styled(RoundDiv)`
  grid-column-start: 6;
  grid-column-end: 8;
  grid-row-start: 2;
  grid-row-end: 3;
  z-index: 5;
`

const About = () => {
  return (
    <ARound><Link to='/about'>about</Link></ARound>
  );
}

export default About
