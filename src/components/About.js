import React from 'react'
import { Link as A } from 'react-router-dom'
import RoundDiv from './Round'
import styled from 'styled-components'

const Link = styled(A)`
  text-decoration: none;
  color: green;
`

const ARound = styled(RoundDiv)`
  grid-column-start: 6;
  grid-column-end: 8;
  grid-row-start: 2;
  grid-row-end: 3;
`

const About = () => {
  return (
    <ARound><Link to='/about'>about</Link></ARound>
  );
}

export default About
