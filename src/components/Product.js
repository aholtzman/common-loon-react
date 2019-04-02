import React, { Component } from 'react'
import Image from './ProductImage'
import ProductWrap from './ProductWrap'

export default class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <ProductWrap>
      <a href={this.props.data.url}>
        <Image
          src={this.props.data.image}
          alt={this.props.data.title}
        />
        </a>
      </ProductWrap>
    );
  }
}
