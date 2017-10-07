import React, { Component } from 'react'
import styled from 'styled-components'
import Product from './Product'

const Display = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
`

export default class Products extends Component {
  render() {
    return (
      <Display>
        {this.props.data.map((data) => {
          return <Product data={data} key={data.id} name={data.name} />
        })}
      </Display>
    );
  }
}
