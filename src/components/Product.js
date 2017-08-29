import React, { Component } from 'react'
import Image from './ProductImage'
import ProductWrap from './ProductWrap'
import Btn from './ProductButton'

export default class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <ProductWrap>
        <Image
          src={this.props.data.image}
          alt={this.props.data.title}
        />
        <div>
          <h2>{this.props.data.price}</h2>
          <h3>{this.props.data.name}</h3>
          <h3>{this.props.data.description}</h3>
        </div>
        <Btn>
          <a href={this.props.data.url}>{this.props.data.button}</a>
        </Btn>
      </ProductWrap>
    );
  }
}
