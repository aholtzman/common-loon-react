import React from 'react'
import { Link as A } from 'react-router-dom'
import RoundDiv from './Round'
import styled from 'styled-components'

const Link = styled(A)`
  text-decoration: none;
  color: white;
  font-size: 22px;`

const BBdiv = styled(RoundDiv)`
  margin: 20px;
  width:90px;
  height:70px;
`



const BackButton = () => {
  return (
    <BBdiv><Link to='/'>back</Link></BBdiv>
  );
}

export default BackButton
