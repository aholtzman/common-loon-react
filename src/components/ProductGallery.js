import React, { Component } from 'react'
import Products from './Products'

export default class ProductGallery extends Component {
  render() {
    return(
      <Products data={this.props.data} />
    );
  }
}
