import React, { Component } from 'react'
import Products from './Products'
import styled from 'styled-components'

const Headline = styled.h1`
  color: #fff;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 100px;

  @media(max-width:768px) {
    padding: 1rem;
    font-size: 20px;
    margin-bottom: 20px;
  }
`

const Text = styled.p`
  color: white;
  text-align: center;
  padding: 30px;

  a {
    text-decoration: none;
    color: white;
  }
`


export default class ProductGallery extends Component {
  render() {
    return(
      <div>
      <Headline>Visit our Bandcamp Page for secure downloads and to buy CD's & Vinyl</Headline>
      <Products data={this.props.data} />
      <Text>If you live in Champaign-Urbana, and would like to buy a record directly from Common Loon (which we will hand-deliver free of charge), email us at <a href="mailto:commonloonmusic@gmail.com">commonloonmusic@gmail.com</a></Text>
      </div>
    );
  }
}
