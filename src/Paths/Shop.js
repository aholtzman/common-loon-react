import React from 'react'
import ProductGallery from '../components/ProductGallery'
import BG from '../components/BG'
import data from './data'

const Shop = () => {
  return(
    <BG>
      <ProductGallery data={data} />
    </BG>
  )
}

export default Shop
